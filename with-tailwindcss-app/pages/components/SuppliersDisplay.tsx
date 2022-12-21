import * as react from "react";
import { SupplierCard } from "./SupplierCard";

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Supplier } from "@prisma/client";

export const SuppliersDisplay = () => {
  const { data, error } = useSWR<Supplier[], Error>("/api/suppliers", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;
  console.log("data is ", data);
  return (
    <div className="mt-20 flex flex-row space-x-3 align-middle justify-center">
      {data.map((supplier) => (
        <SupplierCard supplier={supplier} />
      ))}
    </div>
  );
};
