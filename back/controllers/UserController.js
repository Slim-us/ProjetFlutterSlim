import UserModel from "../models/UserModel.js";

// Function to create a new user
export const createUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const newUser = new UserModel({
      userName,
      password
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
