import { useState } from "react";
import { GlobalNavBar } from "./components/GlobalNavBar";
import { AddSupplierModal } from "./components/suppliersPage/addSupplierModal/AddSupplierModal";
import { SuppliersPageContent } from "./components/suppliersPage/SuppliersPageContent";

const Suppliers = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <GlobalNavBar handleClose={handleModalClose} open={open} setOpen={setOpen} />
      <SuppliersPageContent />
      <AddSupplierModal open={open} handleClose={handleModalClose} />

    </div>
  );
};

export default Suppliers;
