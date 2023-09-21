import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";

function FormCreateBagasi() {
  return (
    <>
      {/* JUAL BAGASI Wrapper  */}
      <div className="w-full py-8 px-4 mb-8 mx-auto text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
        {/* Form Jual Bagasi */}
        {/* grid-rows-[200px_minmax(900px,_1fr)_100px] */}
        <form
          action=""
          className="
                  px-4 grid grid-cols-4 grid-rows-6 gap-4 font-text
                  lg:grid-rows-8 lg:mb-8
                  "
        >
          {/* Box 1 Dari - Tujuan */}
          <div
            className="w-full py-4 px-4 col-start-1 col-end-3 flex justify-around bg-bodyBackColor rounded-lg 
                      lg:col-end-5
                      sm:p-2 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/map-marker.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[80%] flex justify-around sm:w-auto">
              {/* Label + Input Dari Box */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="dari"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Dari
                </label>
                <select
                  name="dari"
                  id=""
                  required=""
                  className="p-1 text-base sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                >
                  <option className="text-left text-sm sm:text-xs" value="">
                    Pilih Kota Asal
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Jakarta"
                  >
                    Jakarta
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Istanbul"
                  >
                    Istanbul
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Cairo"
                  >
                    Cairo
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Dubai"
                  >
                    Dubai
                  </option>
                </select>
              </div>
              {/* Label + Input Tujuan Box */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="tujuan"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Tujuan
                </label>
                <select
                  name="tujuan"
                  id=""
                  required=""
                  className="p-1  sm:text-xs text-base bg-transparent border-b-2 border-textColor outline-none"
                >
                  <option className="text-left text-sm sm:text-xs" value="">
                    Pilih Kota Tujuan
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Jakarta"
                  >
                    Jakarta
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Istanbul"
                  >
                    Istanbul
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Cairo"
                  >
                    Cairo
                  </option>
                  <option
                    className="text-left text-sm sm:text-xs"
                    value="Dubai"
                  >
                    Dubai
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* Box 2 Berangkat - Tiba */}
          <div
            className="w-full py-4 px-4 col-start-1 col-end-3 flex justify-around bg-bodyBackColor rounded-lg  
                      lg:col-end-5
                      sm:p-2 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/tear-off-calendar.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[80%] flex justify-around sm:w-auto">
              {/* Label + Input Berangkat */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="berangkat"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Tanggal Berangkat
                </label>
                <input
                  type="date"
                  min="2023-01-01"
                  id="berangkat"
                  defaultValue="2023-01-01"
                  required=""
                  className="text-base sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
              {/* Label + Input Tiba */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="tiba"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Tanggal Tiba
                </label>
                <input
                  type="date"
                  min="2023-01-01"
                  id="tiba"
                  defaultValue="2023-01-01"
                  required=""
                  className="text-base sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
            </div>
          </div>
          {/* Box 3 Berat */}
          <div
            className="w-full py-4 px-4 col-start-1 col-end-2 flex justify-around bg-bodyBackColor rounded-lg  
                      lg:col-end-3
                      sm:p-2 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/weight-kilogram.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
              <label
                htmlFor="berat"
                className="text-sm text-primaryBlue sm:text-xs"
              >
                Berat&nbsp;<span className="text-xs text-textColor">(Kg)</span>{" "}
              </label>
              <input
                type="number"
                min={1}
                max={60}
                id="berat"
                required=""
                className="text-base sm:text-xs text-center bg-transparent border-b-2 border-textColor outline-none"
              />
            </div>
          </div>
          {/* Box 4 Harga */}
          <div
            className="w-full py-4 px-4 col-start-2 col-end-3 flex justify-around bg-bodyBackColor rounded-lg 
                      lg:col-start-3 lg:col-end-5
                      sm:p-2 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/payments-outline-rounded.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
              <label
                htmlFor="harga"
                className="text-sm text-primaryBlue sm:text-xs"
              >
                Harga&nbsp;
                <span className="text-xs text-textColor">(@ Kg)</span>
              </label>
              <div className="flex space-x-1">
                <span className="text-base sm:text-xs">Rp.</span>
                <input
                  type="text"
                  minLength={1}
                  maxLength={7}
                  id="harga"
                  required=""
                  className="w-full text-base sm:text-xs text-left bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
            </div>
          </div>
          {/* Box 7 WhatsApp, TOGGLE FLEX / HIDDEN */}
          <div
            className="w-full py-4 px-4 col-start-1 col-end-2 row-start-4 flex justify-around bg-bodyBackColor rounded-lg
                      lg:col-end-3
                      sm:p-2 sm:col-end-5 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/baseline-whatsapp.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
              <label
                htmlFor="WhatsApp"
                className="text-sm text-primaryBlue sm:text-xs"
              >
                Nomor&nbsp;WhatsApp{" "}
              </label>
              <input
                type="text"
                minLength={10}
                maxLength={15}
                id="WhatsApp"
                required=""
                className="text-base sm:text-xs text-left bg-transparent border-b-2 border-textColor outline-none"
              />
            </div>
          </div>
          {/* Box 6 Catatan Traveler */}
          <div
            className="w-full py-4 px-4 col-start-1 col-end-3 row-start-5 flex justify-around bg-bodyBackColor rounded-lg 
                      lg:col-end-5
                      sm:p-2 sm:flex-col
                      "
          >
            {/* Icon */}
            <img
              src="/svg/comment.svg"
              className="w-12 sm:w-10 sm:self-center"
              alt=""
            />
            {/* Label + Input Box */}
            <div className="w-[80%] flex flex-col space-y-2 sm:w-auto">
              <label
                htmlFor="noteTravel"
                className="text-sm text-primaryBlue sm:text-xs"
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
                className="p-2 w-full text-sm sm:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                placeholder="Tidak wajib diisi..."
                defaultValue={""}
              />
            </div>
          </div>
          {/* Box 8 Instruksi */}
          <div
            className="w-full p-4 col-start-3 col-end-5 row-start-1 row-end-6 flex flex-col justify-between bg-slate-100 rounded-lg 
                          lg:row-start-6 lg:row-end-[9] lg:col-start-1 lg:col-end-5
                          sm:p-2
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
                  Syarat &amp; Ketentuan
                </a>{" "}
                yang berlaku.
              </label>
            </div>
          </div>
          {/* Box 9 Tombol dan Notification */}
          <div
            className="col-start-1 col-end-5 row-start-6 flex flex-col justify-evenly 
                      lg:row-start-[9] lg:col-start-1 lg:col-end-5 "
          >
            {/* Tombol Submit */}
            <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
              <button type="submit">Jual Bagasi</button>
            </div>
            {/* Success Message */}
            <Notification type="success" text="Permintaan berhasil" />
          </div>
        </form>
        {/* FORM UPLOAD DOKUMEN */}
        <FormUploadDokumen />
      </div>
      {/* JUAL BAGASI Wrapper end */}
    </>
  );
}

export default FormCreateBagasi;
