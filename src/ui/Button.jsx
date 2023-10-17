import { Link } from "react-router-dom";

export function ButtonYellow({ text = "", destination = "" }) {
  return (
    <Link
      to={destination}
      className="self-center p-2 px-4 text-sm text-slate-800 rounded-xl bg-secondaryYellow duration-300 opacity-80 hover:opacity-100"
    >
      {text}
    </Link>
  );
}

export function ButtonRed({ text = "", destination = "" }) {
  return (
    <Link
      to={destination}
      className="w-1/4 sm:w-full mb-2 p-2 px-2 mx-auto block text-center text-sm text-white rounded-xl bg-red-500 opacity-80 duration-300 cursor-pointer hover:opacity-100"
    >
      {text}
    </Link>
  );
}

export function ButtonBlue({ text = "", destination = "", onclick }) {
  return (
    <Link
      to={destination}
      onClick={onclick}
      className="self-center p-2 px-4 text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold"
    >
      {text}
    </Link>
  );
}
