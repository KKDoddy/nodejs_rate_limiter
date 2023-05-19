import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    const access_token = req.header("access_token");
    const verify = jwt.verify(access_token, process.env.JWT_SECRET);
    const userExists = {
      id: 1,
      email: "example@example.com",
    };
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
      error: "Malformed/ Incorrect security token ! Check token and try again.",
    });
  }
};

export default verifyToken;
