import { Outlet } from "react-router-dom";
import { NavbarSimple } from "../shared/Navbar/Nav";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden">
      <NavbarSimple />
      <div className="min-h-[calc(100vh-398px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
