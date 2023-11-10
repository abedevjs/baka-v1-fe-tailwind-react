import { Link, useNavigate, useParams } from "react-router-dom";
import Notification from "../../ui/Notification";
import Spinner from "../../ui/Spinner";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";
import {
  currencyFormat,
  cutWords,
  dateFormat,
} from "../../utilities/formatter";
import { useGetUser } from "../user/useGetUser";
import toast from "react-hot-toast";
import FormCreateOrder from "./FormCreateOrder";
import TextTitle from "../../ui/TextTitle";
import { useGetAllUser } from "../user/useGetAllUser";

function PageCreateOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();
  const { allUser, isLoadingAllUser } = useGetAllUser();
  const { user } = useGetUser();

  if (isLoadingBagasi || isLoadingAllUser) return <Spinner />;

  //Cek jika bagasi tsb msh ada
  if (!bagasi?.find((el) => el._id == id)) {
    toast.error("Bagasi yang kakak minta tidak tersedia");
    return navigate("/list-bagasi");
  }

  // Destructuring Bagasi Detail dari useGetAllBagasi() --start
  const data = bagasi?.map((el) => el).filter((el) => el._id == id);
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
    owner,
  } = data[0];
  // Destructuring Bagasi Detail dari useGetAllBagasi() --end

  // Destructuring Owner Detail dari useGetAllUser() --start
  const { nama: namaOwner, image: imageOwner } = allUser.find(
    (user) => user._id == owner._id
  );
  // Destructuring Owner Detail dari useGetAllUser() --end

  return (
    <>
      {/* Title, Status, Maskapai */}
      <div className="mb-4 flex items-center justify-between sm:flex-col">
        {/* Title */}
        <div className=" -mb-8 sm:mb-0 sm:self-start">
          <TextTitle icon="bagasi" title="bagasi detail" />
        </div>

        {/* Status n Maskapai */}
        <div className="w-1/2 flex items-center space-x-2 sm:w-full">
          {/* Box 2 Status */}
          <div
            className="
              w-full py-2 col-start-3 col-end-4 flex items-center justify-around  bg-bodyBackColor rounded-lg sm:px-2 sm:flex-col sm:space-x-0 sm:space-y-4"
          >
            {/* Icon */}
            <img
              src={`/svg/${status}.svg`}
              className="w-12 h-auto lg:w-10"
              alt="Date"
            />
            {/* Content Box Status */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">
                Status
              </span>
              <span className="text-base sm:text-sm">{status}</span>
            </div>
          </div>
          {/* Box 3 Maskapai */}
          <div
            className="
              w-full py-2 col-start-4 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg sm:px-2 sm:flex-col sm:space-x-0 sm:space-y-4"
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
        </div>
      </div>
      {/* BAGASI DETAIL Container */}
      <div className="w-full mb-4 px-4 grid grid-cols-4 grid-rows-4 gap-2 mx-auto lg:px-0 sm:grid-rows-9">
        {/* Box 1 Dari - Tujuan */}
        <div className="w-full py-2 col-start-1 col-end-3 flex items-center justify-around bg-bodyBackColor rounded-lg sm:px-2 sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-1 sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src="/svg/cityscape.svg"
            className="w-12 h-auto lg:w-10 sm:self-center"
            alt="Marker"
          />
          {/* Content Box Dari dan Tujuan */}
          <div className="w-[70%] flex justify-around sm:w-full">
            {/* Content Box Dari */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">Dari</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                <img src={`/svg/${dari}.svg`} alt={dari} />
                <span>{dari}</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue">Tujuan</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                <img src={`/svg/${tujuan}.svg`} alt={tujuan} />
                <span>{tujuan}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Box 2 Berangkat - Tiba */}
        <div className="w-full py-2 row-start-1 col-start-3 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg sm:px-2 sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-2 sm:col-start-1 sm:col-end-5">
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
        {/* Box 3 Berat - Sisa */}
        <div className="w-full py-2 row-start-2 col-start-3 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg sm:px-2 sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-3 sm:col-start-1 sm:col-end-5">
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
        {/* Box 4 Harga */}
        <div className="w-full py-2 row-start-2 col-start-1 col-end-3 flex items-center justify-around bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-4 sm:col-start-1 sm:col-end-5">
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
        {/* Box 5 Catatan Traveler */}
        <div className="w-full py-2 px-4 row-start-3 col-start-1 col-end-3 flex items-center space-x-4 bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-5 sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src="/svg/warning-solid.svg"
            className="w-12 h-auto lg:w-10"
            alt="Date"
          />
          {/* Content Box Dari */}
          <div className="w-[70%] flex flex-col space-y-2 sm:w-full">
            <span className="text-xs  text-primaryBlue">Catatan Traveler</span>
            <p className="text-sm capitalize sm:text-xs">
              {catatan ? catatan : "---"}
            </p>
          </div>
        </div>
        {/* Box 6 Nama Traveler */}
        <div className="w-full py-2 row-start-3 col-start-3 col-end-4 flex items-center justify-around bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-6 sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src={`${!imageOwner ? "/images/default-user.jpg" : imageOwner}`}
            className="w-12 h-auto rounded-full"
            alt="Traveler"
            referrerPolicy="no-referrer"
          />
          {/* Content Box Nama Traveler */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-primaryBlue sm:text-xs">
              Nama Traveler
            </span>
            <span className="text-base sm:text-sm sm:text-center">
              {cutWords(namaOwner, 2)}
            </span>
          </div>
        </div>
        {/* Box 7 Telpon Traveler */}
        <div className="w-full py-2 row-start-3 col-start-4 col-end-5 flex items-center justify-around bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-7 sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src="/svg/whatsapp-fill.svg"
            className="w-12 h-auto lg:w-10"
            alt="Price"
          />
          {/* Content Box Telpon Traveler */}
          <div className="flex flex-col space-y-2">
            <span className="text-sm text-primaryBlue sm:text-xs">
              WhatsApp Traveler
            </span>
            <span className="text-base blur-sm sm:text-sm sm:text-center">
              00000000000
            </span>
          </div>
        </div>
        {/* Box 8 Alamat Dari Traveler */}
        <div className="w-full py-2 px-4 row-start-4 col-start-1 col-end-3 flex items-center space-x-4 bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-[8] sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src="/svg/map-marker.svg"
            className="w-12 h-auto lg:w-10"
            alt="Price"
          />
          {/* Content Box Alamat Dari */}
          <div className="flex-1 flex flex-col space-y-2 sm:w-full sm:text-center">
            <span className="text-sm text-primaryBlue sm:text-xs">
              Alamat Kota Asal
            </span>
            <span className="text-sm blur-sm sm:text-xs">
              This address is currently censored
            </span>
          </div>
        </div>
        {/* Box 9 Alamat Tujuan Traveler */}
        <div className="w-full p-2 row-start-4 col-start-3 col-end-5 flex items-center space-x-4 bg-bodyBackColor rounded-lg sm:flex-col sm:space-x-0 sm:space-y-4 sm:row-start-[9] sm:col-start-1 sm:col-end-5">
          {/* Icon */}
          <img
            src="/svg/map-marker.svg"
            className="w-12 h-auto lg:w-10"
            alt="Price"
          />
          {/* Content Box Alamat Tujuan */}
          <div className="flex-1 flex flex-col space-y-2 sm:w-full sm:text-center">
            <span className="text-sm text-primaryBlue sm:text-xs">
              Alamat Kota Tujuan
            </span>
            <span className="text-sm blur-sm sm:text-xs">
              This address currently is censored
            </span>
          </div>
        </div>
      </div>
      {/* Akhir Grid (Bagasi) Container */}
      {/* Notification Message (Jika status bukan 'OPENED') start--*/}
      {status == "Opened" ? (
        <div
          className="w-full mb-8 col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
          sm:row-start-[11] sm:row-end-[10] sm:col-start-1 sm:col-end-5"
        >
          <span className="py-1 px-2 text-xs text-white bg-green-600 rounded-lg">
            Bagasi ready. Silahkan di order kak 🤗
          </span>
        </div>
      ) : (
        <div
          className="w-full mb-4 col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
              sm:row-start-[11] sm:row-end-[10] sm:col-start-1 sm:col-end-5
              "
        >
          {status == "Scheduled" ? (
            <Notification
              type="error"
              text="Bagasi sedang dikonfirmasi, coba beberapa saat lagi ya kak"
            />
          ) : (
            ""
          )}

          {status == "Closed" && availableKg == 0 ? (
            <Notification
              type="error"
              text="Bagasi sudah penuh, tunggu bagasi berikut ya kak"
            />
          ) : (
            ""
          )}
          {status == "Closed" && availableKg > 0 ? (
            <Notification
              type="error"
              text="Bagasi sudah berangkat, tunggu penerbangan berikut ya kak"
            />
          ) : (
            ""
          )}

          {status == "Unloaded" ? (
            <Notification
              type="success"
              text="Misi Bagasi berhasil dan selesai. Terima kasih ya kak"
            />
          ) : (
            ""
          )}

          {status == "Canceled" ? (
            <Notification
              type="error"
              text="Bagasi dibatalkan, cari jadwal bagasi yang lain ya kak"
            />
          ) : (
            ""
          )}
        </div>
      )}
      {/* Notification Message (Jika status bukan 'OPENED') end--*/}
      {status == "Opened" ? (
        <FormCreateOrder
          id={id}
          hargaRp={hargaRp}
          availableKg={availableKg}
          user={user}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default PageCreateOrder;
