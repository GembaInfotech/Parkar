import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import PublicNavBar from "./components/shared/PublicNavBar";

const PublicRoute = () => {
 



  return  (
    <div className="scroll-smooth  z-10" >
      <PublicNavBar
      
      />

      <div className="md:mx-auto md:grid md:w-[100vw] md:grid-cols-1 md:gap-4 ">



        <Outlet />

     
      </div>
    </div>
  )
};

export default PublicRoute;
