import { Link, useNavigate, useParams } from "react-router-dom";
import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";
import FormUpdateOrder from "./FormUpdateOrder";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";
import { useGetUser } from "../user/useGetUser";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import { useGetAllOrder } from "./useGetAllOrder";
import { currencyFormat, dateFormat } from "../../utilities/formatter";

function PageUpdateOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();
  const { order, isLoading: isLoadingOrder } = useGetAllOrder();
  const { user, isLoading: isLoadingUser } = useGetUser();

  if (isLoadingOrder || isLoadingBagasi || isLoadingUser) return <Spinner />;

  //Cek jika order tsb msh ada
  const orderDetail = order?.find((el) => el._id == id);
  if (!orderDetail) {
    toast.error("Order yang kakak minta tidak tersedia 🙁");
    return navigate("/user");
  }

  //Cek if user is owner
  //! Guard clause ini msh lemah, jika halaman di refresh user justru keluar dari page update-order/:id, seharusnya stay
  if (
    user?.order?.length == 0 ||
    !user?.order?.map((obj) => obj?._id)?.includes(id)
  ) {
    toast.error("Kakak bukan pemilik order ini 🙁");
    return navigate("/user");
  }

  // Destructuring Bagasi Detail dari useGetAllBagasi() --start
  const data = bagasi
    ?.map((el) => el)
    .filter((el) => el._id == orderDetail.bagasi._id);
  const {
    dari,
    tujuan,
    status,
    pesawat,
    waktuBerangkat,
    waktuTiba,
    initialKg,
    availableKg,
    hargaRp,
    catatan,
  } = data[0];
  // Destructuring Bagasi Detail dari useGetAllBagasi() --end

  return (
    <>
      {/* BAGASI DETAIL Container */}
      <div
        className="w-full mb-4 px-4 grid grid-cols-4 grid-rows-3 gap-2 mx-auto 
          lg:px-0
          sm:grid-rows-8
          "
      >
        {/* Box 1 Title */}
        <div className="w-full py-2 col-start-1 col-end-3 flex items-center justify-center bg-bodyBackColor rounded-lg sm:col-end-5">
          <span className="text-xl capitalize font-title">Detail Bagasi:</span>
        </div>
        {/* Box 2 Status */}
        <div
          className="
              w-full py-2 col-start-3 col-end-4 flex items-center justify-around  bg-bodyBackColor rounded-lg
              sm:col-start-1 sm:col-end-3
              "
        >
          {/* Icon */}
          <img
            src="/svg/opened.svg"
            className="w-12 h-auto lg:w-10"
            alt="Date"
          />
          {/* Content Box Status */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-primaryBlue sm:text-xs">Status</span>
            <span className="text-base sm:text-sm">{status}</span>
          </div>
        </div>
        {/* Box 3 Maskapai */}
        <div
          className="
              w-full py-2 col-start-4 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg
              sm:col-start-3 sm:col-end-5
              "
        >
          {/* Icon */}
          <img
            src="/svg/airlines-rounded.svg"
            className="w-12 h-auto lg:w-10"
            alt="Date"
          />
          {/* Content Box Status */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-primaryBlue sm:text-xs">
              Maskapai
            </span>
            <span
              className={`text-base ${
                pesawat == "" ? " text-red-500" : ""
              } lg:text-sm sm:text-xs`}
            >
              {pesawat == "" ? "(Konfirmasi)" : pesawat}
            </span>
          </div>
        </div>
        {/* Box 3 Dari - Tujuan */}
        <div
          className="
          w-full py-2 col-start-1 col-end-3 flex items-center justify-around bg-bodyBackColor rounded-lg
          sm:px-2 sm:col-start-1 sm:col-end-5 sm:flex-col
          "
        >
          {/* Icon */}
          <img
            src="/svg/map-marker.svg"
            className="w-12 h-auto lg:w-10 sm:self-center"
            alt="Marker"
          />
          {/* Content Box Dari dan Tujuan */}
          <div className="w-[70%] flex justify-around sm:w-full">
            {/* Content Box Dari */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">Dari</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
                <span>{dari}</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue">Tujuan</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
                <span>{tujuan}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Box 4 Berangkat - Tiba */}
        <div
          className="
              w-full py-2 col-start-3 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg
              sm:px-2 sm:row-start-4 sm:col-start-1 sm:col-end-5 sm:flex-col
              "
        >
          {/* Icon */}
          <img
            src="/svg/tear-off-calendar.svg"
            className="w-12 h-auto lg:w-10 sm:self-center"
            alt="Date"
          />
          {/* Content Box Berangkat dan Tiba */}
          <div className="w-[70%] flex justify-around sm:w-full">
            {/* Content Box Dari */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">
                Berangkat
              </span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/jakarta.svg" alt="Jakarta"> */}
                <span>{dateFormat(waktuBerangkat, "long")}</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">Tiba</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/istanbul.svg" alt="Istanbul"> */}
                <span>{dateFormat(waktuTiba, "long")}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Box 5 Berat - Sisa */}
        <div
          className="
              w-full py-2 col-start-1 col-end-3 flex items-center justify-around bg-bodyBackColor rounded-lg
              sm:px-2 sm:col-start-1 sm:col-end-5 sm:flex-col
              "
        >
          {/* Icon */}
          <img
            src="/svg/weight-kilogram.svg"
            className="w-12 h-auto lg:w-10 sm:self-center"
            alt="Weight"
          />
          {/* Content Box Berat dan Sisa */}
          <div className="w-[70%] flex justify-around sm:w-full">
            {/* Content Box Dari */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">
                Berat <span className="text-xs text-textColor">(Kg)</span>
              </span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/jakarta.svg" alt="Jakarta"> */}
                <span>{initialKg}</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">
                Sisa Bagasi <span className="text-xs text-textColor">(Kg)</span>
              </span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/istanbul.svg" alt="Istanbul"> */}
                <span>{availableKg}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Box 6 Harga */}
        <div
          className="
              w-full py-2 flex items-center justify-around bg-bodyBackColor rounded-lg
              sm:row-start-6 sm:col-start-1 sm:col-end-5
              "
        >
          {/* Icon */}
          <img
            src="/svg/payments-outline-rounded.svg"
            className="w-12 h-auto lg:w-10"
            alt="Price"
          />
          {/* Content Box Harga */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-primaryBlue sm:text-xs">
              Harga <span className="text-xs text-textColor">(@ Kg)</span>
            </span>
            <span className="text-base sm:text-sm">
              {currencyFormat(hargaRp)}
            </span>
          </div>
        </div>
        {/* Box 7 Catatan Traveler */}
        <div
          className="
              w-full py-2 col-start-1 col-end-3 row-start-4 row-end-6 flex justify-around bg-bodyBackColor rounded-lg 
              sm:px-2 sm:row-start-7 sm:row-end-[9] sm:col-start-1 sm:col-end-5 sm:space-x-4
              "
        >
          {/* Icon */}
          <img
            src="/svg/warning-solid.svg"
            className="w-12 h-auto lg:w-10"
            alt="Date"
          />
          {/* Content Box Dari */}
          <div className="w-[70%] flex flex-col space-y-2 sm:w-full">
            <span className="text-xs text-primaryBlue">Catatan Traveler</span>
            <p className="text-sm sm:text-xs">{catatan ? catatan : "---"}</p>
          </div>
        </div>
        {/* Error Message (Jika status bukan 'OPENED') */}
        {orderDetail.status == "Preparing" ? (
          <div
            className="w-full col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
          sm:row-start-[9] sm:row-end-[10] sm:col-start-1 sm:col-end-5"
          >
            <span className="py-1 px-2 text-xs text-white bg-green-600 rounded-lg">
              Bagasi ready. Silahkan di order kak 🤗
            </span>
          </div>
        ) : (
          <div
            className="w-full col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
              sm:row-start-[9] sm:row-end-[10] sm:col-start-1 sm:col-end-5
              "
          >
            <span className="py-1 px-2 text-xs text-white bg-green-600 rounded-lg">
              {orderDetail.status == "Ready"
                ? "Order yang sudah di bayar tidak bisa di update kak. Jika ingin order bagasi yang sama, silahkan buat order baru. 🤗"
                : ""}
              {orderDetail.status == "Delivered"
                ? "Terima kasih telah menggunakan jasa kami 🤗"
                : ""}
            </span>
          </div>
        )}
      </div>{" "}
      {/* Akhir Grid (Bagasi) Container */}
      <FormUpdateOrder
        id={id}
        orderDetail={orderDetail}
        availableKg={availableKg}
        hargaRp={hargaRp}
      />
    </>
  );
}

export default PageUpdateOrder;