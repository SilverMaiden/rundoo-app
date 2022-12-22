import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import classnames from "classnames";
import {
  Control,
  Controller,
  FieldErrorsImpl,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";
import { IFormInputs } from "../validationSchema";

type Props = {
  control: Control<IFormInputs, any>;
  errors: Partial<FieldErrorsImpl<IFormInputs>>;
  trigger: UseFormTrigger<IFormInputs>;
  watch: UseFormWatch<IFormInputs>;
  setValue: UseFormSetValue<IFormInputs>;
  touchedFields: Partial<Readonly<IFormInputs>>;
};

export const FormRowOne = ({
  control,
  trigger,
  watch,
  errors,
  setValue,
  touchedFields,
}: Props) => {
  console.log(errors);
  console.log(touchedFields);

  return (
    <div className="flex w-full justify-between">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl
            className={classnames(
              "flex align-middle justify-center",
              // Add a mb-6 if the name field doesn't have an errors, but the
              // logoUrl field does, so they're the same height
              !errors.name &&
                touchedFields.logoUrl &&
                !!errors.logoUrl &&
                "mb-6"
            )}
          >
            <FormLabel>Name</FormLabel>
            <OutlinedInput
              {...field}
              error={!!errors.name && !!touchedFields.name}
              placeholder="Tony Stark"
              className="w-56 h-10"
            />
            {errors.name && (
              <FormHelperText>{errors.name.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
      <Controller
        name="logoUrl"
        control={control}
        render={({ field }) => (
          <FormControl
            className={classnames(
              "flex align-middle justify-center",
              // Add a mb-6 if the logoUrl field doesn't have an error, but the
              // name field does, so they're the same height
              ((errors.name && !touchedFields.logoUrl) ||
                (errors.name && !errors.logoUrl)) &&
                "mb-6"
            )}
          >
            <FormLabel>Logo URL</FormLabel>
            <OutlinedInput
              error={!!errors.logoUrl && !!touchedFields.logoUrl}
              {...field}
              placeholder="https://www.some-logo-url.com"
              className="w-72 h-10"
            />

            {!!errors.logoUrl &&
              !!touchedFields.logoUrl &&
              touchedFields.logoUrl && (
                <FormHelperText>{errors.logoUrl.message}</FormHelperText>
              )}
          </FormControl>
        )}
      />
    </div>
  );
};
