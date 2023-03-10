import * as react from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { basePink, basePurple, darkerPurple, drawerWidth } from "./FixedDrawer";

export const lightPurple = "rgba(165, 152, 223, 1)";
type Props = {
  setOpen: react.Dispatch<react.SetStateAction<boolean>>;
};

export const NavBar: React.FC<Props> = ({ setOpen }: Props) => {
  return (
    <AppBar
      aria-label="navbar header"
      className="flex align-middle"
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: basePurple,
      }}
    >
      <Toolbar
        className="flex flex-row justify-between w-full"
      >
        <Typography variant="h6" noWrap component="div">
          Suppliers
        </Typography>
        <Button
          className="text-white"
          sx={{
            ":hover": {
              backgroundColor: darkerPurple,
            },
          }}
          onClick={() => setOpen(true)}
        >
          Add Supplier
        </Button>
      </Toolbar>
    </AppBar>
  );
};
