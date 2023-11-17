import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import ContentWrapper from "../../ui/ContentWrapper";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useUpdateStatusOrder } from "../../features/admin/useUpdateStatusOrder";
import { currencyFormat } from "../../utilities/formatter";
import Notification from "../../ui/Notification";
import { useGetOneOrder } from "../../features/order/useGetOneOrder";
import { useGetAllUser } from "../../features/user/useGetAllUser";

function AdminOrderStatus() {
  const { id } = useParams();
  const [status, setStatus] = useState("Ready");
  const { allUser, isLoadingAllUser } = useGetAllUser();
  const { oneOrder, isLoadingOneOrder } = useGetOneOrder();
  const { updateStatusOrder, isUpdating } = useUpdateStatusOrder();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  if (isLoadingOneOrder || isLoadingAllUser) return <Spinner />;

  const currOrder = oneOrder;
  if (!currOrder) {
    toast.error("Order ini tidak ada, cek param id");
    return navigate("/order");
  }

  // Desctructuring current User data --start
  const currUser = allUser.filter((user) => user._id === oneOrder.owner._id);
  const { dokumen: currUserDokumen } = currUser[0];
  // Desctructuring current User data --end

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
        <p>{`Owner: ${
          currOrder.owner.email ? currOrder.owner.email : currOrder.owner.nama
        }`}</p>
        <p>{`currUserDokumen.Dokumen: ${
          currUserDokumen?.length > 1
            ? `Cek dulu. Dokumen User ini terdiri dari:  ${currUserDokumen.length} dokumen`
            : currUserDokumen
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
