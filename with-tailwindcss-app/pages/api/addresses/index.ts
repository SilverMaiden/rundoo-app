// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Supplier } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const getSuppliersResult = await prisma.address.findMany();

    res.json(getSuppliersResult);
  }

  if (req.method === "POST") {
    const createSupplierResult = await prisma.address.create({
      data: JSON.parse(req.body),
    });

    res.json(createSupplierResult);
  }

  if (req.method === "PUT") {
    const updateSupplierResult = await prisma.address.update({
      where: {
        id: req.body.id,
      },
      data: req.body,
    });
    res.json(updateSupplierResult);
  }

  if (req.method === "DELETE") {
    const deleteSupplierResult = await prisma.address.delete({
      where: {
        id: req.body.id,
      }
    });
    res.json(deleteSupplierResult);
  }
}
