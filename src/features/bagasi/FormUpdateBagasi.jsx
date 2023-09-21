import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";

function FormUpdateBagasi() {
  return (
    <>
      {/* JUAL BAGASI Wrapper  */}
      <div className="w-full mb-8 py-8 px-4 mx-auto font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
        {/* Form Jual Bagasi */}
        <form
          action=""
          className="mb-6 px-4 grid grid-cols-4 grid-rows-6 gap-4 sm:py-4 sm:grid-rows-10 sm:gap-2 "
        >
          {/* Box 1 Dari - Tujuan */}
          <div
            className="
                  w-full py-4 px-4 col-start-1 col-end-3 row-start-1 flex items-center justify-evenly bg-bodyBackColor rounded-lg
                  sm:py-2 sm:px-2 sm:col-end-5 sm:flex-col sm:space-y-2
                  "
          >
            {/* Icon */}
            <img
              src="/svg/map-marker.svg"
              className="w-12 lg:w-10 sm:w-8"
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
                <div className="flex space-x-2 text-base lg:text-sm">
                  <img src="/svg/istanbul.svg" alt="Istanbul" />
                  <span>Istanbul</span>
                </div>
              </div>
            </div>
          </div>
          {/* Box 2 Status */}
          <div
            className="
                  w-full py-4 px-4 col-start-3 col-end-4 row-start-1 flex items-center justify-evenly  bg-bodyBackColor rounded-lg
                  sm:py-2 sm:px-2 sm:row-start-2 sm:col-start-1 sm:col-end-3
                  "
          >
            {/* Icon */}
            <img
              src="/svg/opened.svg"
              className="w-12 h-auto lg:w-10 sm:w-8"
              alt="Date"
            />
            {/* Content Box Status */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue lg:text-xs">
                Status
              </span>
              <span className="text-base lg:text-sm sm:text-xs">Opened</span>
            </div>
          </div>
          {/* Box 3 Maskapai */}
          <div
            className="
              w-full py-4 px-4 col-start-4 col-end-5 row-start-1 flex items-center justify-evenly bg-bodyBackColor rounded-lg
              sm:py-2 sm:px-2 sm:row-start-2 sm:col-start-3 sm:col-end-5 sm:space-x-2
              "
          >
            {/* Icon */}
            <img
              src="/svg/airlines-rounded.svg"
              className="w-12 h-auto lg:w-10 sm:w-8"
              alt="Date"
            />
            {/* Content Box Status */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue lg:text-xs">
                Maskapai
              </span>
              <span className="text-base lg:text-sm sm:text-xs">
                Turkish Airline
              </span>
            </div>
          </div>
          {/* Box 4 Berangkat - Tiba */}
          <div
            className="
                  w-full py-4 px-4 col-start-1 col-end-3 row-start-2 flex justify-evenly bg-bodyBackColor rounded-lg
                  sm:py-2 sm:px-2 sm:row-start-3 sm:col-end-5 sm:flex-col sm:space-y-2
                  "
          >
            {/* Icon */}
            <img
              src="/svg/tear-off-calendar.svg"
              className="w-12 lg:w-10 sm:w-8 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[80%] flex justify-around sm:self-center sm:space-x-2">
              {/* Label + Input Berangkat */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="berangkat"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Tgl Berangkat
                </label>
                <input
                  type="date"
                  min="2023-01-01"
                  max="2023-01-10"
                  id="berangkat"
                  defaultValue="2023-01-01"
                  required=""
                  className="text-base lg:text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
              {/* Label + Input Tiba */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="tiba"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Tgl Tiba
                </label>
                <input
                  type="date"
                  min="2023-01-01"
                  max="2023-01-10"
                  id="tiba"
                  defaultValue="2023-01-01"
                  required=""
                  className="text-base lg:text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
            </div>
          </div>
          {/* Box 5 Berat */}
          <div
            className="
                  w-full py-4 px-4 col-start-1 col-end-3 row-start-3 flex justify-around bg-bodyBackColor rounded-lg
                  sm:py-2 sm:px-2 sm:row-start-4 sm:col-end-5 sm:flex-col sm:space-y-2
                  "
          >
            {/* Icon */}
            <img
              src="/svg/weight-kilogram.svg"
              className="w-12 lg:w-10 sm:w-8 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[80%] flex justify-around sm:w-full">
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="berat"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Berat&nbsp;
                  <span className="text-xs text-textColor">(Kg)</span>{" "}
                </label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  id="berat"
                  required=""
                  className="text-base lg:text-sm sm:text-xs text-center bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Booked <span className="text-xs text-textColor">(Kg)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">40</span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Sisa <span className="text-xs text-textColor">(Kg)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">20</span>
              </div>
            </div>
          </div>
          {/* Box 6 Harga */}
          <div
            className="
                  w-full py-4 px-4 col-start-1 col-end-2 row-start-4 flex justify-around bg-bodyBackColor rounded-lg 
                  lg:col-end-3
                  sm:py-2 sm:px-2 sm:row-start-5 sm:col-end-5
                  "
          >
            {/* Icon */}
            <img
              src="/svg/payments-outline-rounded.svg"
              className="w-12 lg:w-10 sm:w-8"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[50%] flex flex-col justify-evenly lg:w-[80%]">
              <label
                htmlFor="harga"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Harga&nbsp;
                <span className="text-xs text-textColor">(@ Kg)</span>
              </label>
              <div className="lg:w-[50%] sm:w-full flex space-x-1 lg:space-x-0 lg:justify-evenly">
                <span className="text-base lg:text-sm sm:text-xs">Rp.</span>
                <input
                  type="text"
                  minLength={1}
                  maxLength={7}
                  id="harga"
                  required=""
                  className="w-full text-base lg:text-sm sm:text-xs text-left bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
            </div>
          </div>
          {/* Box 7 WhatsApp */}
          {/* <div class="w-full py-4 px-4 col-start-2 col-end-3 row-start-4 flex justify-around bg-bodyBackColor rounded-lg">
    
                  
                  <img src="/svg/baseline-whatsapp.svg" class="w-12" alt="">

                  
                  <div class="w-[50%] flex flex-col justify-evenly">
                      
                      <label for="WhatsApp" class="text-sm text-primaryBlue">Nomor&nbsp;WhatsApp </label>
                      <input type="text" minlength="10" maxlength="15" id="WhatsApp" required class="text-base text-left bg-transparent border-b-2 border-textColor outline-none">
                      
                  </div>
              </div> */}
          {/* Box 8 Balance */}
          <div
            className="
                  w-full py-4 px-4 col-start-1 col-end-3 row-start-5 flex justify-around bg-bodyBackColor rounded-lg
                  sm:py-2 sm:px-2 sm:row-start-6 sm:col-end-5 sm:flex-col sm:space-y-2
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
                  Balance
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  Rp. 4.000.000
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Tax <span className="text-xs text-textColor">(5%)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  Rp. 200.000
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">Net</span>
                <span className="text-base lg:text-sm sm:text-xs">
                  Rp. 3.800.000
                </span>
              </div>
            </div>
          </div>
          {/* Box 10 Catatan Traveler */}
          <div
            className="
              w-full py-4 px-4 col-start-1 col-end-3 row-start-6 flex justify-around bg-bodyBackColor rounded-lg
              sm:py-2 sm:px-2 sm:row-start-[7] sm:col-end-5
              "
          >
            {/* Icon */}
            <img src="/svg/comment.svg" className="w-12 lg:w-10" alt="" />
            {/* Label + Input Box */}
            <div className="w-[80%] flex flex-col space-y-2">
              <label
                htmlFor="noteTravel"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Catatan Traveler{" "}
                <span className="text-xs text-textColor">
                  (Pesan untuk Jastiper)
                </span>
              </label>
              <textarea
                name="noteTravel"
                rows={2}
                maxLength={250}
                className="p-2 w-full text-sm border-2 border-textColor bg-transparent outline-none rounded-lg"
                placeholder="Tidak wajib diisi..."
                defaultValue={""}
              />
            </div>
          </div>
          {/* Box 11 Instruksi */}
          <div
            className="
              w-full p-4 col-start-3 col-end-5 row-start-2 row-end-7 flex flex-col justify-between bg-slate-100 rounded-lg 
              sm:row-start-[8] sm:row-end-[11] sm:col-start-1 sm:col-end-5
              "
          >
            {/* Paragraf Pendukung Jual Bagasi */}
            <p className="text-xs">
              Paragraf instruksi selanjutnya untuk Traveler. Isinya: <br />
              1. Tiket akan di periksa. <br />
              2. Jika valid akan di list. Jika tdk valid minta register lg.{" "}
              <br />
              3. Alamat Gudang Baka utk mengambil titipan Jastiper.
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
          {/* Box 12 Tombol */}
          <div className="col-start-1 col-end-5 row-start-7 flex flex-col space-y-2 justify-evenly sm:row-start-[11] sm:col-start-1 sm:col-end-5">
            {/* Tombol Submit */}
            <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
              <button type="submit">Update Bagasi</button>
            </div>
            {/* Notification Message */}
            <Notification type="success" text="Update bagasi berhasil" />
          </div>
        </form>
        <FormUploadDokumen />
      </div>{" "}
      {/* JUAL BAGASI Wrapper end */}
    </>
  );
}

export default FormUpdateBagasi;
