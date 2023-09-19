import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex flex-col space-y-3">
      <NavLink
        to="/home"
        className="flex justify-start p-1 py-3 cursor-pointer opacity-80 rounded-xl transition-all duration-300 hover:opacity-100 hover:bg-primaryBlueBold focus:opacity-100 focus:bg-primaryBlueBold"
      >
        <img
          src="/svg/home-rounded.svg"
          className="mr-3 w-5 ml-4 h-auto"
          alt=""
        />
        <span className="text-sm">Halaman utama</span>
      </NavLink>

      <NavLink
        to="/rules"
        className="flex justify-start p-1 py-3 cursor-pointer opacity-80 rounded-xl transition-all duration-300 hover:opacity-100 hover:bg-primaryBlueBold focus:opacity-100 focus:bg-primaryBlueBold"
      >
        <img src="/svg/rule-rounded.svg" className="mr-3 w-5 ml-4" alt="" />
        <span className="text-sm">Syarat & Ketentuan</span>
      </NavLink>

      <NavLink
        to="/faq"
        className="flex justify-start p-1 py-3 cursor-pointer opacity-80 rounded-xl transition-all duration-300 hover:opacity-100 hover:bg-primaryBlueBold focus:opacity-100 focus:bg-primaryBlueBold"
      >
        <img src="/svg/faq.svg" className="mr-3 w-5 ml-4" alt="" />
        <span className="text-sm">Pertanyaan</span>
      </NavLink>

      <NavLink
        to="/about"
        className="flex justify-start p-1 py-3 cursor-pointer opacity-80 rounded-xl transition-all duration-300 hover:opacity-100 hover:bg-primaryBlueBold focus:opacity-100 focus:bg-primaryBlueBold"
      >
        <img
          src="/svg/connect-without-contact-rounded.svg"
          className="mr-3 w-5 ml-4"
          alt=""
        />
        <span className="text-sm">Hubungi Kami</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
