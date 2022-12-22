// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Supplier } from "@prisma/client";
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
        console.log(error);
      });

    res.json(getSuppliersResult);
  }

  if (req.method === "POST") {
    console.log(req.body);
    const createSupplierResult = await prisma.supplier
      .create({
        data: JSON.parse(req.body),
      })
      .catch((error) => {
        console.log("error is ", error);
        res.json(error);
      });
    console.log("createSupplierResult is ", createSupplierResult);
    res.json(createSupplierResult);
  }
}
