import { Op } from "sequelize";
import models from "../models/index.js";

const { User } = models;

const findUserByUsernameOrEmail = async (usernameOrEmail) => {
  return await User.findOne({
    where: {
      [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    },
  });
};

export { findUserByUsernameOrEmail };
