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

export const FormRowThree = ({ control }: Props) => {
  return (
    <div className=" flex w-full justify-between">
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>City</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="city"
              className="w-40 h-10"
            />
          </FormControl>
        )}
      />
      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>State</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="state"
              className="w-32 h-10"
            />
          </FormControl>
        )}
      />
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Country</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="country"
              className="w-50 h-10"
            />
          </FormControl>
        )}
      />
    </div>
  );
};
