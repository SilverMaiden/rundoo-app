import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required().min(10, 'Must be greater than 2 characters'),
    logoUrl: yup.string().url().required(),
    address1: yup.string().required(),
    address2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    country: yup.string().required(),
  })
  .required();

export interface IFormInputs {
  name: string;
  logoUrl: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export const defaultValues: IFormInputs = {
  name: "",
  logoUrl: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};
