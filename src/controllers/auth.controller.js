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
  console.log("save user ==> ", savedUser);

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  res.json("sign IN");
};
