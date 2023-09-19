import { Link } from "react-router-dom";

export function ButtonLogin() {
  return (
    <Link
      id="btnLogin"
      to="/login"
      className="self-center p-2 px-4 text-sm text-slate-800 rounded-xl bg-secondaryYellow duration-300 opacity-80 hover:opacity-100"
    >
      Daftar/Masuk
    </Link>
  );
}
