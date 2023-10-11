import { LinkArrowRight } from "../../ui/LinkArrow";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import { useGetUser } from "./useGetUser";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";

const bagasiComplete = [
  {
    id: 1,
    berangkat: "2023-07-10T00:00:00.000+00:00",
    dari: "Jakarta",
    tujuan: "Cairo",
    sisa: "100",
    harga: "150000",
    status: "Opened",
  },
  {
    id: 2,
    berangkat: "2023-07-04T09:48:51.265+00:00",
    dari: "Dubai",
    tujuan: "Istanbul",
    sisa: "50",
    harga: "250000",
    status: "Canceled",
  },
];

const orderComplete = [
  {
    id: 1,
    berangkat: "2023-12-08T00:00:00.000+00:00",
    dari: "Dubai",
    tujuan: "Jakarta",
    total: "05",
    status: "Preparing",
  },
];

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
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  if (isLoadingUser || isLoadingBagasi) return <Spinner />;

  const orderDetail = user?.order?.map((el) => ({
    _id: el._id,
    jumlahKg: el.jumlahKg,
    isi: el.isi,
    status: el.status,
    waktuBerangkat: bagasi?.find((bag) => bag._id == el.bagasi._id)
      .waktuBerangkat,
    dari: bagasi?.find((bag) => bag._id == el.bagasi._id).dari,
    tujuan: bagasi?.find((bag) => bag._id == el.bagasi._id).tujuan,
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

// export function
