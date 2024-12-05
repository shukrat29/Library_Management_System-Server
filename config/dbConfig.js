import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("Provide MONGO_URL connection string");
  }
  const con = await mongoose.connect(process.env.MONGO_URL);
};
