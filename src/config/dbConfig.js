import mongoose from "mongoose";

export const connectMongoDB = () => {
  try {
    const mnogoUrl = "mongodb://127.0.0.1:27017/ft_ET";
    mongoose.set("strictQuery", true); // to supptess the wating  in the clg
    const conn = mongoose.connect(mnogoUrl);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message, "from ConnectMongod funtion");
  }
};
