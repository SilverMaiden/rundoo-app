import { useState } from "react";
import { NavBar } from "./components/global/NavBar";
import { AddSupplierModal } from "./components/appModals/addSupplierModal/AddSupplierModal";
import { SuppliersPageContent } from "./components/suppliersPage/SuppliersPageContent";
import { FixedDrawer } from "./components/global/FixedDrawer";
import { ParallaxProvider } from "react-scroll-parallax";
import Container from "@mui/material/Container";

const Suppliers = () => {
  //State for the Add Supplier Modal
  const [openAddSupplierModal, setOpenAddSupplierModal] =
    useState<boolean>(false);
  const handleAddSupplierModalClose = () => {
    setOpenAddSupplierModal(false);
  };

  return (
    <ParallaxProvider>
      <Container disableGutters maxWidth={false}>
        <FixedDrawer />
        <NavBar setOpen={setOpenAddSupplierModal} />
        <SuppliersPageContent />
        {/* GLOBAL MODALS GO HERE */}
        <AddSupplierModal
          open={openAddSupplierModal}
          handleClose={handleAddSupplierModalClose}
        />
      </Container>
    </ParallaxProvider>
  );
};

export default Suppliers;
