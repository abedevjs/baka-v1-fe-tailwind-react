import { useIsAuthenticated } from "../features/authentication/useAuth";
import { ButtonYellow } from "./Button";
import Copyright from "./Copyright";
import LogoGreetings from "./LogoGreetings";
import LogoutBox from "./LogoutBox";
import Navigation from "./Navigation";

function BarNavigationMobile() {
  const { isAuthenticated } = useIsAuthenticated();
  return (
    <aside className="w-1/2 h-screen fixed py-2 px-6 pt-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-between rounded-xl bg-primaryBlue text-white font-text duration-300 z-20 sm:px-4 sm:w-3/4 sm:left-[40%]">
      <LogoGreetings />

      <Navigation />

      {!isAuthenticated && (
        <ButtonYellow text="Masuk/Login" destination="/login" />
      )}

      {isAuthenticated && <LogoutBox />}

      <Copyright />
    </aside>
  );
}

export default BarNavigationMobile;
