import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

type TInput = {
  db: string | undefined;
};
export default ({ db }: TInput) => {
  if (!db) {
    throw new Error("db string is undefined");
  }
  const connect = () => {
    mongoose
      .connect(db)
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};
