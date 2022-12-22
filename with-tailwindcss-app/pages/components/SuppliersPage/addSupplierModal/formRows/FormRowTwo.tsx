import { FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { IFormInputs } from "../validationSchema";

type Props = {
  control: Control<IFormInputs, any>;
  errors: Partial<FieldErrorsImpl<IFormInputs>>;
};

export const FormRowTwo = ({ control }: Props) => {
  return (
    <div className=" flex w-full justify-between">
      <Controller
        name="address_1"
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
        name="address_2"
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
