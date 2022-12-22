// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Supplier } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { supplierId }  = <{supplierId: string}>req.query;
    const getSupplierResult = await prisma.supplier.findMany({where: {
        id: supplierId
    }});

    res.json(getSupplierResult);
  }

  if (req.method === "PUT") {
    const { supplierId }  = <{supplierId: string}>req.query;

    const updateSupplierResult = await prisma.supplier.update({
      where: {
        id: supplierId
      },
      data: JSON.parse(req.body),
    });
    res.json(updateSupplierResult);
  }

  if (req.method === "DELETE") {
    const { supplierId }  = <{supplierId: string}>req.query;

    const deleteSupplierResult = await prisma.supplier.delete({
      where: {
        id: supplierId,
      }
    });
    res.json(deleteSupplierResult);
  }
}
