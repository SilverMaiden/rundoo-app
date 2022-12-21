import * as react from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { basePurple, drawerWidth } from "./PermanentDrawer";

export const GlobalNavBar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: basePurple}}
    >
      <Toolbar className="flex justify-end w-full border-2 border-white">
      {/*   <Typography variant="h6" noWrap component="div">
          Suppliers
        </Typography> */}
        <Button className="bg-purple-400 hover:bg-purple-600 text-white">Add Supplier</Button>
      </Toolbar>
    </AppBar>
  );
};
