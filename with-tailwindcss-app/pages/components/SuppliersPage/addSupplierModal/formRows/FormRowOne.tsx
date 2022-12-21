import { FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type FormProps = {
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

export const FormRowOne = ({ control }: FormProps) => {
  return (
    <div className=" flex w-full justify-between">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Name</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="Tony Stark"
              className="w-56 h-10"
            />
          </FormControl>
        )}
      />
      <Controller
        name="logoUrl"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Logo URL</FormLabel>
            <OutlinedInput
              {...field}
              placeholder="www.some-logo-url.com"
              className="w-72 h-10"
            />
          </FormControl>
        )}
      />
    </div>
  );
};
