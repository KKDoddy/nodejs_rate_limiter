const LIMIT_TYPE = {
  MONTHLY: "MONTHLY",
  PERSECOND: "PERSECOND",
};

const limitRate = (redisClient) => {
  return async (req, res, next) => {
    const user = req.user && req.user.dataValues ? req.user.dataValues : null;
    if (!user) {
      return next();
    }
    if (user.id && user.Users_Plan) {
      let { maxRequestsPerMonth, startDate, requestsPerSecond, userId } =
        user.Users_Plan.dataValues;

      const isSecondOverLimit = await isOverLimit(
        redisClient,
        userId,
        requestsPerSecond,
        LIMIT_TYPE.PERSECOND,
        1
      );
      if (isSecondOverLimit) {
        return res.status(429).json({
          status: 429,
          message: "Requests per-second limit reached",
        });
      }
      startDate = new Date(`${startDate}`);
      const today = new Date(new Date().setHours(0, 0, 0, 0));
      let resetDate = new Date(
        `${today.getMonth() + 1}-${startDate.getDate()}-${today.getFullYear()}`
      );
      if (!(resetDate - today > 0)) {
        resetDate = incrementDateByAMonth(resetDate);
      }
      const isMonthOverLimit = await isOverLimit(
        redisClient,
        userId,
        maxRequestsPerMonth,
        LIMIT_TYPE.MONTHLY,
        (resetDate - today) / 1000
      );
      if (isMonthOverLimit) {
        return res.status(429).json({
          status: 429,
          message: "Monthly requests limit reached",
        });
      }
      return next();
    }
  };
};

const isOverLimit = async (redisClient, id, limit, limitType, expiresIn) => {
  const key = `${id}_${limitType}`;
  let res;
  try {
    res = await redisClient.incr(key);
  } catch (err) {
    throw err;
  }
  if (res > limit) {
    return true;
  }
  redisClient.expire(key, expiresIn);
};

const incrementDateByAMonth = (date) => {
  var result = new Date(date);
  result.setMonth(result.getMonth() + 1);
  return result;
};

export { limitRate };
