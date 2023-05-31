import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "@component/api-utils/connect-db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    client = await connectDatabase();
  } catch (e) {
    res.status(500).json({ message: "Connecting to the database failed" });
  }

  const db = client?.db();

  try {
    const other = await db?.collection("other").find().toArray();
    res.status(200).json({ other });
  } catch (error) {
    res.status(500).json({ message: "Getting elements failed." });
  }

  client?.close();
}

export default handler;