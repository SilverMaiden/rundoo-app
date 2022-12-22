import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyledModal } from "../../common/StyledModal";
import { FormRowOne } from "./formRows/FormRowOne";
import { FormRowThree } from "./formRows/FormRowThree";
import { FormRowTwo } from "./formRows/FormRowTwo";
import { defaultValues, IFormInputs, schema } from "./validationSchema";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const AddSupplierModal: React.FC<Props> = ({ open, handleClose }: Props) => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<IFormInputs>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<any> = async (data) => {

    const cleanedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value.toLowerCase().trim()])
    );
    const { name, logoUrl, ...addressData } = cleanedData;

    const newSupplierData = {
      name: name,
      logo_url: logoUrl,
    };
    await fetch("/api/addresses", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(addressData),
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        fetch("/api/suppliers", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({...newSupplierData, address_id: data.id}),
        });
      });
      handleClose();
  };

  return (
    <StyledModal open={open} handleClose={handleClose} size="md">
      <form
        className="space-y-4"
        onBlur={() => {
          trigger();
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRowOne
          control={control}
          errors={errors}
          touchedFields={touchedFields}
        />
        <FormRowTwo control={control} errors={errors} />
        <FormRowThree control={control} errors={errors} />
        {/* Fourth Row */}
        <div className=" flex w-full justify-between mb-4">
          <Controller
            name="zip_code"
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
