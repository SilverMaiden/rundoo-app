import { useState } from "react";
import { NavBar } from "./components/global/NavBar";
import { AddSupplierModal } from "./components/appModals/addSupplierModal/AddSupplierModal";
import { FixedDrawer } from "./components/global/FixedDrawer";
import { ParallaxProvider } from "react-scroll-parallax";
import Container from "@mui/material/Container";
import { SuppliersPageContent } from "./components/SuppliersPage/SuppliersPageContent";
import { Footer } from "./components/global/Footer";

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
        <Footer />
      </Container>
    </ParallaxProvider>
  );
};

export default Suppliers;
