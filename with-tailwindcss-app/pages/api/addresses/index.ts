// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const getAddressesResult = await prisma.address.findMany();

    res.json(getAddressesResult);
  }

  if (req.method === "POST") {
    const createAddressResult = await prisma.address.create({
      data: JSON.parse(req.body),
    });

    res.json(createAddressResult);
  }

  if (req.method === "PUT") {
    const updateAddressResult = await prisma.address.update({
      where: {
        id: req.body.id,
      },
      data: req.body,
    });
    res.json(updateAddressResult);
  }

  if (req.method === "DELETE") {
    const deleteAddressResult = await prisma.address.delete({
      where: {
        id: req.body.id,
      }
    });
    res.json(deleteAddressResult);
  }
}
