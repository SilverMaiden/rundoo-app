import { Button } from "@mui/material";
import { Supplier } from "@prisma/client";
import { StyledModal } from "../../common/StyledModal";

type Props = {
  open: boolean;
  handleClose: () => void;
  supplier: Supplier;
};

export const DeleteSupplierModal: React.FC<Props> = ({
  open,
  handleClose,
  supplier,
}: Props) => {
  const deleteSupplier = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await fetch(`/api/suppliers/${supplier.id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((response) => {
      handleClose();
      return response;
    });
  };

  return (
    <StyledModal open={open} handleClose={handleClose} size="md">
      <form className="flex w-full flex-col " onSubmit={deleteSupplier}>
        <h1 className="text-2xl mb-4"> Delete Supplier?</h1>
        <span className="">
          Are you sure you want to delete <b style={{textTransform: 'capitalize'}}>{supplier.name}</b>? You will not
          be able to undo this action.
        </span>

        <div className="flex justify-end space-x-2 w-full">
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </StyledModal>
  );
};
