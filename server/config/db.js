import mongoose from "mongoose";
const mongoURL = process.env.MONGO_URL;

export const connectDB = async () => {
  await mongoose
    .connect(mongoURL, {
      dbName: "Acadex",
    })
    .then(() => {
      console.log("Database connected successfully!!");
    })
    .catch((err) => {
      console.log("Database connection failed ", err.message);
    });
};
