import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const createdUser = new User({
    userName,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const rolesFound = await Role.find({ name: { $in: roles } });
    createdUser.roles = rolesFound.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "User" });
    createdUser.roles = [role._id];
  }

  const savedUser = await createdUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).populate("roles");

  if (!user) {
    return res.status(400).json({ message: "User not found, try again" });
  }

  const matchPassword = await User.comparePassword(password, user.password);

  if (!matchPassword) {
    res.status(401).json({ token: null, msg: "invalid password" });
  }

  const token = jwt.sign({ id: user._id }, config.SECRET, {
    expiresIn: 86400,
  });

  //   console.log("user found ==> ", user);
  res.json({ token });
};
