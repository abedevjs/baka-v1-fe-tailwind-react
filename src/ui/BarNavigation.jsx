import { ButtonYellow } from "./Button";
import Copyright from "./Copyright";
import LogoGreetings from "./LogoGreetings";
import Navigation from "./Navigation";

function BarNavigation({ mobile = false }) {
  const toggleClass = mobile
    ? "w-1/2 h-screen fixed py-2 px-6 pt-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-between rounded-xl bg-primaryBlue text-white font-text duration-300 sm:px-4 sm:w-3/4 sm:left-[40%]"
    : "w-1/5 h-screen sticky top-4 p-6 pt-0 flex flex-col justify-between rounded-xl bg-primaryBlue text-white font-text lg:hidden";
  return (
    // AsideBar start
    <aside className={toggleClass}>
      <LogoGreetings />

      <Navigation />

      <ButtonYellow text="Masuk/Login" destination="/login" />

      <Copyright />
      {/* <p className=" w"></p> */}
    </aside>
    // AsideBar end
  );
}

export default BarNavigation;
