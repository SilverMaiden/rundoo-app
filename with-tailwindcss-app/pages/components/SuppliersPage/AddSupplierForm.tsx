import { Button, FormControl, FormLabel, OutlinedInput } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
type Props = {
  handleClose: () => void;
};

export const AddSupplierForm = ({ handleClose }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      logoUrl: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* First Row */}
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
      {/* Second Row */}
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
      {/* Third Row */}
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
  );
};
