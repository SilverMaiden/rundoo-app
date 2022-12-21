import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";

import { StyledModal } from "./StyledModal";
import { useState } from "react";
import Box from "@mui/system/Box";

type Props = {
  open: boolean;
  handleClose: () => void;
};
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

  return (
    <StyledModal size="md" open={open} handleClose={handleClose}>
      <Box component="form">
        {/* Spacer */}
        <div className="space-y-4">
          {/* First Row */}
          <div className=" flex w-full justify-between">
            <FormControl className="flex align-middle justify-center">
              <FormLabel>Name</FormLabel>
              <OutlinedInput
                name="name"
                placeholder="Tony Stark"
                onChange={(e) => {
                  setFormValues({ ...formValues, name: e.target.value });
                }}
                value={formValues.name}
                className="w-56 h-10"
              />
            </FormControl>

            <FormControl className="flex align-middle justify-center">
              <FormLabel>Logo URL</FormLabel>

              <OutlinedInput
                name="logo-url"
                placeholder="www.logourl.com"
                onChange={(e) => {
                  setFormValues({ ...formValues, logoUrl: e.target.value });
                }}
                className="w-72 h-10"
              />
            </FormControl>
          </div>
          {/* Second Row */}
          <div className=" flex w-full justify-between">
            <FormControl className="flex justify-between">
              <FormLabel>Address 1</FormLabel>

              <OutlinedInput
                name="address1"
                placeholder="420 Stark Drive"
                onChange={(e) => {
                  setFormValues({ ...formValues, address1: e.target.value });
                }}
                value={formValues.address1}
                className="w-64 h-10 "
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address 2</FormLabel>

              <OutlinedInput
                name="address2"
                placeholder="Condo 221"
                onChange={(e) => {
                  setFormValues({ ...formValues, address2: e.target.value });
                }}
                className="w-64  h-10"
              />
            </FormControl>
          </div>
          {/* Third Row */}
          <div className=" flex w-full justify-between">
            <FormControl>
              <FormLabel>City</FormLabel>

              <OutlinedInput
                name="city"
                placeholder="City"
                onChange={(e) => {
                  setFormValues({ ...formValues, address2: e.target.value });
                }}
                className="w-40  h-10"
              />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>

              <OutlinedInput
                name="state"
                placeholder="State"
                onChange={(e) => {
                  setFormValues({ ...formValues, address2: e.target.value });
                }}
                className="w-32  h-10"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Country</FormLabel>

              <OutlinedInput
                name="country"
                placeholder="Country"
                onChange={(e) => {
                  setFormValues({ ...formValues, address2: e.target.value });
                }}
                className="w-50  h-10"
              />
            </FormControl>
          </div>
          {/* Fourth Row */}
          <div className=" flex w-full justify-between mb-4">
            <FormControl>
              <FormLabel>Zip/Postal Code</FormLabel>

              <OutlinedInput
                name="zipcode"
                placeholder="Zip Code"
                onChange={(e) => {
                  setFormValues({ ...formValues, address2: e.target.value });
                }}
                className="w-60  h-10"
              />
            </FormControl>
          </div>
        </div>
        <div className="flex justify-end space-x-2 w-full">
          <Button>Cancel</Button>
          <Button>Confirm</Button>
        </div>
      </Box>
    </StyledModal>
  );
};
