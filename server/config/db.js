import mongoose from "mongoose";
import { DB_URI } from "./env.js";

let connectDB = async () => {
  try {
    let connection = await mongoose.connect(DB_URI);
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
