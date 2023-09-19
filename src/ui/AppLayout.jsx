import { Outlet } from "react-router-dom";
import BarNavigation from "./BarNavigation";

function AppLayout() {
  return (
    // MotherContainer start
    <div className="h-auto p-4 flex flex-wrap content-center bg-bodyBackColor lg:p-0">
      <BarNavigation />

      <Outlet />
    </div>
    // MotherContainer end
  );
}

export default AppLayout;
