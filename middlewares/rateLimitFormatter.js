import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    const userExists = req.user;

    if (userExists) {
      req.user = userExists;
      return next();
    }
    return res.status(401).json({
      status: 401,
      error: "User not recognised. Please create account and try again.",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: "We are unable to process request",
    });
  }
};

export default verifyToken;
