import { Db, MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const url = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.xoklb.mongodb.net/${process.env.key}?retryWrites=true&w=majority`;

export const initDb = async (res: NextApiResponse) => {
  try {
    const client = await MongoClient.connect(url);
    return client;
  } catch (e) {
    res.status(500).json({ message: "Connecting to the database failed" });
  }
};

export const getDataFromDB = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const collection = req.url?.split("/").at(-1) as string;
  const client = await initDb(res);
  const db = client?.db() as Db;

  try {
    const data = await db?.collection(collection).find().toArray();
    res.status(200).json({ [collection]: data });
  } catch (error) {
    res.status(500).json({ message: "Getting elements failed." });
  }

  client?.close();
};
