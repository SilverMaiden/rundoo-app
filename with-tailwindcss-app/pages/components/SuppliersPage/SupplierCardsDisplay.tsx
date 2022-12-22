import * as React from "react";
import useSWR from "swr";
import fetcher from "../../../lib/fetcher";
import { SupplierCard } from "./SupplierCard";
import { Supplier } from "@prisma/client";
import { useState } from "react";
import { DeleteSupplierModal } from "../appModals/deleteSupplierModal/DeleteSupplierModal";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  searchField: string;
};

export const SupplierCardsDisplay: React.FC<Props> = ({ searchField }: Props) => {
  //State for the Delete Supplier Confirmation Modal
  const [openDeleteSupplierModal, setOpenDeleteSupplierModal] =
    useState<boolean>(false);
  const handleDeleteSupplierModalClose = () => {
    setOpenDeleteSupplierModal(false);
  };
  //Child card components will set the delete id for the supplier to be deleted on click of the
  //deletion button

  const [supplierToDelete, setSupplierToDelete] = useState<Supplier | null>(
    null
  );
  const { data, error, isLoading, mutate } = useSWR<Supplier[], Error>(
    "/api/suppliers",
    fetcher,
    { refreshInterval: 1000 }
  );
  if (error) return <div>An error occured</div>;
  if (!data) {
    //Loading state
    if (isLoading) return <CircularProgress />;
    else
    //Error state if error is not returned, but data does not exist and isn't loading.
      return (
        <div> There was a problem loading your data. Please try again.</div>
      );
  }
  console.log(data);

  const filteredData = data.filter((supplier) =>
    supplier.name?.toLowerCase().includes(searchField)
  );

  return (
    <div className="mt-20 flex flex-row space-x-3 space-y-3 align-middle justify-center flex-wrap">
      {filteredData.map((supplier) => (
        <SupplierCard
          supplier={supplier}
          setSupplierToDelete={setSupplierToDelete}
          setOpenDeleteSupplierModal={setOpenDeleteSupplierModal}
        />
      ))}
      {supplierToDelete && (
        <DeleteSupplierModal
          supplier={supplierToDelete}
          open={openDeleteSupplierModal}
          handleClose={handleDeleteSupplierModalClose}
        />
      )}
    </div>
  );
};
