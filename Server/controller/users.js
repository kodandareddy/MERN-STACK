import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../modals/user.js";
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(404).json({ message: "User does'nt exists" });
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid credentials." });
      }
      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        "xyz",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({ result: existingUser, token });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });
    if (password != confirmPassword)
      return res.status(400).josn({ message: "Passwords dont match" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      {
        email,
        id: result._id,
      },
      "xyz",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
