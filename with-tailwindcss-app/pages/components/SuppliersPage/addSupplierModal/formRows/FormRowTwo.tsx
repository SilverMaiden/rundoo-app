import { FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type Props = {
  control: Control<
    {
      name: string;
      logoUrl: string;
      address1: string;
      address2: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    },
    any
  >;
};

export const FormRowTwo = ({ control }: Props) => {
  return (
    <div className=" flex w-full justify-between">
      <Controller
        name="address1"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Address 1</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="Address 1"
              className="w-64 h-10"
            />
          </FormControl>
        )}
      />
      <Controller
        name="address2"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Address 2</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="Address 2"
              className="w-64 h-10"
            />
          </FormControl>
        )}
      />
    </div>
  );
};
