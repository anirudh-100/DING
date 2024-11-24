import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Sequelize, DataTypes } from "sequelize";

// Set up Sequelize
const sequelize = new Sequelize("DING://Whatthefuck@27@localhost:3306/ding"); 

// Define the User model
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export async function POST(req: Request) {
  try {
    const { email, password, phone, fullName } = await req.json();

    // Log received data for debugging purposes
    console.log("Received data:", { email, password, phone, fullName });

    // Validate inputs
    if (!email || !password || !phone || !fullName) {
      return NextResponse.json(
        { error: "Email, password, phone, and fullName are required." },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with fullName included
    const user = await User.create({
      email,
      password: hashedPassword,
      phone,
      fullName,
    });

    return NextResponse.json({ message: "User created successfully", user });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
