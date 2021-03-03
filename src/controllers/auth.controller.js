import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const createdUser = new User({
    userName,
    email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await createdUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  res.json("sign IN");
};
