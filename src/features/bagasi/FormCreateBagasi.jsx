import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useGetUser } from "../user/useGetUser";
import { useUpdateUser } from "../user/useUpdateUser";
import { FormUploadDokumen } from "../../ui/FormUploadDokumen";
import Notification from "../../ui/Notification";
import Spinner from "../../ui/Spinner";
import { useCreateBagasi } from "./useCreateBagasi";
import Option from "../../ui/Option";

const MIN_DAYS_BEFORE_DEPART_IN_MS = import.meta.env
  .VITE_MIN_DAYS_BEFORE_DEPART_IN_MS; // 7 days
const MAX_BAGASI_KG = import.meta.env.VITE_MAX_BAGASI_KG;
const MIN_BAGASI_KG = import.meta.env.VITE_MIN_BAGASI_KG;
const MIN_LENGTH_ALAMAT = import.meta.env.VITE_MIN_LENGTH_ALAMAT;
const MAX_LENGTH_ALAMAT = import.meta.env.VITE_MAX_LENGTH_ALAMAT;
const MAX_LENGTH_CATATAN = import.meta.env.VITE_MAX_LENGTH_CATATAN;

const today = new Date();
const todayPlus7Days = new Date(
  today.getTime() + Number(MIN_DAYS_BEFORE_DEPART_IN_MS)
); // today + 7 days later

function FormCreateBagasi() {
  const [showFormBagasi, setShowFormBagasi] = useState(true);
  const [showFormUpload, setShowFormUpload] = useState(false);

  const [kotaDari, setKotaDari] = useState("");
  const [kotaTujuan, setKotaTujuan] = useState("");

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isLoading, isDirty } = formState;
  const { user, isLoading: isLoadingUser } = useGetUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { createBagasi, isCreating } = useCreateBagasi();

  if (isLoading || isLoadingUser) return <Spinner />;

  const { nama } = user;

  //Executing createOrder AND updateUser (jika wa nya blm ada) --start
  function onSubmit(data) {
    //todo Jika tidak ada data, reject
    if (!data) return;

    //todo Jika kota dari dan kota tujuan sama, reject
    if (data.dari == data.tujuan) {
      toast.error("Kota asal dan tujuan tidak boleh sama kakak");
      return;
    }

    //todo Jika alamatDari dan alamatTujuan sama, reject
    if (data.alamatDari == data.alamatTujuan) {
      toast.error(
        "Alamat Kota Asal dan Alamat Kota Tujuan mohon di cek lagi ya kak"
      );
      return;
    }

    //todo Jika Tgl Berangkat setelah Tgl Tiba, reject
    if (Date.parse(data.waktuBerangkat) > Date.parse(data.waktuTiba)) {
      toast.error("Mohon cek Tgl Berangkat dan Tgl Tiba kak");
      return;
    }

    //todo Jika harga bagasi bukan angka atau ada karakter selain angka
    if (isNaN(Number(data.hargaRp)) || !Number(data.hargaRp)) {
      toast.error("Input harga bagasi dengan angka yg valid ya kak");
      return;
    }

    //todo Jika user tdk ada nmr tlp dan blm isi nmr tlp
    if (!user.telpon) {
      if (
        !data.telpon ||
        data.telpon == user.telpon ||
        data.telpon == "Belum ada" ||
        isNaN(Number(data.telpon))
      ) {
        toast.error("Input nomor WhatsApp dengan angka yang valid ya kak");
        return;
      }

      updateUser(data);
    }

    //todo Menghapus symbol '.' dari data.hargaRp
    data = { ...data, hargaRp: data.hargaRp.replace(/[^a-zA-Z0-9 ]/g, "") };

    //todo Execute createBagasi
    createBagasi(data, {
      onSuccess: () => {
        reset();
        setShowFormBagasi(false);
        setShowFormUpload(true);
      },
    });
  }

  //Jika ada error di handle disini
  function onError() {}
  //Executing createOrder --end

  return (
    <>
      {/* JUAL BAGASI Wrapper  */}
      {showFormBagasi && (
        <div className="w-full py-8 px-4 mb-8 mx-auto text-textColor bg-secondaryYellow rounded-lg shadow-md sm:py-4 lg:px-0">
          {/* Form Jual Bagasi */}
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="px-4 grid grid-cols-4 grid-rows-5 gap-4 font-text sm:grid-rows-10 lg:mb-8"
          >
            {/* Box 1 Dari - Tujuan */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-1 row-end-1 col-start-1 col-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/cityscape.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex justify-around sm:w-auto">
                {/* Label + Input Dari Box */}
                <div className="flex flex-col justify-evenly">
                  <label
                    htmlFor="dari"
                    className="text-sm text-primaryBlue lg:text-xs"
                  >
                    Dari
                  </label>
                  <select
                    name="dari"
                    id="dari"
                    {...register("dari", {
                      required: "Kota asal harus dipilih ya kak",
                    })}
                    onChange={(e) => setKotaDari(e.target.value)}
                    disabled={isCreating}
                    className="p-1 text-base lg:text-xs bg-transparent border-b-2 border-textColor outline-none"
                  >
                    <Option
                      feature="kota-asal"
                      className="text-left text-sm lg:text-xs"
                    />
                  </select>
                </div>

                {/* Label + Input Tujuan Box */}
                <div className="flex flex-col justify-evenly">
                  <label
                    htmlFor="tujuan"
                    className="text-sm text-primaryBlue lg:text-xs"
                  >
                    Tujuan
                  </label>
                  <select
                    name="tujuan"
                    id="tujuan"
                    {...register("tujuan", {
                      required: "Kota tujuan harus dipilih ya kak",
                    })}
                    onChange={(e) => setKotaTujuan(e.target.value)}
                    disabled={isCreating}
                    className="p-1  lg:text-xs text-base bg-transparent border-b-2 border-textColor outline-none"
                  >
                    <Option
                      feature="kota-tujuan"
                      className="text-left text-sm lg:text-xs"
                    />
                  </select>
                </div>
              </div>
            </div>

            {/* Box 2 Berangkat - Tiba */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-1 row-end-1 col-start-3 col-end-5 sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/tear-off-calendar.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex justify-around sm:w-auto">
                {/* Label + Input Berangkat */}
                <div className="flex flex-col justify-evenly">
                  <label
                    htmlFor="waktuBerangkat"
                    className="text-sm text-primaryBlue lg:text-xs"
                  >
                    Tanggal Berangkat
                  </label>
                  <input
                    type="date"
                    min={new Date(todayPlus7Days).toISOString().split("T")[0]}
                    defaultValue={
                      new Date(todayPlus7Days).toISOString().split("T")[0]
                    }
                    id="waktuBerangkat"
                    {...register("waktuBerangkat", {
                      required: "Tanggal Keberangkatan jangan lupa diisi kak",
                    })}
                    disabled={isCreating}
                    className="text-base lg:text-xs bg-transparent border-b-2 border-textColor outline-none"
                  />
                  {/* <DatePicker /> */}
                </div>

                {/* Label + Input Tiba */}
                <div className="flex flex-col justify-evenly">
                  <label
                    htmlFor="waktuTiba"
                    className="text-sm text-primaryBlue lg:text-xs"
                  >
                    Tanggal Tiba
                  </label>
                  <input
                    type="date"
                    min={new Date(todayPlus7Days).toISOString().split("T")[0]}
                    defaultValue={
                      new Date(todayPlus7Days).toISOString().split("T")[0]
                    }
                    id="waktuTiba"
                    {...register("waktuTiba", {
                      required: "Tanggal Kedatangan jangan lupa diisi kak",
                    })}
                    disabled={isCreating}
                    className="text-base lg:text-xs bg-transparent border-b-2 border-textColor outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Box 3 Alamat Dari */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-2 row-end-2 col-start-1 col-end-3 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/map-marker.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex flex-col space-y-2 sm:w-auto">
                <label
                  htmlFor="alamatDari"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Alamat Kota Asal
                </label>
                <textarea
                  name="alamatDari"
                  rows={2}
                  minLength={MIN_LENGTH_ALAMAT}
                  maxLength={MAX_LENGTH_ALAMAT}
                  id="alamatDari"
                  {...register("alamatDari", {
                    required:
                      "Tulis alamat kota asal tempat pengiriman barang ya kak",
                  })}
                  disabled={isCreating}
                  className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                  placeholder="Tulis alamat tempat pengiriman bagasi disini"
                  defaultValue={""}
                />
              </div>
            </div>

            {/* Box 4 Alamat Tujuan */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-2 row-end-2 col-start-3 col-end-5 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/map-marker.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex flex-col space-y-2 sm:w-auto">
                <label
                  htmlFor="alamatTujuan"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Alamat Kota Tujuan
                </label>
                <textarea
                  name="alamatTujuan"
                  rows={2}
                  minLength={MIN_LENGTH_ALAMAT}
                  maxLength={MAX_LENGTH_ALAMAT}
                  id="alamatTujuan"
                  {...register("alamatTujuan", {
                    required:
                      "Tulis alamat kota tujuan tempat pengambilan barang ya kak",
                  })}
                  className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                  placeholder="Tulis alamat tempat pengambilan bagasi disini"
                  defaultValue={""}
                />
              </div>
            </div>

            {/* Box 5 Berat */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-3 row-end-3 col-start-1 col-end-2 sm:row-start-5 sm:row-end-6 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/weight-kilogram.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
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
                  id="availableKg"
                  {...register("availableKg", {
                    required: "Mohon diisi berat bagasi yang akan dijual kak",
                  })}
                  disabled={isCreating}
                  className="text-base lg:text-xs text-center bg-transparent border-b-2 border-textColor outline-none"
                />
              </div>
            </div>

            {/* Box 6 Harga */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-3 row-end-3 col-start-2 col-end-3 sm:row-start-6 sm:row-end-7 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/payments-outline-rounded.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
                <label
                  htmlFor="hargaRp"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Harga&nbsp;
                  <span className="text-xs text-textColor">(@ Kg)</span>
                </label>
                <div className="flex space-x-1">
                  <span className="text-base lg:text-xs">Rp.</span>
                  <input
                    disabled={isCreating}
                    type="text"
                    minLength={1}
                    maxLength={10}
                    id="hargaRp"
                    {...register("hargaRp", {
                      required: "Tentukan harga bagasi nya dulu ya kak",
                    })}
                    className="w-full text-base lg:text-xs text-left bg-transparent border-b-2 border-textColor outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Box 7 Catatan Traveler */}
            <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-4 row-end-4 col-start-1 col-end-3 sm:row-start-7 sm:row-end-8 sm:col-start-1 sm:col-end-5">
              {/* Icon */}
              <img
                src="/svg/comment.svg"
                className="w-12 lg:w-10 sm:self-center"
                alt=""
              />
              {/* Label + Input Box */}
              <div className="w-[80%] flex flex-col space-y-2 sm:w-auto">
                <label
                  htmlFor="catatan"
                  className="text-sm text-primaryBlue lg:text-xs"
                >
                  Catatan Traveler{" "}
                  <span className="text-xs text-textColor">
                    (Pesan untuk pembeli bagasi)
                  </span>
                </label>
                <textarea
                  name="catatan"
                  rows={2}
                  maxLength={MAX_LENGTH_CATATAN}
                  id="catatan"
                  {...register("catatan")}
                  disabled={isCreating}
                  className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                  placeholder="Tidak wajib diisi..."
                  defaultValue={""}
                />
              </div>
            </div>

            {/* Box 8 WhatsApp, TOGGLE FLEX / HIDDEN */}
            {!user.telpon && (
              <div className="w-full py-4 px-4 flex justify-around bg-bodyBackColor rounded-lg sm:p-2 sm:flex-col row-start-5 row-end-5 col-start-1 col-end-2 sm:row-start-[8] sm:row-end-[9] sm:col-start-1 sm:col-end-5">
                {/* Icon */}
                <img
                  src="/svg/baseline-whatsapp.svg"
                  className="w-12 lg:w-10 sm:self-center"
                  alt=""
                />
                {/* Label + Input Box */}
                <div className="w-[50%] flex flex-col justify-evenly sm:w-auto">
                  <label
                    htmlFor="telpon"
                    className="text-sm text-primaryBlue lg:text-xs"
                  >
                    Nomor&nbsp;WhatsApp{" "}
                  </label>
                  <input
                    type="text"
                    minLength={10}
                    maxLength={15}
                    id="telpon"
                    {...register("telpon", {
                      required:
                        "Agar mudah dihubungi, sertakan nomor Wa nya ya kak",
                    })}
                    disabled={isCreating}
                    className="text-base lg:text-xs text-left bg-transparent border-b-2 border-textColor outline-none"
                  />
                </div>
              </div>
            )}

            {/* Box 9 Instruksi */}
            <div className="w-full p-4 flex flex-col justify-between bg-primaryBlue text-slate-50 rounded-lg sm:p-2 row-start-3 row-end-5 col-start-3 col-end-5 sm:row-start-[9] sm:row-end-[11] sm:col-start-1 sm:col-end-5">
              {/* Paragraf Pendukung Jual Bagasi */}
              <div className="text-xs">
                {`Hai kak ${nama ? nama : "Traveler"} 👋`}, <br />
                <br />
                Jangan lupa untuk menyiapkan tiket penerbangan yang valid.
                Dokumen tersebut akan di upload setelah formulir ini di kirim.{" "}
                <br />
                <br />
                Data kakak hanya akan kami share pada Jastiper yang berhasil
                kami verifikasi bukti pembayarannya. <br />
                <br />
                Selanjutnya kakak dapat mengontrol atau menghapus Bagasi ini
                pada halaman{" "}
                <Link
                  to="/user"
                  className=" underline hover:text-primaryBlueBold"
                >
                  Area User
                </Link>
                . <br /> <br />
                Terima kasih 😊
              </div>
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
                  <Link
                    to="/rules"
                    className="underline hover:text-primaryBlueBold"
                  >
                    Syarat &amp; Ketentuan
                  </Link>{" "}
                  yang berlaku.
                </label>
              </div>
            </div>

            {/* Box 10 Tombol dan Notification */}
            <div className="flex flex-col justify-evenly row-start-5 row-end-5 col-start-3 col-end-5 sm:row-start-[11] sm:row-end-[11] sm:col-start-1 sm:col-end-5">
              {/* Tombol Submit */}
              <button
                disabled={isCreating || !isDirty}
                className={`${
                  isCreating || !isDirty
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 hover:bg-primaryBlueBold`}
              >
                {isCreating ? "Loading..." : "Jual Bagasi"}
              </button>
              {errors?.dari?.message && (
                <Notification type="error" text={errors.dari.message} />
              )}
              {errors?.alamatDari?.message && (
                <Notification type="error" text={errors.alamatDari.message} />
              )}
              {errors?.tujuan?.message && (
                <Notification type="error" text={errors.tujuan.message} />
              )}
              {errors?.alamatTujuan?.message && (
                <Notification type="error" text={errors.alamatTujuan.message} />
              )}
              {errors?.availableKg?.message && (
                <Notification type="error" text={errors.availableKg.message} />
              )}
              {errors?.waktuBerangkat?.message && (
                <Notification
                  type="error"
                  text={errors.waktuBerangkat.message}
                />
              )}
              {errors?.waktuTiba?.message && (
                <Notification type="error" text={errors.waktuTiba.message} />
              )}
              {errors?.hargaRp?.message && (
                <Notification type="error" text={errors.hargaRp.message} />
              )}
              {errors?.telpon?.message && (
                <Notification type="error" text={errors.telpon.message} />
              )}
              {/* Success Message */}
              {/* {isSubmitSuccessful && (
              <Notification type="success" text="Permintaan berhasil" />
            )} */}
            </div>
          </form>
        </div>
      )}

      {/* FORM UPLOAD DOKUMEN */}
      {showFormUpload && (
        <FormUploadDokumen
          type="create-bagasi"
          user={user}
          dari={kotaDari}
          tujuan={kotaTujuan}
        />
      )}
      {/* JUAL BAGASI Wrapper end */}
    </>
  );
}

export default FormCreateBagasi;
