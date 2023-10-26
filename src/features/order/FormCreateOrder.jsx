import { useEffect, useState } from "react";
import { useUpdateUser } from "../user/useUpdateUser";
import { useCreateOrder } from "./useCreateOrder";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { currencyFormat } from "../../utilities/formatter";
import { Link } from "react-router-dom";
import Notification from "../../ui/Notification";
import { FormUploadDokumen } from "../../ui/FormUploadDokumen";

const MAX_LENGTH_CATATAN = import.meta.env.VITE_MAX_LENGTH_CATATAN;
const ORDER_TAX = import.meta.env.VITE_ORDER_TAX;

function FormCreateOrder({ id, hargaRp, availableKg, user }) {
  const [totalNet, setTotalNet] = useState(0);
  const [beratOrder, setBeratOrder] = useState(0);
  const [showFormOrder, setShowFormOrder] = useState(true);
  const [showFormUpload, setShowFormUpload] = useState(false);

  const { updateUser, isUpdating } = useUpdateUser();
  const { createOrder, isCreating } = useCreateOrder();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isDirty } = formState;

  //Agar beratKg dan totalHarga ter print dynamically --start
  useEffect(
    function () {
      const totalBiayaRp = beratOrder * hargaRp;
      const totalAdminRp = totalBiayaRp * ORDER_TAX;
      const total = totalBiayaRp + totalAdminRp;

      setTotalNet(total);
    },
    [beratOrder, hargaRp]
  );
  //Agar beratKg dan totalHarga ter print dynamically --end

  function handleChange(e) {
    setBeratOrder(e.target.value);
  }

  // Executing createOrder DAN updateUsertelpon (jika ada) dari useCreateOrder() dan useUpdateUser() --start
  function onSuccess(data) {
    if (!data) return;

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

    createOrder(
      { id, body: data },
      {
        onSuccess: () => {
          reset();
          setShowFormOrder(false);
          setShowFormUpload(true);
        },
      }
    );
  }
  function onError() {}
  // Executing createOrder dari useCreateOrder() dan useUpdateUser() --end

  return (
    <>
      {/* FORM ORDER */}
      {showFormOrder && (
        <div className="w-full mx-auto mb-8 py-8 px-4 font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
          {/* Order Content Container */}
          <form
            onSubmit={handleSubmit(onSuccess, onError)}
            className=" px-4 grid grid-cols-4 grid-rows-5 gap-4  lg:py-4 lg:px-2 sm:grid-cols-4 sm:grid-rows-9
      "
          >
            {/* Box 1 Title */}
            <div className="w-full py-2 px-6 col-start-1 col-end-3 flex justify-center bg-bodyBackColor rounded-lg  lg:py-1 lg:px-3 sm:col-end-5 ">
              <span className="self-center text-xl capitalize font-title">
                Detail Order:
              </span>
            </div>
            {/* Box 2 Kg */}
            <div
              onChange={handleChange}
              className="w-full py-2 px-6 col-start-1 col-end-2 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg lg:py-1 lg:px-3 sm:col-end-3 "
            >
              <label
                htmlFor="jumlahKg"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Berat <span className="text-xs text-textColor">(Kg)</span>
              </label>
              <input
                // onClick={foo()}
                // onChange={foo()}
                // value={beratOrder}
                type="number"
                min={1}
                max={availableKg}
                id="jumlahKg"
                {...register("jumlahKg", {
                  required: "Mohon isi jumlah bagasi yang ingin di order kak",
                })}
                disabled={isCreating}
                className="w-[50%] lg:w-full text-base lg:text-sm text-center border-b-2 border-textColor outline-none bg-transparent"
              />
            </div>
            {/* Box 3 Biaya */}
            <div className="w-full py-2 px-6 col-start-2 col-end-3 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg  lg:py-1 lg:px-3 sm:row-start-2 sm:col-start-3 sm:col-end-5 ">
              <label
                htmlFor="biaya"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Total Biaya{" "}
                <span className="text-xs text-textColor">(Incl. Tax 3%) </span>
              </label>
              <span className="text-base lg:text-sm">
                {currencyFormat(totalNet)}
              </span>
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
                name="isi"
                id="isi"
                {...register("isi", {
                  required: "Mohon dipilih isi kirimannya kak",
                })}
                disabled={isCreating}
                className="p-1 text-base lg:text-sm bg-transparent border-b-2 border-textColor outline-none"
              >
                <option className="text-left text-sm lg:text-xs" value="">
                  Pilih Isi Kiriman
                </option>
                <option
                  className="text-left text-sm lg:text-xs"
                  value="Makanan"
                >
                  Makanan
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
            {user.telpon ? (
              ""
            ) : (
              <div className="w-full py-2 px-6 col-start-2 col-end-3 row-start-3 flex flex-col justify-around bg-bodyBackColor rounded-lg  lg:py-1 lg:px-3 sm:col-start-3 sm:col-end-5 ">
                <label
                  htmlFor="telpon"
                  className="text-sm text-primaryBlue sm:text-xs"
                >
                  Nomor WhatsApp
                </label>
                <input
                  type="text"
                  minLength={8}
                  maxLength={15}
                  id="telpon"
                  {...register("telpon", {
                    required:
                      "Agar mudah dihubungi, sertakan nomor Wa nya ya kak ",
                  })}
                  disabled={isCreating}
                  className="w-[80%] lg:w-full text-base lg:text-sm text-left border-b-2 border-textColor outline-none bg-transparent"
                />
              </div>
            )}
            {/* Box 7 Catatan */}
            <div
              className="w-full py-2 px-6 col-start-1 col-end-3 row-start-4 flex flex-col space-y-2 bg-bodyBackColor rounded-lg 
      lg:py-1 lg:px-3
      sm:col-end-5 sm:space-y-0 sm:justify-around
      "
            >
              <label
                htmlFor="catatan"
                className="text-sm text-primaryBlue lg:text-xs"
              >
                Catatan Order{" "}
                <span className="text-xs text-textColor">
                  (Pesan untuk Traveler)
                </span>
              </label>
              <textarea
                name="catatan"
                rows={2}
                maxLength={MAX_LENGTH_CATATAN}
                className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
                placeholder="Tidak wajib diisi..."
                defaultValue={""}
                id="catatan"
                {...register("catatan")}
                disabled={isCreating}
              />
            </div>
            {/* Box 8 Instruksi */}
            <div
              className="w-full p-4 col-start-3 col-end-5 row-start-1 row-end-5 flex flex-col justify-between text-slate-50 bg-primaryBlue rounded-lg
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
            {/* Box 9 Tombol n Messages */}
            <div
              className="w-full py-2 px-6 col-start-1 col-end-5 row-start-5 flex flex-col justify-around 
          lg:py-1 lg:px-3
          sm:row-start-[9] sm:col-start-1 sm:col-end-5 
          "
            >
              {/* Tombol Submit */}
              <button
                disabled={isCreating || !isDirty}
                className={`${
                  !isDirty ? "cursor-not-allowed" : "cursor-pointer"
                } p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 hover:bg-primaryBlueBold`}
              >
                {isCreating ? "Loading..." : "Beli Bagasi"}
              </button>
              {errors?.jumlahKg?.message && (
                <Notification type="error" text={errors.jumlahKg.message} />
              )}
              {errors?.isi?.message && (
                <Notification type="error" text={errors.isi.message} />
              )}
              {errors?.catatan?.message && (
                <Notification type="error" text={errors.catatan.message} />
              )}
              {errors?.telpon?.message && (
                <Notification type="error" text={errors.telpon.message} />
              )}
              {/* Success Message */}
              {/* <Notification type="success" text="Permintaan berhasil" /> */}
            </div>
          </form>
        </div>
      )}
      {/* Akhir Order Container */}

      {/* FORM UPLOAD DOKUMEN */}
      {showFormUpload && (
        <FormUploadDokumen type="create-order" user={user} netRp={totalNet} />
      )}
    </>
  );
}

export default FormCreateOrder;
