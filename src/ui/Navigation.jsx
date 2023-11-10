import { NavLink } from "react-router-dom";
import { useIsAuthenticated } from "../features/authentication/useAuth";

function Navigation() {
  const { isAuthenticated } = useIsAuthenticated();

  return (
    <nav className="flex flex-col space-y-3">
      {!isAuthenticated && (
        <NavList to="/home" svg="home-rounded" title="Halaman utama" />
      )}

      {isAuthenticated && (
        <>
          <NavList
            to="/list-bagasi"
            svg="luggage-48-filled"
            title="Area Bagasi"
          />
          <NavList to="/order" svg="cart" title="Area Jastip" />
          <NavList to="/user" svg="account-card" title="Area User" />
        </>
      )}

      <NavList to="/rules" svg="rule-rounded" title="Syarat & Ketentuan" />

      <NavList to="/faq" svg="faq" title="Pertanyaan" />

      <NavList
        to="/about"
        svg="connect-without-contact-rounded"
        title="Hubungi Kami"
      />
    </nav>
  );
}

function NavList({ to = "", svg = "", title = "" }) {
  return (
    <NavLink
      to={to}
      className="flex justify-start p-1 py-3 cursor-pointer opacity-80 rounded-xl transition-all duration-300 hover:opacity-100 hover:bg-primaryBlueBold focus:opacity-100 focus:bg-primaryBlueBold"
    >
      <img src={`/svg/${svg}.svg`} className="mr-3 w-5 ml-4" alt="" />
      <span className="text-sm">{title}</span>
    </NavLink>
  );
}

export default Navigation;
