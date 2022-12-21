import { PermanentDrawer } from "./PermanentDrawer";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { SuppliersDisplay } from "./SuppliersDisplay";
import { SetStateAction, useState } from "react";

export const SuppliersPageContent = () => {
    const [searchField, setSearchField] = useState<string>("")

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        const newSearch = e.target.value.toString();
        setSearchField(newSearch.toLowerCase())
    }

  return (
    <div className="flex align-middle justify-center text-center h-screen w-full">
      <PermanentDrawer />

      <Container maxWidth="lg">
        <div className="w-full h-full ">
          <TextField onChange={handleChange} value={searchField} className="w-80 h-20 mt-40" label="Search suppliers" />
          <SuppliersDisplay searchField={searchField} />
        </div>
      </Container>
    </div>
  );
};
