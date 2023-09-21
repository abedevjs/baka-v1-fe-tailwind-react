import { ButtonYellow } from "./Button";
import Copyright from "./Copyright";
import Greetings from "./Greetings";
import Logo from "./Logo";
import Navigation from "./Navigation";

function BarNavigation() {
  return (
    // AsideBar start
    <aside className="w-1/5 h-max sticky top-4 flex flex-col space-y-[4.4rem] p-6 rounded-xl bg-primaryBlue text-white font-text lg:hidden">
      <Logo />

      <Greetings />

      <Navigation />

      <ButtonYellow text="Masuk/Login" destination="/login" />

      <Copyright />
    </aside>
    // AsideBar end
  );
}

export default BarNavigation;
