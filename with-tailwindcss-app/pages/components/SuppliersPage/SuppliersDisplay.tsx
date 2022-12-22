import * as react from "react";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import { SupplierCard } from "./SupplierCard";
import { Supplier } from "@prisma/client";

type Props = {
  searchField: string;
};

export const SuppliersDisplay: React.FC<Props> = ({ searchField }: Props) => {
  const { data, error } = useSWR<Supplier[], Error>("/api/suppliers", fetcher);
  if (error) return <div>An error occured</div>;
  if (!data) return <div>Loading ...</div>;
console.log(data)
  const filteredData = data?.filter((supplier) =>
    supplier.name?.toLowerCase().includes(searchField)
  );

  return (
    <div className="mt-20 flex flex-row space-x-3 space-y-3 align-middle justify-center flex-wrap">
      {filteredData.map((supplier) => (
        <SupplierCard supplier={supplier} />
      ))}
    </div>
  );
};
