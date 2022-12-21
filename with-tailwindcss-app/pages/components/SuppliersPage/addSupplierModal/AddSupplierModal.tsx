import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { StyledModal } from "../../common/StyledModal";
import { FormRowOne } from "./formRows/FormRowOne";
import { FormRowThree } from "./formRows/FormRowThree";
import { FormRowTwo } from "./formRows/FormRowTwo";
import { defaultValues, IFormInputs } from "./validationSchema";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const AddSupplierModal = ({ open, handleClose }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues,
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <StyledModal open={open} handleClose={handleClose} size="md">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormRowOne control={control} errors={errors} />
        <FormRowTwo control={control} errors={errors} />
        <FormRowThree control={control} errors={errors} />
        {/* Fourth Row */}
        <div className=" flex w-full justify-between mb-4">
          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <FormControl className="flex align-middle justify-center">
                <FormLabel>Zip/Postal Code</FormLabel>
                <OutlinedInput
                  {...field}
                  placeholder="ex.90034"
                  className="w-60 h-10"
                />
              </FormControl>
            )}
          />
        </div>
        <div className="flex justify-end space-x-2 w-full">
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </StyledModal>
  );
};
