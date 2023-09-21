import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";

function FormUpdateOrder() {
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
            <span className="text-base sm:text-sm">Opened</span>
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
            <span className="text-base sm:text-sm">Turkish Airline</span>
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
                <img src="/svg/jakarta.svg" alt="Jakarta" />
                <span>Jakarta</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue">Tujuan</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                <img src="/svg/istanbul.svg" alt="Istanbul" />
                <span>Istanbul</span>
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
                <span>20 April 2023</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">Tiba</span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/istanbul.svg" alt="Istanbul"> */}
                <span>21 April 2023</span>
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
                <span>60</span>
              </div>
            </div>
            {/* Content Box Tujuan */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue sm:text-xs">
                Sisa Bagasi <span className="text-xs text-textColor">(Kg)</span>
              </span>
              <div className="flex space-x-2 text-base sm:text-sm">
                {/* <img src="/svg/istanbul.svg" alt="Istanbul"> */}
                <span>30</span>
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
            <span className="text-base sm:text-sm">Rp. 150.000</span>
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
            <p className="text-sm sm:text-xs">
              1. Tidak menerima barang terlarang <br />
              2. Tidak menerima cairan
            </p>
          </div>
        </div>
        {/* Error Message (Jika status bukan 'OPENED') */}
        <div
          className="w-full col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center 
              sm:row-start-[9] sm:row-end-[10] sm:col-start-1 sm:col-end-5
              "
        >
          <span className="py-1 px-2 text-xs text-white bg-red-500 rounded-lg">
            Bagasi masih dalam proses konfirmasi, belum bisa di order. <br />
            Coba beberapa saat lagi ya kak...🙂
          </span>
        </div>
      </div>{" "}
      {/* Akhir Grid (Bagasi) Container */}
      <>
        {/* ORDER */}
        <div className="w-full mb-8 py-8 px-4 mx-auto font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
          {/* Order Content Container */}
          <form
            className="
              px-4 grid grid-cols-4 grid-rows-6 gap-4
              sm:py-4 sm:grid-rows-9 sm:gap-2
              "
          >
            {/* Box 1 Dari - Tujuan */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-3 row-start-1 flex items-center justify-evenly bg-bodyBackColor rounded-lg
                  sm:px-4 sm:col-end-5 sm:flex-col sm:space-y-2 
                  "
            >
              {/* Icon */}
              <img
                src="/svg/map-marker.svg"
                className="w-12 lg:w-10 sm:w-8 sm:self-center"
                alt=""
              />
              {/* Content Box Dari dan Tujuan */}
              <div className="w-[80%] flex justify-around">
                {/* Content Box Dari */}
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Dari
                  </span>
                  <div className="flex space-x-2 text-base lg:text-sm sm:text-xs">
                    <img src="/svg/jakarta.svg" alt="Jakarta" />
                    <span>Jakarta</span>
                  </div>
                </div>
                {/* Content Box Tujuan */}
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Tujuan
                  </span>
                  <div className="flex space-x-2 text-base lg:text-sm sm:text-xs">
                    <img src="/svg/istanbul.svg" alt="Istanbul" />
                    <span>Istanbul</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 2 Status */}
            <div
              className="
                  w-full py-2 px-6 col-start-3 col-end-4 row-start-1 flex items-center justify-evenly  bg-bodyBackColor rounded-lg
                  lg:space-x-2
                  sm:px-4 sm:row-start-2 sm:col-start-1 sm:col-end-3
                  "
            >
              {/* Icon */}
              <img
                src="/svg/preparing.svg"
                className="w-12 h-auto lg:w-8 sm:w-6"
                alt="Preparing"
              />
              {/* Content Box Status */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Status
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  Preparing
                </span>
              </div>
            </div>
            {/* Box 3 Maskapai */}
            <div
              className="
                  w-full py-2 px-6 col-start-4 col-end-5 row-start-1 flex items-center justify-evenly bg-bodyBackColor rounded-lg
                  lg:space-x-2
                  sm:px-4 sm:row-start-2 sm:col-start-3 sm:col-end-5
                  "
            >
              {/* Icon */}
              <img
                src="/svg/airlines-rounded.svg"
                className="w-12 h-auto "
                alt="Date"
              />
              {/* Content Box Status */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Maskapai
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  Turkish&nbsp;Airline
                </span>
              </div>
            </div>
            {/* Box 4 Berangkat - Tiba */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-3 row-start-2 flex justify-evenly items-center bg-bodyBackColor rounded-lg
                  lg:space-x-2 lg:items-center
                  sm:px-4 sm:row-start-3 sm:col-end-5 sm:flex-col sm:space-y-2 
                  "
            >
              {/* Icon */}
              <img
                src="/svg/tear-off-calendar.svg"
                className="w-12 lg:w-10 sm:w-8"
                alt=""
              />
              <div className="w-[80%] flex justify-around">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Berangkat
                  </span>
                  <span className="text-base lg:text-sm sm:text-xs">
                    03 April 2023
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Tiba
                  </span>
                  <span className="text-base lg:text-sm sm:text-xs">
                    05 April 2023
                  </span>
                </div>
              </div>
            </div>
            {/* Box 5 Kg */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-2 row-start-3 flex flex-col justify-around bg-bodyBackColor rounded-lg
                  sm:px-4 sm:row-start-4 sm:col-end-3
                  "
            >
              <label htmlFor="berat" className="text-sm text-primaryBlue">
                Berat <span className="text-xs text-textColor">(Kg)</span>
              </label>
              <input
                type="number"
                min={1}
                max={60}
                required=""
                className="w-[50%] text-base lg:text-sm sm:text-xs text-center border-b-2 border-textColor outline-none bg-transparent"
              />
            </div>
            {/* Box 6 Isi */}
            <div
              className="
                  w-full py-2 px-6 col-start-2 col-end-3 row-start-3 flex flex-col justify-around bg-bodyBackColor rounded-lg
                  sm:px-4 sm:row-start-4 sm:col-start-3 sm:col-end-5
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
                className="p-1 text-base lg:text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
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
            {/* Box 7 Biaya Tax */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-3 row-start-4 flex justify-around bg-bodyBackColor rounded-lg
                  lg:space-x-2
                  sm:px-4 sm:row-start-5 sm:col-start-1 sm:col-end-5 sm:flex-col sm:space-x-2
                  "
            >
              {/* Icon */}
              <img
                src="/svg/coins.svg"
                className="w-12 lg:w-10 sm:w-8 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex justify-around sm:w-full">
                <div className="flex flex-col justify-evenly">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Biaya
                  </span>
                  <span className="text-base lg:text-sm sm:text-xs">
                    Rp. 350.000
                  </span>
                </div>
                <div className="flex flex-col justify-evenly">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Tax <span className="text-xs text-textColor">(3%)</span>
                  </span>
                  <span className="text-base lg:text-sm sm:text-xs">
                    Rp. 10.500
                  </span>
                </div>
                <div className="flex flex-col justify-evenly">
                  <span className="text-sm text-primaryBlue lg:text-xs">
                    Total Biaya
                  </span>
                  <span className="text-base lg:text-sm sm:text-xs">
                    Rp. 360.500
                  </span>
                </div>
              </div>
            </div>
            {/* Box 9 Catatan */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-3 row-start-5 flex flex-col space-y-2 bg-bodyBackColor rounded-lg
                  sm:px-4 sm:row-start-6 sm:col-end-5
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
            {/* Box 10 Instruksi */}
            <div
              className="
                  w-full p-4 col-start-3 col-end-5 row-start-2 row-end-6 flex flex-col justify-between bg-slate-100 rounded-lg 
                  lg:p-2
                  sm:row-start-[7] sm:row-end-[10] sm:col-start-1
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
                  <a href="rules.html" target="_blank" className="underline">
                    Peraturan &amp; Ketentuan
                  </a>{" "}
                  yang berlaku.
                </label>
              </div>
            </div>
            {/* Box 11 Tombol n Messages */}
            <div
              className="
                  w-full py-2 px-6 col-start-1 col-end-5 row-start-6 flex flex-col justify-around
                  sm:row-start-[11] sm:col-start-1 sm:col-end-5 sm:space-y-2
                  "
            >
              {/* Tombol Submit */}
              <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
                <button type="submit">Update Order</button>
              </div>
              {/* Notify Message */}
              <Notification type="error" text="Permintaan gagal" />
            </div>
          </form>
          <FormUploadDokumen type="order" />
        </div>{" "}
        {/* Akhir Order Container */}
      </>
    </>
  );
}

export default FormUpdateOrder;
