import bcrypt from "bcrypt";

const checkPassword = async (password, salt, hashedPassword) => {
  const claimed = bcrypt.hashSync(password, salt);
  if (claimed === hashedPassword) {
    return true;
  }
  return false;
};

export { checkPassword };
