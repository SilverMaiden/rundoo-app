import * as react from "react";
import { SupplierCard } from "./SupplierCard";

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Supplier } from "@prisma/client";

type Props = {
  searchField: string;
};

export const SuppliersDisplay = ({ searchField }: Props) => {
  const { data, error } = useSWR<Supplier[], Error>("/api/suppliers", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  const filteredData = data.filter((supplier) =>
    supplier.name?.toLowerCase().includes(searchField)
  );
  console.log(filteredData);
  return (
    <div className="mt-20 flex flex-row space-x-3 align-middle justify-center">
      {filteredData.map((supplier) => (
        <SupplierCard supplier={supplier} />
      ))}
    </div>
  );
};
