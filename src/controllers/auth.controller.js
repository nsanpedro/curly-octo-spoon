import User from "../models/User";

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const createdUser = new User({
    userName,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await createdUser.save();

  res.status(200).json(savedUser);
};

export const signIn = async (req, res) => {
  res.json("sign IN");
};
