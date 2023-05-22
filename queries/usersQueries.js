import models from "../models/index.js";

const { Users } = models;

const findUserByEmail = async (email) => {
  return await Users.findOne({
    where: { email },
  });
};

export { findUserByEmail };
