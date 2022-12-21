// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Supplier } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Supplier[]>
) {
  const suppliers = await prisma.supplier.findMany();

  res.json(suppliers);
}
