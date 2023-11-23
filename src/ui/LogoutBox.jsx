import { useEffect, useState } from "react";
import { useGetUser } from "../features/user/useGetUser";
import { useGeolocation } from "../services & hooks/useGeoLocation";
import { cutWords } from "../utilities/formatter";
import Spinner from "./Spinner";

const BAKA_URL = import.meta.env.VITE_BAKA_URL;

function LogoutBox() {
  const { user, isLoading: isLoadingUser } = useGetUser();
  const [namaUser, setNamaUser] = useState("");
  const [imageUser, setImageUser] = useState("");
  const position = useGeolocation();

  useEffect(
    function () {
      if (!isLoadingUser) {
        setNamaUser(user.nama);
        setImageUser(user.image);
      }
    },
    [isLoadingUser, user.image, user.nama]
  );

  if (isLoadingUser) return <Spinner />;

  function handleClick() {
    window.open(`${BAKA_URL}/auth/logout`, "_self");
  }
  return (
    <div className=" w-full py-2 px-2 self-center bg-secondaryYellow  flex justify-around items-center rounded-md ">
      <div className=" flex  items-center space-x-1">
        <img
          className=" w-10 h-auto rounded-full"
          src={`${!imageUser ? "/images/default-user.jpg" : imageUser}`}
          referrerPolicy="no-referrer"
          alt=""
        />
        <div className=" flex flex-col text-xs text-textColor">
          <span className=" font-medium">{`${
            !namaUser ? "Nama User" : cutWords(namaUser, 2)
          }`}</span>
          <span className="capitalize font-thin">{`${
            !position ? "-" : cutWords(position, 2)
          }`}</span>
        </div>
      </div>
      <div
        onClick={handleClick}
        className=" py-1 px-2 text-sm text-white bg-red-500 rounded-md cursor-pointer opacity-80 hover:opacity-100"
      >
        Keluar
      </div>
    </div>
  );
}

export default LogoutBox;
