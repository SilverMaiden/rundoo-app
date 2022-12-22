import * as react from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { basePurple, drawerWidth } from "./PermanentDrawer";

export const lightPurple = "rgba(165, 152, 223, 1)";
type Props = {
  open: boolean;
  handleClose: () => void;
  setOpen: react.Dispatch<react.SetStateAction<boolean>>
};


export const GlobalNavBar: React.FC<Props> = ({open, handleClose, setOpen} : Props) => {
  return (
    <AppBar
      className="flex align-middle"
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: basePurple,
      }}
    >
      <Toolbar className="flex flex-row justify-between w-full">
        <Typography variant="h6" noWrap component="div">
          Suppliers
        </Typography>
        <Button
          className="bg-purple-400 hover:bg-purple-600 text-white"
          onClick={() => setOpen(true)}
        >
          Add Supplier
        </Button>
      </Toolbar>
    </AppBar>
  );
};
