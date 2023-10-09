import { Link, useNavigate, useParams } from "react-router-dom";
import { FormUploadDokumen } from "../../ui/Form";
import Notification from "../../ui/Notification";
import { useGetAllBagasi } from "./useGetAllBagasi";
import Spinner from "../../ui/Spinner";
import { currencyFormat, dateFormat } from "../../utilities/formatter";
import { useDeleteBagasi } from "./useDeleteBagasi";
import { useUpdateBagasi } from "./useUpdateBagasi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const MAX_BAGASI_KG = import.meta.env.VITE_MAX_BAGASI_KG;
const MIN_BAGASI_KG = import.meta.env.VITE_MIN_BAGASI_KG;
const MAX_LENGTH_CATATAN = import.meta.env.VITE_MAX_LENGTH_CATATAN;

const today = new Date();

function FormUpdateBagasi() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { bagasi, isLoading } = useGetAllBagasi();
  const { deleteBagasi, isDeleting } = useDeleteBagasi();
  const { updateBagasi, isUpdating } = useUpdateBagasi();
  const { register, handleSubmit, formState } = useForm();
  const { errors, isDirty } = formState;

  if (isLoading) return <Spinner />;

  //Cek jika bagasi tsb msh ada
  if (!bagasi?.find((el) => el._id == id)) {
    toast.error("Bagasi yang kakak minta tidak tersedia 🙁");
    return navigate("/user");
  }

  //Destructuring data bagasi dari calling useGetAllBagasi() --start
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
    bookedKg,
    hargaRp,
    adminFeeRp,
    netRp,
    balanceRp,
    catatan,
  } = data[0];
  //Destructuring data bagasi dari calling useGetAllBagasi() --end

  //Executing update form dari calling useUpdateBagasi() --start
  function onSuccess(data) {
    if (!isDirty) return;
    if (!data) return;

    //1. totalbagasi tdk boleh lewat 80kg
    // console.log(data.availableKg, bookedKg);
    // console.log(typeof data.availableKg);
    // if (data.availableKg > MAX_BAGASI_KG)
    //   return console.log("1. totalbagasi tdk boleh lewat 80kg");
    //2. total bagasi tdk boleh lebih kecil dari bagasi yg sdh di booking (brrti tdk boleh dibwhnya booking)
    // if (data.availableKg < bookedKg)
    //   return console.log(
    //     "2. total bagasi tdk boleh lebih kecil dari bagasi yg sdh di booking"
    //   );
    // data = {
    //   waktuBerangkat: data.waktuBerangkat,
    //   waktuTiba: data.waktuTiba,
    //   catatan: data.catatan,
    //   availableKg: data.availableKg,
    //   hargaRp: data.hargaRp,
    // };

    updateBagasi({ id: id, body: data });
  }
  function onError(err) {
    console.log(err);
  }
  //Executing update form dari calling useUpdateBagasi() --end

  //Executing tombol 'Hapus Bagasi'. dari calling useDeleteBagasi() --start
  function handleDelete() {
    deleteBagasi(id);
  }
  //Executing tombol 'Hapus Bagasi'. dari calling useDeleteBagasi() --end

  return (
    <>
      {/* JUAL BAGASI Wrapper  */}
      <div className="w-full mb-8 py-8 px-4 mx-auto font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
        {/* Form Jual Bagasi */}
        <form
          onSubmit={handleSubmit(onSuccess, onError)}
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
                  <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
                  <span>{dari}</span>
                </div>
              </div>
              {/* Content Box Tujuan */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Tujuan
                </span>
                <div className="flex space-x-2 text-base lg:text-sm">
                  <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
                  <span>{tujuan}</span>
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
              src={`/svg/${status.toLowerCase()}.svg`}
              className="w-12 h-auto lg:w-10 sm:w-8"
              alt="Date"
            />
            {/* Content Box Status */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue lg:text-xs">
                Status
              </span>
              <span className="text-base lg:text-sm sm:text-xs">{status}</span>
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
              <span
                className={`text-base ${
                  pesawat == "" ? " text-red-500" : ""
                } lg:text-sm sm:text-xs`}
              >
                {pesawat == "" ? "(Konfirmasi)" : pesawat}
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
                  min={new Date(waktuBerangkat).toISOString().split("T")[0]}
                  defaultValue={
                    new Date(waktuBerangkat).toISOString().split("T")[0]
                  }
                  id="waktuBerangkat"
                  {...register("waktuBerangkat")}
                  className="text-base lg:text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
              {/* Label + Input Tiba */}
              <div className="flex flex-col justify-evenly">
                <label
                  htmlFor="waktuTiba"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Tgl Tiba
                </label>
                <input
                  type="date"
                  min={new Date(waktuBerangkat).toISOString().split("T")[0]}
                  defaultValue={new Date(waktuTiba).toISOString().split("T")[0]}
                  id="waktuTiba"
                  {...register("waktuTiba")}
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
                  htmlFor="availableKg"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Berat&nbsp;
                  <span className="text-xs text-textColor">(Kg)</span>{" "}
                </label>
                <input
                  type="number"
                  min={MIN_BAGASI_KG}
                  max={MAX_BAGASI_KG}
                  defaultValue={initialKg}
                  id="availableKg"
                  {...register("availableKg")}
                  className="text-base lg:text-sm sm:text-xs text-center bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Booked <span className="text-xs text-textColor">(Kg)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {bookedKg}
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Sisa <span className="text-xs text-textColor">(Kg)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {availableKg}
                </span>
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
                htmlFor="hargaRp"
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
                  maxLength={10}
                  defaultValue={Intl.NumberFormat("in-ID").format(hargaRp)}
                  id="hargaRp"
                  {...register("hargaRp")}
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
                  {currencyFormat(balanceRp)}
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Tax <span className="text-xs text-textColor">(5%)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {currencyFormat(adminFeeRp)}
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">Net</span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {currencyFormat(netRp)}
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
                htmlFor="catatan"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Catatan Traveler{" "}
                <span className="text-xs text-textColor">
                  (Pesan untuk Jastiper)
                </span>
              </label>
              <textarea
                name="catatan"
                rows={2}
                maxLength={MAX_LENGTH_CATATAN}
                className="p-2 w-full text-sm border-2 border-textColor bg-transparent outline-none rounded-lg"
                placeholder="Tidak wajib diisi..."
                defaultValue={catatan}
                id="catatan"
                {...register("catatan")}
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
                required={true}
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
          {/* Box 12 Tombol */}
          <div className="col-start-1 col-end-5 row-start-7 flex flex-col space-y-2 justify-evenly sm:row-start-[11] sm:col-start-1 sm:col-end-5">
            {/* Tombol Submit */}
            <div className="p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
              <button type="submit">Update Bagasi</button>
            </div>
            {/* Notification Message */}
            {/* <Notification type="success" text="Update bagasi berhasil" /> */}
          </div>
        </form>
        <FormUploadDokumen />
      </div>{" "}
      {/* JUAL BAGASI Wrapper end */}
      {/* Link Delete Account */}
      <div className="w-1/4 sm:w-full mb-2 p-2 px-2 mx-auto text-center text-sm text-white rounded-xl bg-red-500 duration-300 cursor-pointer hover:opacity-80">
        <button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Menghapus..." : "Hapus Bagasi"}
        </button>
      </div>
    </>
  );
}

export default FormUpdateBagasi;
