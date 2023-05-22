import { findUserByEmail } from "../queries/usersQueries";
import { checkPassword } from "./bcryptService";
import { generateToken } from "./jwtService";

const loginUser = async (email, password) => {
  const userExists = await findUserByEmail(email);
  if (
    userExists &&
    (await checkPassword(password, userExists.salt, userExists.password))
  ) {
    const token = await generateToken({
      email: userExists.email,
      id: userExists.id,
    });
    return token;
  }
  return null;
};

export { loginUser };
