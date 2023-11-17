import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import ContentWrapper from "../../ui/ContentWrapper";
import { useUpdateStatusBagasi } from "../../features/admin/useUpdateStatusBagasi";
import Notification from "../../ui/Notification";
import Spinner from "../../ui/Spinner";
import { useGetOneBagasi } from "../../features/bagasi/useGetOneBagasi";
import { useGetAllUser } from "../../features/user/useGetAllUser";

function AdminBagasiStatus() {
  const { id } = useParams();
  const [status, setStatus] = useState("Opened");
  const { allUser, isLoadingAllUser } = useGetAllUser();
  const { oneBagasi, isLoadingOneBagasi } = useGetOneBagasi();
  const { updateStatusBagasi, isUpdating } = useUpdateStatusBagasi();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  if (isLoadingOneBagasi || isLoadingAllUser) return <Spinner />;

  if (!oneBagasi) {
    toast.error("Bagasi ini tidak ada, cek param id");
    return navigate("/list-bagasi");
  }

  // Desctructuring current User data --start
  const currUser = allUser.filter((user) => user._id === oneBagasi.owner._id);
  const { nama, email, dokumen: currUserDokumen } = currUser[0];
  // Desctructuring current User data --end

  function handleStatus(e) {
    const val = e.target.value;
    setStatus(val);
  }

  //Executing updateStatusBagasi --start
  function onSuccess(data) {
    if (!data) return;

    updateStatusBagasi({ id: id, body: data });
  }
  function onError() {}
  //Executing updateStatusBagasi --end

  return (
    <ContentWrapper padding="p-6">
      {/* Description */}
      <div className=" mb-8">
        <h1 className=" text-lg capitalize text-center">
          UPDATE BAGASI STATUS
        </h1>
        <p className=" text-base">
          Desc: Mengganti status bagasi setelah admin cek dokumen penerbangan
        </p>
        <p className=" text-sm">1. Pastikan ID bagasi di URL sudah ada</p>
        <p className=" text-sm">
          2. Pastikan bagasi yang di cek status nya bukan OPENED. Karena di form
          ini status nya Opened
        </p>
        <p className=" text-sm">
          3. Pastikan Tiket Traveler valid. Nama file yg di upload user (di
          tiket tsb) sama dengan yang di input pada form dibawah
        </p>
      </div>

      {/* Detail Bagasi */}
      <div className=" mb-8">
        <h1 className=" text-lg capitalize text-center">Detail bagasi:</h1>
        <p className=" text-sm">{`Id: ${oneBagasi._id}`}</p>
        <p className=" text-sm">{`Dari: ${oneBagasi.dari}`}</p>
        <p className=" text-sm">{`Tujuan: ${oneBagasi.tujuan}`}</p>
        <p className=" text-sm">{`Status: ${oneBagasi.status}`}</p>
        <p className=" text-sm">{`Pesawat: ${oneBagasi.pesawat}`}</p>
        <p className=" text-sm">{`Owner: ${email ? email : nama}`}</p>
        <p className=" text-sm">{`Dokumen: ${oneBagasi.dokumen}`}</p>
        <p className=" text-sm">{`Dokumen: ${
          currUserDokumen?.length > 1
            ? `Cek dulu. Dokumen User ini terdiri dari:  ${currUserDokumen.length} dokumen`
            : currUserDokumen
        }`}</p>
        {/* <p className=" text-sm">{`Owner.dokumen: ${user.dokumen}`}</p> */}
      </div>

      {/* FORM UPDATE STATUS BAGASI */}
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
              (Ini sudah Opened, tidak perlu di ubah lagi)
            </span>
          </label>
          <input
            onChange={(e) => handleStatus(e)}
            type="text"
            placeholder="Ini harus Opened"
            value={status}
            id="status"
            {...register("status")}
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
            Nama Dokumen{" "}
            <span className="text-xs text-textColor">(Tiket Penerbangan)</span>
          </label>
          <input
            type="text"
            id="dokumen"
            {...register("dokumen")}
            className="w-full lg:w-full text-base lg:text-sm text-center border-b-2 border-textColor outline-none bg-transparent"
          />
        </div>
        {/* Box Pesawat */}
        <div
          className="w-full py-2 px-6 flex flex-col justify-around bg-bodyBackColor rounded-lg
                  lg:py-1 lg:px-3
                  sm:col-end-3
                  "
        >
          <label
            htmlFor="pesawat"
            className="text-sm text-primaryBlue lg:text-xs"
          >
            Nama Pesawat{" "}
            <span className="text-xs text-textColor">(Maskapai)</span>
          </label>
          <input
            type="text"
            id="pesawat"
            {...register("pesawat", {
              required: "Isi nama maskapai. Lihat dokumen tiket",
            })}
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
          <button className="p-2 px-4 self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
            {isUpdating ? "Updating..." : "Update Bagasi Status"}
          </button>
          {/* Success Message */}
          {errors?.pesawat?.message && (
            <Notification type="error" text={errors.pesawat.message} />
          )}
        </div>
      </form>
    </ContentWrapper>
  );
}

export default AdminBagasiStatus;
