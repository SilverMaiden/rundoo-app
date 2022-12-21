import { GlobalNavBar } from "./components/GlobalNavBar";
import { SuppliersPageContent } from "./components/SuppliersPage/SuppliersPageContent";

const Suppliers = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <GlobalNavBar />
      <SuppliersPageContent />
    </div>
  );
};

export default Suppliers;
