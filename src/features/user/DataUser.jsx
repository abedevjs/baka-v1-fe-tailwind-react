import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGetUser } from "./useGetUser";
import { useUpdateUser } from "./useUpdateUser";
import Spinner from "../../ui/Spinner";
import Option from "../../ui/Option";

function DataUser() {
  const [showOption, setShowOption] = useState(false);
  const { user, isLoading: isLoadingUser } = useGetUser();
  const { register, handleSubmit, formState } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();

  if (isLoadingUser) return <Spinner />;

  const { isDirty } = formState;
  const { nama, email, telpon, rekeningNomor, rekeningBank } = user;

  //Executing updateUser --START
  function onSuccess(data) {
    //todo GuardClause 1. Jika rekeningNomor tidak di update atau bukan angka
    if (data.rekeningNomor == "Belum ada" || isNaN(Number(data.rekeningNomor)))
      return toast.error(
        "Input nomor rekening dengan angka dan tanpa spasi kak"
      );

    //todo GuardClause 2. Jika rekeningBank tidak di update
    if (!data.rekeningBank && !rekeningBank)
      return toast.error("Mohon pilih Nama Bank nya ya kak");

    //todo GuardClause 3. Jika telpon tidak di update atau bukan angka
    if (
      !data.telpon ||
      data.telpon == "Belum ada" ||
      isNaN(Number(data.telpon))
    )
      return toast.error("Input nomor WhatsApp dengan angka saja ya kak");

    //todo GuardClause 4. Jika semua data tetap sama, reject
    if (
      data.nama == nama &&
      data.telpon == telpon &&
      data.rekeningNomor == rekeningNomor &&
      data.rekeningBank == rekeningBank
    )
      return;

    //todo GuardClause 5. Jika User sudah ada rekeningBank trus otak-atik list bank, trus ngga milih bank (value = ''), data form nya di re-write ke user.rekeningBank
    if (rekeningBank && !data.rekeningBank) {
      // return;
      data = { ...data, rekeningBank: rekeningBank };
    }

    //Execute Update User Data
    updateUser(data, {
      onSuccess: () => {
        setShowOption(false);
      },
    });
  }
  function onError() {}
  //Executing updateUser --END

  function handleClick() {
    setShowOption((currentState) => !currentState);
  }

  return (
    <>
      {/* DATA USER Wrapper */}
      <div className="w-full mb-12 px-4 lg:w-full lg:px-0">
        {/* DATA USER GRID */}
        <form
          onSubmit={handleSubmit(onSuccess, onError)}
          className="p-4 grid grid-cols-2 grid-rows-3 gap-2 bg-bodyBackColor rounded-lg lg:grid-rows-3 sm:grid-rows-6"
        >
          {/* Box 1 Nama */}
          <div className="w-full p-4 col-start-1 col-end-2 flex flex-col bg-secondaryYellowTint rounded-lg sm:row-start-1 sm:col-start-1 sm:col-end-3">
            <label htmlFor="nama" className="text-xs text-primaryBlue">
              Nama
            </label>
            <input
              type="text"
              minLength={5}
              maxLength={35}
              id="nama"
              {...register("nama")}
              defaultValue={nama}
              className="text-sm bg-transparent border-b-2 border-textColor outline-none"
            />
          </div>
          {/* Box 2 Email */}
          <div className="w-full p-4 col-start-2 flex flex-col bg-secondaryYellowTint rounded-lg sm:row-start-2 sm:col-start-1 sm:col-end-3">
            <span className="text-xs text-primaryBlue">Email</span>
            <span className="text-sm">
              {email ? email : "Email tidak tersedia"}
            </span>
          </div>
          {/* Box 3 Rekening Nomor */}
          <div className="w-full p-4 col-start-1 col-end-2 flex items-center justify-between bg-secondaryYellowTint rounded-lg sm:row-start-3 sm:col-start-1 sm:col-end-3">
            {/* Label-Input Rekening Nomor */}
            <div className="w-1/2 flex flex-col sm:w-full">
              <label
                htmlFor="rekeningNomor"
                className="text-xs text-primaryBlue"
              >
                Nomor Rekening
              </label>
              <input
                type="text"
                minLength={6}
                maxLength={20}
                id="rekeningNomor"
                {...register("rekeningNomor")}
                defaultValue={rekeningNomor ? rekeningNomor : "Belum ada"}
                className="border-b-2 border-textColor text-sm bg-transparent outline-none"
              />
            </div>
          </div>
          {/* Box 4 Rekening Bank */}
          <div className="w-full p-4 col-start-2 flex items-center justify-between bg-secondaryYellowTint rounded-lg sm:row-start-4 sm:col-start-1 sm:col-end-3">
            {/* Label-Input Rekening Bank */}
            <div className=" w-full flex flex-col sm:w-full">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="rekeningBank"
                  className="text-xs text-primaryBlue "
                >
                  Nama Bank
                </label>
                <div
                  onClick={handleClick}
                  className="p-1 text-xs text-white text-center opacity-80 rounded-md bg-slate-700 duration-300 cursor-pointer hover:opacity-100"
                >
                  {!showOption ? "Lihat" : "Tutup"} Daftar Bank
                </div>
              </div>

              {!showOption ? (
                <span className=" w-1/2 text-sm">
                  {rekeningBank ? rekeningBank : "Belum ada"}
                </span>
              ) : (
                <select
                  name="tujuan"
                  id="rekeningBank"
                  {...register("rekeningBank")}
                  className="p-1 text-sm bg-transparent border-b-2 border-textColor outline-none"
                >
                  <Option
                    feature="nama-bank"
                    className="text-left text-sm sm:text-xs"
                  />
                </select>
              )}
              {/* <div
                  onClick={handleClick}
                  className="p-2 px-2 sm:p-1 sm:px-1 sm:items-end text-xs text-white text-center opacity-80 rounded-md bg-slate-700 duration-300 cursor-pointer hover:opacity-100"
                >
                  Lihat Daftar Bank
                </div> */}
            </div>
          </div>
          {/* Box 5 WA */}
          <div className="w-full p-4 col-start-1 col-end-2 flex items-center justify-between bg-secondaryYellowTint rounded-lg sm:row-start-5 sm:col-start-1 sm:col-end-3">
            {/* Label-Input WhatsApp */}
            <div className="w-1/2 flex flex-col sm:w-full">
              <label htmlFor="telpon" className="text-xs text-primaryBlue">
                Nomor&nbsp;WhatsApp
              </label>
              <input
                type="text"
                minLength={10}
                maxLength={15}
                id="telpon"
                {...register("telpon")}
                defaultValue={telpon ? telpon : "Belum ada"}
                className="border-b-2 border-textColor text-sm bg-transparent outline-none"
              />
            </div>
          </div>
          {/* Tombol Submit */}
          <div className="p-2 px-2 flex justify-center items-center bg-secondaryYellowTint rounded-lg sm:row-start-6 sm:col-start-1 sm:col-end-3">
            <button
              disabled={isUpdating || !isDirty}
              className={`${
                isUpdating || !isDirty ? "cursor-not-allowed" : "cursor-pointer"
              } p-2 px-4 text-xs text-white text-center rounded-xl bg-primaryBlue duration-300 hover:bg-primaryBlueBold`}
            >
              {isUpdating ? "Updating..." : "Update Data User"}
            </button>
          </div>
        </form>
        {/* DATA USER GRID end */}
      </div>
      {/* DATA USER Wrapper end */}
    </>
  );
}

export default DataUser;
