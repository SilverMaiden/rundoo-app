import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type Props = {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  size: "sm" | "md" | "lg";
};

export const StyledModal = ({ open, handleClose, children, size }: Props) => {
  let modalWidth;
  let modalHeight;

  switch (size) {
    case "sm":
      modalWidth = 500;
      break;
    case "md":
      modalWidth = 600;
      break;
    case "lg":
      modalWidth = 800;
      break;
    default:
      modalWidth = 400;
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modalWidth,
    height: modalHeight,
    bgcolor: "background.paper",
    p: 4,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md h-auto">
          {children}
        </Box>
      </Modal>
    </div>
  );
};
