import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
  console.error("❌ MongoDB connection failed");
  console.error(err.message); // 👈 ADD THIS
}
};

export default connectDB;

