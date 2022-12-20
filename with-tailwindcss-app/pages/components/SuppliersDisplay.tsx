import * as react from "react";
import { SupplierCard } from "./SupplierCard";

const tempData = ["a", "b", "c"];

export const SuppliersDisplay = () => {
  return (
    <div className="mt-20 flex flex-row space-x-3 align-middle justify-center">
      {tempData.map(() => (
        <SupplierCard />
      ))}
    </div>
  );
};
