import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useSWR from "swr";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Supplier } from "@prisma/client";
import CloseIcon from "@mui/icons-material/Close";
import fetcher from "../../../lib/fetcher";

type Props = {
  supplier: Supplier;
};

export const SupplierCard: React.FC<Props> = ({ supplier }: Props) => {
  const { mutate } = useSWR<Supplier[], Error>("/api/suppliers", fetcher);

  const deleteSupplier = async () => {
    await fetch(`/api/suppliers/${supplier.id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((response) => {
      mutate()
      return response;
    });
  };
  return (
    <Card sx={{ maxWidth: 200 }}>
      <div className="flex w-full justify-end">
        <CloseIcon
          onClick={deleteSupplier}
          className="w-4 hover:text-gray-300 hover:cursor-pointer"
        />
      </div>
      <CardMedia
        sx={{ height: 75 }}
        // THIS SHOULD BE TEMP, final prod should not have || ''
        image={supplier.logo_url || ""}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {supplier.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
