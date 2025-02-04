import { Link } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import { useGetUser } from "./useGetUser";

export function TabelUserBagasi() {
  const { user, isLoading } = useGetUser();
  if (isLoading) return <Spinner />;

  return (
    <>
      <Tabel feature="userBagasi" dataObj={user?.bagasi} />
      {user?.bagasi?.length > 5 && <Pagination />}
      {user?.bagasi?.length == 0 && (
        <>
          {/* NO BAGASI Content */}
          <div className="w-1/2 mx-auto flex-col space-y-2">
            {" "}
            {/* TOGGLE HIDDEN/FLEX DISINI */}
            <span className="text-red-500 font-thin text-base self-center">
              Belum ada Bagasi
            </span>
            {/* Link Jual Bagasi */}
            <div className="flex items-center self-center">
              <Link
                to="/create-bagasi"
                className="flex items-center text-sm text-textColor hover:translate-x-1 duration-300"
              >
                <span>Jual Bagasi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-textColor "
                  width={26}
                  height={26}
                  viewBox="0 0 24 24"
                >
                  <path d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z" />
                </svg>
              </Link>
            </div>
            {/* <div class="p-2 px-2 self-center text-center text-sm text-white rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
                  <a href="index.html" target="_blank">Jual Bagasi</a>
              </div> */}
          </div>
        </>
      )}
    </>
  );
}

export function TabelUserOrder() {
  const { user, isLoading: isLoadingUser } = useGetUser();

  if (isLoadingUser) return <Spinner />;

  const orderDetail = user?.order?.map((el) => ({
    _id: el._id,
    jumlahKg: el.jumlahKg,
    isi: el.isi,
    netRp: el.netRp,
    status: el.status,
    waktuBerangkat: el.waktuBerangkat,
    dari: el.dari,
    tujuan: el.tujuan,
  }));

  return (
    <>
      <Tabel feature="userOrder" dataObj={orderDetail} />
      {orderDetail?.length > 5 && <Pagination />}
      {orderDetail?.length == 0 && (
        <>
          <>
            {/* NO ORDER Content */}
            <div className=" w-1/2 mx-auto flex-col space-y-2">
              {" "}
              {/* TOGGLE HIDDEN/FLEX DISINI */}
              <span className="text-red-500 font-thin text-base self-center">
                Belum ada Order
              </span>
              {/* Link List Bagasi */}
              <div className="flex items-center self-center">
                <Link
                  to="/list-bagasi"
                  className="flex items-center text-sm text-textColor  hover:translate-x-1 duration-300"
                >
                  <span>Beli Bagasi</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-textColor "
                    width={26}
                    height={26}
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z" />
                  </svg>
                </Link>
              </div>
              {/* <div class="p-2 px-2 self-center text-center text-sm text-white rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
                  <a href="index.html" target="_blank">Beli Bagasi</a>
              </div> */}
            </div>
          </>
        </>
      )}
    </>
  );
}
