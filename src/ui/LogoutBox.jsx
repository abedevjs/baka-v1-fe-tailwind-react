import { useGetUser } from "../features/user/useUser";
import { cutWords } from "../utilities/formatter";
import Spinner from "./Spinner";

const BAKA_URL = import.meta.env.VITE_BAKA_URL;

function LogoutBox() {
  const { data } = useGetUser();
  const { nama, provider, image } = data;
  function handleClick() {
    window.open(`${BAKA_URL}/auth/logout`, "_self");
  }
  return (
    <div className=" w-full py-2 px-2 self-center bg-secondaryYellow  flex justify-around items-center rounded-md ">
      <div className=" flex  items-center space-x-1">
        <img
          className=" w-10 h-auto rounded-full"
          src={`${!image ? "/images/default-user.jpg" : image}`}
          referrerPolicy="no-referrer"
          alt=""
        />
        <div className=" flex flex-col text-xs text-textColor">
          <span>{`${!nama ? "Nama User" : cutWords(nama, 2)}`}</span>
          <span className="italic text-center">{`${
            !provider ? "Proses..." : `by: ${provider.toUpperCase()}`
          }`}</span>
        </div>
      </div>
      <button
        onClick={handleClick}
        className=" text-base text-red-600 font-semibold hover:opacity-80"
      >
        Keluar
      </button>
    </div>
  );
}

export default LogoutBox;
