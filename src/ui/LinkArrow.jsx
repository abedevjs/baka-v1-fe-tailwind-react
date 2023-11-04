import { Link } from "react-router-dom";

export function LinkArrowRight({ text = "", destination = "" }) {
  return (
    <div className="flex items-center justify-end">
      <Link
        to={destination}
        className="flex items-center text-sm text-white hover:translate-x-1 duration-300"
      >
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"
          />
        </svg>
      </Link>
    </div>
  );
}

export function LinkArrowLeft({ text = "", style, destination = "/home" }) {
  return (
    <div className={`${style} flex items-center justify-start`}>
      <Link
        to={destination}
        className="flex items-center text-sm hover:-translate-x-1 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#0b2471"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="m14 7l-5 5m0 0l5 5"
          />
        </svg>
        <span>{text}</span>
      </Link>
    </div>
  );
}
export function LinkArrowDown() {}
