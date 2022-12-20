import * as React from "react";
import { PermanentDrawer } from "./PermanentDrawer";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

export const SuppliersPageContent = () => {
  return (
    <div className="flex align-middle justify-center text-center h-screen w-full">
      <PermanentDrawer />

      <Container maxWidth="lg">
        <div className="w-full h-full border-2 border-pink-300">
          <TextField className="w-80 h-20 mt-20" label="Search suppliers" />
        </div>
      </Container>
    </div>
  );
};
