// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const getSuppliersResult = await prisma.supplier
      .findMany()
      .catch((error) => {
        res.json(error);
      });

    res.json(getSuppliersResult);
  }

  if (req.method === "POST") {
    const createSupplierResult = await prisma.supplier
      .create({
        data: JSON.parse(req.body),
      })
      .catch((error) => {
        res.json(error);
      });
    res.json(createSupplierResult);
  }
}
