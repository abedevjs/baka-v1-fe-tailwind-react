import { Link } from "react-router-dom";
import Notification from "../../ui/Notification";
import { FormUploadDokumen } from "../../ui/FormUploadDokumen";
import { useDeleteOrder } from "./useDeleteOrder";
import { useForm } from "react-hook-form";
import { useUpdateOrder } from "./useUpdateOrder";
import { useEffect, useState } from "react";
import { currencyFormat } from "../../utilities/formatter";
import toast from "react-hot-toast";

const MAX_LENGTH_CATATAN = import.meta.env.VITE_MAX_LENGTH_CATATAN;
const ORDER_TAX = import.meta.env.VITE_ORDER_TAX;

function FormUpdateOrder({ id, orderDetail, availableKg, hargaRp, user }) {
  //Destructuring Order Detail prop
  const { status, jumlahKg, isi, biayaRp, adminFeeRp, netRp, catatan } =
    orderDetail;

  const [jumlahBagasi, setJumlahBagasi] = useState(jumlahKg);
  const [subTotalAmount, setSubTotalAmount] = useState(biayaRp);
  const [taxAmount, setTaxAmount] = useState(adminFeeRp);
  const [totalAmount, setTotalAmount] = useState(netRp);

  const { updateOrder, isUpdating } = useUpdateOrder();
  const { deleteOrder, isDeleting } = useDeleteOrder();

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isDirty } = formState;

  //Agar kalkulasi berat bagasi dan biaya2 ter print dynamically di ui --start
  useEffect(
    function () {
      const subTotal = Number(jumlahBagasi) * hargaRp;
      const taxFee = subTotal * ORDER_TAX;
      const total = subTotal + taxFee;

      setSubTotalAmount(subTotal);
      setTaxAmount(taxFee);
      setTotalAmount(total);
    },
    [hargaRp, jumlahBagasi, jumlahKg]
  );

  function handleDelete() {
    deleteOrder(id);
  }

  //Executing update order
  function onSuccess(data) {
    if (!isDirty) return;
    if (!data) return;

    if (status == "Ready") {
      toast.error(
        "Order kk sudah terbayar. Untuk update, silahkan buat order baru lagi ya kak"
      );
      return;
    }

    updateOrder({ id: id, body: data });
  }
  function onError(err) {}

  return (
    <>
      {/* ORDER */}
      <div className="w-full mb-8 py-8 px-4 mx-auto font-text text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0">
        {/* Order Content Container */}
        <form
          onSubmit={handleSubmit(onSuccess, onError)}
          className="
        px-4 grid grid-cols-4 grid-rows-6 gap-4
        sm:py-4 sm:grid-rows-9 sm:gap-2
        "
        >
          {/* Box 1 Title */}
          <div
            className="
            w-full py-2 px-6 col-start-1 col-end-3 row-start-1 flex items-center justify-evenly bg-bodyBackColor rounded-lg
            sm:px-4 sm:col-end-5 sm:flex-col sm:space-y-2 
            "
          >
            <span className="text-xl capitalize font-title">Detail Order:</span>
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
              src={`/svg/${status.toLowerCase()}.svg`}
              className="w-12 h-auto lg:w-8 sm:w-6"
              alt={status}
            />
            {/* Content Box Status */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-primaryBlue lg:text-xs">
                Status
              </span>
              <span className="text-base lg:text-sm sm:text-xs">{status}</span>
            </div>
          </div>

          {/* Box 3 Kg */}
          <div
            onChange={(e) => setJumlahBagasi(e.target.value)}
            className="
            w-full py-2 px-6 col-start-1 col-end-2 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg
            sm:px-4 sm:row-start-3 sm:col-end-3
            "
          >
            <label htmlFor="jumlahKg" className="text-sm text-primaryBlue">
              Berat <span className="text-xs text-textColor">(Kg)</span>
            </label>
            <input
              type="number"
              min={1}
              max={availableKg}
              id="jumlahKg"
              {...register("jumlahKg")}
              disabled={status !== "Preparing"}
              defaultValue={jumlahBagasi}
              className="w-[50%] text-base lg:text-sm sm:text-xs text-center border-b-2 border-textColor outline-none bg-transparent"
            />
          </div>

          {/* Box 4 Isi */}
          <div
            className="
            w-full py-2 px-6 col-start-2 col-end-3 row-start-2 flex flex-col justify-around bg-bodyBackColor rounded-lg
            sm:px-4 sm:row-start-3 sm:col-start-3 sm:col-end-5
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
              id="isi"
              {...register("isi")}
              disabled={["Delivered", "Canceled"].includes(status)}
              defaultValue={isi}
              className="p-1 text-base lg:text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
            >
              <option className="text-left text-sm lg:text-xs" value="">
                Pilih Isi Kiriman
              </option>
              <option className="text-left text-sm lg:text-xs" value="Makanan">
                Makanan
              </option>
              <option className="text-left text-sm lg:text-xs" value="Pakaian">
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

          {/* Box 5 Biaya -Biaya */}
          <div
            className="
            w-full py-2 px-6 col-start-1 col-end-3 row-start-3 flex justify-around bg-bodyBackColor rounded-lg
            lg:space-x-2
            sm:px-4 sm:row-start-4 sm:col-start-1 sm:col-end-5 sm:flex-col sm:space-x-2
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
                  {currencyFormat(subTotalAmount)}
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Tax <span className="text-xs text-textColor">(3%)</span>
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {currencyFormat(taxAmount)}
                </span>
              </div>
              <div className="flex flex-col justify-evenly">
                <span className="text-sm text-primaryBlue lg:text-xs">
                  Total Biaya
                </span>
                <span className="text-base lg:text-sm sm:text-xs">
                  {currencyFormat(totalAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* Box 6 Catatan */}
          <div
            className="
            w-full py-2 px-6 col-start-1 col-end-3 row-start-4 flex flex-col space-y-2 bg-bodyBackColor rounded-lg
            sm:px-4 sm:row-start-5 sm:col-end-5
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
              id="catatan"
              {...register("catatan")}
              className="p-2 w-full text-sm lg:text-xs border-2 border-textColor bg-transparent outline-none rounded-lg"
              placeholder="Tidak wajib diisi..."
              defaultValue={catatan}
              disabled={["Delivered", "Canceled"].includes(status)}
            />
          </div>

          {/* Box 7 Instruksi */}
          <div
            className="
            w-full p-4 col-start-3 col-end-5 row-start-2 row-end-6 flex flex-col justify-between bg-slate-100 rounded-lg 
            lg:p-2
            sm:row-start-[6] sm:row-end-[9] sm:col-start-1
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

          {/* Box 8 Tombol n Messages */}
          <div
            className="
            w-full py-2 px-6 col-start-1 col-end-5 row-start-6 flex flex-col justify-around
            sm:row-start-[9] sm:col-start-1 sm:col-end-5 sm:space-y-2
            "
          >
            {/* Tombol Submit */}
            <button
              disabled={isUpdating || !isDirty}
              className={`${
                !isDirty ? "cursor-not-allowed" : "cursor-pointer"
              } p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 hover:bg-primaryBlueBold`}
            >
              {isUpdating ? "Mengirim..." : "Update Order"}
            </button>
            {/* Notify Message */}
            {/* <Notification type="error" text="Permintaan gagal" /> */}
          </div>
        </form>
        {status == "Preparing" && (
          <FormUploadDokumen
            type="update-order"
            user={user}
            netRp={totalAmount}
          />
        )}
      </div>{" "}
      {/* Akhir Order Container */}
      <button
        onClick={handleDelete}
        className="w-1/4 sm:w-full mb-2 p-2 px-2 block mx-auto text-center text-sm text-white rounded-xl bg-red-500 duration-300 cursor-pointer hover:opacity-80"
        disabled={isDeleting}
      >
        {isDeleting ? "Menghapus..." : "Hapus Order"}
      </button>
    </>
  );
}

export default FormUpdateOrder;
