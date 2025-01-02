import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User"; // Assuming you have a User model
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      // Connect to the database
      await dbConnect();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create a new user
      const newUser = new User({
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
