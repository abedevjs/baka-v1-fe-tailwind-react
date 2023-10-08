import { Link, useParams } from "react-router-dom";
import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";
import Spinner from "../../ui/Spinner";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";
import { currencyFormat, dateFormat } from "../../utilities/formatter";

function FormCreateOrder() {
  const { id } = useParams();
  const { bagasi, isLoading } = useGetAllBagasi();

  if (isLoading) return <Spinner />;

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
  } = data[0];

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
            src={`/svg/${status.toLowerCase()}.svg`}
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
            <span className="text-xs  text-primaryBlue">Catatan Traveler</span>
            <p className="text-sm capitalize sm:text-xs">
              {catatan ? catatan : "---"}
            </p>
          </div>
        </div>
        {/* Error Message (Jika status bukan 'OPENED') */}
        {status == "Opened" ? (
          ""
        ) : (
          <div
            className="w-full col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
              sm:row-start-[9] sm:row-end-[10] sm:col-start-1 sm:col-end-5
              "
          >
            <span className="py-1 px-2 text-xs text-white bg-red-500 rounded-lg">
              {status == "Scheduled"
                ? "Bagasi sedang dikonfirmasi, coba beberapa saat lagi ya kak 🤗"
                : ""}
              {status == "Closed"
                ? "Bagasi sudah berangkat, tunggu penerbangan berikut ya kak 🤗"
                : ""}
              {status == "Canceled"
                ? "Bagasi dibatalkan, cari jadwal bagasi yang lain ya kak 🤗"
                : ""}
            </span>
          </div>
        )}
      </div>{" "}
      {/* Akhir Grid (Bagasi) Container */}
      {status == "Opened" ? (
        <>
          {/* ORDER */}
          <div className="w-full mx-auto mb-8 py-8 px-4 font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
            {/* Order Content Container */}
            <form
              className=" px-4 grid grid-cols-4 grid-rows-5 gap-4 
              lg:py-4 lg:px-2
              sm:grid-cols-4 sm:grid-rows-9
              "
            >
              {/* Box 1 Title */}
              <div
                className="w-full py-2 px-6 col-start-1 col-end-3 flex justify-center bg-bodyBackColor rounded-lg 
                  lg:py-1 lg:px-3
                  sm:col-end-5
                  "
              >
                <span className="self-center text-xl capitalize font-title">
                  Detail Order:
                </span>
              </div>
              {/* Box 2 Kg */}
              <div
                className="w-full py-2 px-6 col-start-1 col-end-2 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg
                  lg:py-1 lg:px-3
                  sm:col-end-3
                  "
              >
                <label
                  htmlFor="berat"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Berat <span className="text-xs text-textColor">(Kg)</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  required=""
                  className="w-[50%] lg:w-full text-base lg:text-sm text-center border-b-2 border-textColor outline-none bg-transparent"
                />
              </div>
              {/* Box 3 Biaya */}
              <div
                className="w-full py-2 px-6 col-start-2 col-end-3 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg 
                  lg:py-1 lg:px-3
                  sm:row-start-2 sm:col-start-3 sm:col-end-5
                  "
              >
                <label
                  htmlFor="biaya"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Total Biaya{" "}
                  <span className="text-xs text-textColor">
                    (Incl. Tax 3%){" "}
                  </span>
                </label>
                <span className="text-base lg:text-sm">Rp. 150.000</span>
              </div>
              {/* Box 4 Isi */}
              <div
                className="w-full py-2 px-6 col-start-1 col-end-2 row-start-3 flex flex-col justify-around bg-bodyBackColor rounded-lg
                  lg:py-1 lg:px-3
                  sm:col-end-3
                  "
              >
                <label
                  htmlFor="isi"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Isi Kiriman
                </label>
                <select
                  name="tujuan"
                  id=""
                  required=""
                  className="p-1 text-base lg:text-sm bg-transparent border-b-2 border-textColor outline-none"
                >
                  <option className="text-left text-sm lg:text-xs" value="">
                    Pilih Isi Kiriman
                  </option>
                  <option
                    className="text-left text-sm lg:text-xs"
                    value="Makanan & Minuman"
                  >
                    Makanan &amp; Minuman
                  </option>
                  <option
                    className="text-left text-sm lg:text-xs"
                    value="Pakaian"
                  >
                    Pakaian
                  </option>
                  <option className="text-left text-sm lg:text-xs" value="Buku">
                    Buku
                  </option>
                  <option
                    className="text-left text-sm lg:text-xs"
                    value="Bumbu Dapur"
                  >
                    Bumbu Dapur
                  </option>
                  <option
                    className="text-left text-sm lg:text-xs"
                    value="Elektronik"
                  >
                    Elektronik
                  </option>
                  <option
                    className="text-left text-sm lg:text-xs"
                    value="Lain-lain"
                  >
                    Lain-lain
                  </option>
                </select>
              </div>
              {/* Box 5 WA, TOGGLE FLEX / HIDDEN */}
              <div
                className="w-full py-2 px-6 col-start-2 col-end-3 row-start-3 flex flex-col justify-around bg-bodyBackColor rounded-lg 
              lg:py-1 lg:px-3
              sm:col-start-3 sm:col-end-5
              "
              >
                <label
                  htmlFor="wa"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Nomor WhatsApp
                </label>
                <input
                  type="text"
                  minLength={8}
                  maxLength={15}
                  required=""
                  className="w-[80%] lg:w-full text-base lg:text-sm text-left border-b-2 border-textColor outline-none bg-transparent"
                />
              </div>
              {/* Box 7 Catatan */}
              <div
                className="w-full py-2 px-6 col-start-1 col-end-3 row-start-4 flex flex-col space-y-2 bg-bodyBackColor rounded-lg 
              lg:py-1 lg:px-3
              sm:col-end-5 sm:space-y-0 sm:justify-around
              "
              >
                <label
                  htmlFor="noteOrder"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Catatan Order{" "}
                  <span className="text-xs text-textColor">
                    (Pesan untuk Traveler)
                  </span>
                </label>
                <textarea
                  name="noteOrder"
                  rows={2}
                  maxLength={250}
                  className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                  placeholder="Tidak wajib diisi..."
                  defaultValue={""}
                />
              </div>
              {/* Box 8 Instruksi */}
              <div
                className="w-full p-4 col-start-3 col-end-5 row-start-1 row-end-5 flex flex-col justify-between bg-slate-100 rounded-lg
                  lg:py-1 lg:px-3
                  sm:row-start-5 sm:row-end-[9] sm:col-start-1 sm:col-end-5 
                  "
              >
                <p className="text-xs">
                  Pembayaran dilakukan ke alamat: <br />
                  Bank Mandiri <br />
                  No. Rek: 0100000000 <br />
                  Muhammad Akbar
                </p>
                <div className="flex space-x-2 justify-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    required=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="terms" className="text-xs">
                    Dengan ini saya menyatakan setuju dengan{" "}
                    <Link to="/rules" target="_blank" className="underline">
                      Syarat &amp; Ketentuan
                    </Link>{" "}
                    yang berlaku.
                  </label>
                </div>
              </div>
              {/* Box 9 Tombol n Messages */}
              <div
                className="w-full py-2 px-6 col-start-1 col-end-5 row-start-5 flex flex-col justify-around 
                  lg:py-1 lg:px-3
                  sm:row-start-[9] sm:col-start-1 sm:col-end-5 
                  "
              >
                {/* Tombol Submit */}
                <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
                  <button type="submit">Beli Bagasi</button>
                </div>
                {/* Success Message */}
                <Notification type="success" text="Permintaan berhasil" />
              </div>
            </form>
            <FormUploadDokumen type="order" />
          </div>{" "}
          {/* Akhir Order Container */}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default FormCreateOrder;
