import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { SupplierCardsDisplay } from "./SupplierCardsDisplay";
import { SetStateAction, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxAppBanner } from "../ParallaxAppBanner";

export const SuppliersPageContent: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const newSearch = e.target.value.toString();
    setSearchField(newSearch.toLowerCase());
  };

  return (
    <div className="flex w-full h-full align-middle justify-center text-center mb-10">
      <Container disableGutters maxWidth={false}>
        <ParallaxAppBanner />
        <h1 className="mt-10 text-2xl px-96 md:text-4xl text-gray-400 font-thin">
          Explore our extensive collection of the worlds best suppliers
        </h1>
        <TextField
          onChange={handleSearchChange}
          value={searchField}
          className="w-80 h-20 mt-40"
          label="Search suppliers"
        />
        <SupplierCardsDisplay searchField={searchField} />
      </Container>
    </div>
  );
};
