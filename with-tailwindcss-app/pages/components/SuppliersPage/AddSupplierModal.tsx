import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";

import { StyledModal } from "../common/StyledModal";
import { useState } from "react";
import Box from "@mui/system/Box";
import useSWRMutation from "swr/mutation";
import { AddSupplierForm } from "./AddSupplierForm";

type Props = {
  open: boolean;
  handleClose: () => void;
};
// Fetcher implementation.
// The extra argument will be passed via the `arg` property of the 2nd parameter.
// In the example below, `arg` will be `'my_token'`
async function addSupplier(url: RequestInfo | URL, { arg }: any, data: any) {
  await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${arg}`,
    },
  });
}

export const AddSupplierModal = ({ open, handleClose }: Props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    logoUrl: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleSubmit = () => {};

  return (
    <StyledModal size="md" open={open} handleClose={handleClose}>
      <AddSupplierForm handleClose={handleClose} />
    </StyledModal>
  );
};
