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
  const newImage = await prisma.userImage.create({
    data: JSON.parse(req.body)
  });

  res.json({
    body: {
      image: newImage,
    }
  });
}
