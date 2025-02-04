import { useIsAuthenticated } from "../features/authentication/useAuth";
import { ButtonYellow } from "./Button";
import Copyright from "./Copyright";
import LogoGreetings from "./LogoGreetings";
import LogoutBox from "./LogoutBox";
import Navigation from "./Navigation";

function BarNavigation() {
  const { isAuthenticated } = useIsAuthenticated();
  return (
    // AsideBar start
    <aside className="w-1/5 h-screen sticky top-4 p-6 pt-0 flex flex-col justify-between rounded-xl bg-primaryBlue text-white font-text lg:hidden">
      <LogoGreetings />

      <Navigation />

      {!isAuthenticated && (
        <ButtonYellow text="Masuk/Login" destination="/login" />
      )}

      {isAuthenticated && <LogoutBox />}

      <Copyright />
      {/* <p className=" w"></p> */}
    </aside>
    // AsideBar end
  );
}

export default BarNavigation;
