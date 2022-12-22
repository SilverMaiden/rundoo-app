import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import useSWR from "swr";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import fetcher from "../../../../lib/fetcher";
import { StyledModal } from "../../common/StyledModal";
import { FormRowOne } from "./formRows/FormRowOne";
import { FormRowThree } from "./formRows/FormRowThree";
import { Supplier } from "@prisma/client";

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
  const { mutate } = useSWR<Supplier[], Error>("/api/suppliers", fetcher);

  const onSubmit: SubmitHandler<any> = async (data) => {
    const { name, logoUrl, ...addressData } = data;
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
      mutate();
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
