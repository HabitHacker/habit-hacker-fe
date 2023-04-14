import { NextApiRequest, NextApiResponse } from "next";
import prisma from "src/utils/prisma";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.execution.create({
    data: JSON.parse(req.body)
  });

  res.json({
    body: {
      data: result,
    }
  });
}
