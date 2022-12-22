import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required().min(2, 'Must be greater than 2 characters'),
    logoUrl: yup.string().url().required(),
    address_1: yup.string().required(),
    address_2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string(),
    zip_code: yup.string().required(),
    country: yup.string().required(),
  })
  .required();

export interface IFormInputs {
  name: string;
  logoUrl: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
}

export const defaultValues: IFormInputs = {
  name: "",
  logoUrl: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
};
