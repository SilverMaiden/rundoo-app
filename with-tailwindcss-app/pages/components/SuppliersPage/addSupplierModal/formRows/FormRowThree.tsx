import {
  FormControl,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { Country, State, IState } from "country-state-city";
import { useState } from "react";
import { IFormInputs } from "../validationSchema";

type Props = {
  control: Control<IFormInputs, any>,
  errors: Partial<FieldErrorsImpl<IFormInputs>>
};

export const FormRowThree = ({ control }: Props) => {
  const allCountries = Country.getAllCountries();
  let currentRegions: IState[] | null = null;
  const [currentCountryCode, setCurrentCountryCode] = useState<string>("");

  currentRegions = State.getStatesOfCountry(currentCountryCode);
  console.log(currentCountryCode);
  console.log("current regions is ", currentRegions);
  return (
    <div className="flex w-full justify-between space-x-4">
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
        name="country"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>Country</FormLabel>
            <Select
              className="w-56 h-10"
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
              }}
              {...field}
            >
              {allCountries.map((country) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setCurrentCountryCode(country.isoCode);
                    }}
                    value={country.name.toLowerCase()}
                  >
                    {country.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <FormControl className="flex align-middle justify-center">
            <FormLabel>State/Region</FormLabel>
            <Select
              disabled={currentRegions?.length === 0}
              className="w-32 h-10"
              {...field}
            >
              {currentRegions?.map((region) => {
                return (
                  <MenuItem value={region.name.toLowerCase()}>
                    {region.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
};
