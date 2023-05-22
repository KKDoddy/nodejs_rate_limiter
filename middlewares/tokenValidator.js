import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import models from "../models";

dotenv.config();

const { Users, Users_Plans } = models;

const verifyToken = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    const verify = jwt.verify(authorization, process.env.JWT_SECRET);
    const userExists = await Users.findOne({
      where: { id: verify.id },
      include: Users_Plans,
    });
    if (userExists) {
      req.user = userExists;
      return next();
    }
    return res.status(401).json({
      status: 401,
      error: "User not recognised. Please create account and try again.",
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error:
        "Malformed/ Incorrect security token! Please provide a valid 'authorization' key in the Headers section",
    });
  }
};

export { verifyToken };
