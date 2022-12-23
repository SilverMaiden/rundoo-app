import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useSWR from "swr";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Address, Supplier } from "@prisma/client";
import fetcher from "../../../lib/fetcher";
import { CircularProgress } from "@mui/material";

type Props = {
  supplier: Supplier;
  setSupplierToDelete: React.Dispatch<React.SetStateAction<Supplier | null>>;
  setOpenDeleteSupplierModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SupplierCard: React.FC<Props> = ({
  supplier,
  setSupplierToDelete,
  setOpenDeleteSupplierModal,
}: Props) => {
  const { data, error, isLoading } = useSWR<Address[], Error>(
    `/api/addresses/${supplier.address_id}`,
    fetcher,
    { refreshInterval: 1000 }
  );
  if (error) return <div>An error occured</div>;
  if (!data) {
    //Loading state
    if (isLoading) return <CircularProgress />;
    //Error state if error is not returned, but data does not exist and isn't loading.
    else
      return (
        <div> There was a problem loading your data. Please try again.</div>
      );
  }

  const { address_1, address_2, city, state, country, zip_code } = data[0];
  console.log("data is ", data);
  return (
    <Card sx={{ maxWidth: 300, width: 300 }}>
      <div className="flex w-full justify-end">
        <CloseIcon
          onClick={() => {
            setSupplierToDelete(supplier);
            setOpenDeleteSupplierModal(true);
          }}
          className="w-4 m-2 hover:text-gray-300 hover:cursor-pointer"
        />
      </div>
      {supplier.logo_url && (
        <CardMedia
          sx={{ height: 150 }}
          image={
            supplier.logo_url ||
            "https://socialimpact.com/wp-content/uploads/2021/03/logo-placeholder.jpg"
          }
          title={`${supplier.name} logo`}
        />
      )}
      <CardContent sx={{ textTransform: "capitalize", m: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {supplier.name}
        </Typography>
        <Typography className="text-start">Address:</Typography>
        <Typography
          className="flex flex-col justify-start text-start"
          variant="body2"
          color="text.secondary"
        >
          <div>{address_1}</div>
          <div>{address_2}</div>
          <div>
            {city}, {state && `${state},`} {zip_code}
          </div>
          <div>{country}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};
