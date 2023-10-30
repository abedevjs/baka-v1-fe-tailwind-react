import { useState } from "react";
import ContentWrapper from "../../ui/ContentWrapper";
import { useGetAllOrder } from "../../features/order/useGetAllOrder";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import { useUpdateStatusOrder } from "../../features/admin/useUpdateStatusOrder";
import { useForm } from "react-hook-form";
import { currencyFormat } from "../../utilities/formatter";
import Notification from "../../ui/Notification";

function AdminOrderStatus() {
  const [status, setStatus] = useState("Ready");
  const { order, isLoading: isLoadingOrder } = useGetAllOrder();
  const { updateStatusOrder, isUpdating } = useUpdateStatusOrder();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const { id } = useParams();

  if (isLoadingOrder) return <Spinner />;

  const currOrder = order.find((el) => el._id == id);
  if (!currOrder) {
    toast.error("Order ini tidak ada, cek param id");
    return navigate("/order");
  }

  function handleStatus(e) {
    const val = e.target.value;
    setStatus(val);
  }

  //Execute UpdateStatusOrder --start
  function onSuccess(data) {
    if (!data) return;

    updateStatusOrder({ id: id, body: data });
  }
  function onError(err) {}
  //Execute UpdateStatusOrder --end

  return (
    <ContentWrapper padding="p-6">
      {/* DESCRIPTION */}
      <div className=" mb-8">
        <h1 className=" text-lg capitalize text-center">UPDATE ORDER STATUS</h1>
        <p className=" text-base">
          Desc: Mengganti status order setelah admin cek dokumen pembayaran
        </p>
        <p className=" text-sm">1. Pastikan ID order di URL sudah ada</p>
        <p className=" text-sm">
          2. Pastikan order yang di cek status nya bukan PREPARING. Karena di
          form ini status nya yang diubah dari PREPARING ke READY
        </p>
        <p className=" text-sm">
          3. Pastikan Bukti Pembayaran valid. Nama file yg di upload user (di
          bukti pembayaran tsb) sama dengan yang di input pada form dibawah
        </p>
      </div>

      <div className=" mb-6">
        <p>{`Order id: ${currOrder._id}`}</p>
        <p>{`Status: ${currOrder.status}`}</p>
        <p>{`Dokumen: ${currOrder.dokumen}`}</p>
        <p>{`Tagihan: ${currencyFormat(currOrder.netRp)}`}</p>
        <p>{`Owner: ${currOrder.owner.email}`}</p>
        <p>{`Owner.Dokumen: ${
          currOrder.owner.dokumen.length > 1
            ? "Cek Array ini"
            : currOrder.owner.dokumen
        }`}</p>
      </div>

      {/* FORM UPDATE STATUS ORDER */}
      <form
        onSubmit={handleSubmit(onSuccess, onError)}
        className=" w-2/3 px-4 flex flex-col gap-4 
          lg:py-4 lg:px-2
          "
      >
        {/* Box Status*/}
        <div
          className="w-full py-2 px-6  flex flex-col justify-around bg-bodyBackColor rounded-lg
              lg:py-1 lg:px-3
              sm:col-end-3
              "
        >
          <label
            htmlFor="status"
            className="text-sm text-primaryBlue lg:text-xs"
          >
            Status{" "}
            <span className="text-xs text-textColor">
              (Ini sudah Ready, tidak perlu di ubah lagi)
            </span>
          </label>
          <input
            onChange={(e) => handleStatus(e)}
            type="text"
            placeholder="Ini harus Opened"
            value={status}
            id="status"
            {...register("status", { required: "Isi dokumen pembayaran" })}
            className="w-full lg:w-full text-base lg:text-sm text-center border-b-2 border-textColor outline-none bg-transparent"
          />
        </div>
        {/* Box Dokumen */}
        <div
          className="w-full py-2 px-6 flex flex-col justify-around bg-bodyBackColor rounded-lg
              lg:py-1 lg:px-3
              sm:col-end-3
              "
        >
          <label
            htmlFor="dokumen"
            className="text-sm text-primaryBlue lg:text-xs"
          >
            Dokumen <span className="text-xs text-textColor">(text)</span>
          </label>
          <input
            type="text"
            id="dokumen"
            {...register("dokumen")}
            className="w-full lg:w-full text-base lg:text-sm text-center border-b-2 border-textColor outline-none bg-transparent"
          />
        </div>

        {/* Box Tombol n Messages */}
        <div
          className="w-full py-2 px-6  flex flex-col justify-around 
              lg:py-1 lg:px-3
              "
        >
          {/* Tombol Submit */}
          <button
            disabled={isUpdating}
            className="p-2 px-4 self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold"
          >
            {isUpdating ? "Updating..." : "Update Order Status"}
          </button>
          {/* Success Message */}
          {errors?.dokumen?.message && (
            <Notification type="error" text={errors.dokumen.message} />
          )}
        </div>
      </form>
    </ContentWrapper>
  );
}

export default AdminOrderStatus;
