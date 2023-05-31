import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.xoklb.mongodb.net/portfolio?retryWrites=true&w=majority"
  );

  return client;
};
