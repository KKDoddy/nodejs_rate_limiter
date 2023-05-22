import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateToken = async ({ email, id }) => {
  const generatedToken = jwt.sign({ email, id }, process.env.JWT_SECRET);
  return generatedToken;
};

export { generateToken };
