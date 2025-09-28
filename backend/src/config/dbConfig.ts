import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_STRING}`
    );
    console.log(
      "connected to mongodb succesfully",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("failed to connect with mongodb", error);
  }
};

export default connectDB;
