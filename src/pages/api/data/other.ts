import { NextApiRequest, NextApiResponse } from "next";
import { getDataFromDB } from "@component/api-utils/db-call";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await getDataFromDB(req, res);
}

export default handler;
