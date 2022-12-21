import { PermanentDrawer } from "../PermanentDrawer";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { SuppliersDisplay } from "./SuppliersDisplay";
import { SetStateAction, useState } from "react";
import { Button } from "@mui/material";
import { AddSupplierModal } from "./addSupplierModal/AddSupplierModal";

export const SuppliersPageContent = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const newSearch = e.target.value.toString();
    setSearchField(newSearch.toLowerCase());
  };

  return (
    <div className="flex align-middle justify-center text-center h-screen w-full">
      <PermanentDrawer />
      <AddSupplierModal open={open} handleClose={handleModalClose} />

      <Container maxWidth="lg">
        <div className="w-full h-full">
          <TextField
            onChange={handleSearchChange}
            value={searchField}
            className="w-80 h-20 mt-40"
            label="Search suppliers"
          />
          <SuppliersDisplay searchField={searchField} />
        </div>
        <Button
          onClick={() => setOpen(true)}
          className="bg-purple-500 text-white"
        >
          add supplier
        </Button>
      </Container>
    </div>
  );
};
