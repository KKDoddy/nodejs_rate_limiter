import { loginUser } from "../services/usersService";

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginUser(email, password);
  if (token) {
    return res.status(200).json({
      status: 200,
      message:
        "Please paste the authorization key from the data object below in the headers section",
      data: { authorization: token },
    });
  }
  return res
    .status(401)
    .json({ status: 401, error: "incorrect email or password" });
};

export { login };
