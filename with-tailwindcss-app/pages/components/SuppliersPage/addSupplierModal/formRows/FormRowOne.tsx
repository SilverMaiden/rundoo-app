import { FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { IFormInputs } from "../validationSchema";

type Props = {
  control: Control<IFormInputs, any>,
  errors: Partial<FieldErrorsImpl<IFormInputs>>
};

export const FormRowOne = ({ control }: Props) => {
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
