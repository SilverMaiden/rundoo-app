// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { addressId } = <{ addressId: string }>req.query;
    const getAddressResult = await prisma.address.findMany({
      where: {
        id: addressId,
      },
    });

    res.json(getAddressResult);
  }
}
