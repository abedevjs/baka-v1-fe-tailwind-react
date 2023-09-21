import Notification from "./Notification";

export function FormUploadDokumen({ type = "bagasi" }) {
  return (
    <form
      action=""
      className="px-4 grid grid-cols-4 grid-rows-2 gap-1 font-text bg-bodyBackColor rounded-lg lg:mx-4 lg:pb-4"
    >
      {/* Box 1 Upload Instruksi */}
      <div
        className="w-full p-4 col-start-1 col-end-5 row-start-1 flex flex-col justify-between  
                lg:row-end-[9] lg:col-start-1 lg:col-end-5
                sm:p-2
                "
      >
        {/* Paragraf Pendukung Jual Bagasi */}
        <p className="text-xs">
          Paragraf instruksi selanjutnya untuk Traveler. Isinya: <br />
          1. Tiket akan di periksa. <br />
          2. Jika valid akan di list. Jika tdk valid minta register lg. <br />
          3. Alamat Gudang Baka utk mengambil titipan Jastiper.
        </p>
        {/* <div class="flex space-x-2 justify-center">
                <input id="default-checkbox" type="checkbox" value="" required class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="terms" class="text-xs">Dengan ini saya menyatakan setuju dengan <a href="rules.html" target="_blank" class="underline">Syarat & Ketentuan</a> yang berlaku.</label>
            </div> */}
      </div>
      {/* Box 2 Upload Document */}
      <div
        className="w-full py-4 px-4 col-start-1 col-end-3 row-start-2 flex justify-around   
            lg:col-end-5
            sm:p-2 sm:flex-col
            "
      >
        {/* Icon */}
        <img
          src="/svg/plane-ticket.svg"
          className="w-12 sm:w-10 sm:self-center"
          alt=""
        />
        {/* Label + Input Box */}
        <div className="w-[80%] flex flex-col justify-between sm:w-auto">
          <label
            htmlFor="tiket"
            className="text-sm text-primaryBlue sm:text-xs"
          >
            Upload {type == "bagasi" ? "Tiket Penerbangan" : "Bukti Pembayaran"}{" "}
            <br />{" "}
            <span className="text-xs text-textColor">
              (File Type: PDF, PNG, JPG, atau JPEG. File Max: 5mb)
            </span>
          </label>
          <input
            type="file"
            id="tiket"
            required=""
            className="text-base sm:text-xs text-center text-textColor bg-transparent border-b-2 border-textColor outline-none cursor-pointer"
          />
        </div>
      </div>
      {/* Box 3 Upload Button */}
      <div
        className="col-start-3 col-end-5 row-start-2 flex flex-col justify-evenly 
            lg:row-start-[9] lg:col-start-1 lg:col-end-5 "
      >
        {/* Tombol Submit */}
        <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
          <button type="submit">Upload Dokumen</button>
        </div>
        {/* Success Message */}
        <Notification type="error" text="upload gagal" />
      </div>
    </form>
  );
}
