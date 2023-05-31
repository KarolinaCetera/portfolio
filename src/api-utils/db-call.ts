import { Db, MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export const initDb = async (res: NextApiResponse) => {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.xoklb.mongodb.net/portfolio?retryWrites=true&w=majority"
    );
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
