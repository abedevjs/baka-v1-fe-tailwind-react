import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      {/* Content */}
      <div
        className="w-screen h-screen py-8 rounded-xl flex flex-col justify-between items-center  bg-secondaryYellowTint
      lg:h-screen 
      sm:px-4
      "
      >
        {/* Text */}
        <span className="text-3xl text-textColor sm:text-xl">
          Halaman ini tidak tersedia kakak...😢
        </span>
        {/* Icon */}
        <div className="w-[30%] h-auto lg:w-2/3 sm:w-[80%]">
          <img src="/svg/Stranded traveler-bro.svg" className="w-full" alt="" />
          {/* <img src="images/svg/404 Error-bro.svg" class="w-full" alt=""> */}
        </div>
        <Link
          to="/home"
          className="self-center p-2 px-4 text-2xl sm:text-xl text-slate-800 rounded-xl bg-secondaryYellow duration-300 opacity-100 hover:opacity-80"
        >
          Kembali ke Halaman Utama
        </Link>
      </div>
    </>
  );
}

export default NotFound;
