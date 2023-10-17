import { useQueryClient } from "@tanstack/react-query";
import Notification from "../../ui/Notification";
import { useGetUser } from "./useGetUser";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import Spinner from "../../ui/Spinner";

function DataUser() {
  const { user, isLoading } = useGetUser();
  const { register, handleSubmit, reset } = useForm();
  const { updateUser, isUpdating } = useUpdateUser();

  if (isLoading) return <Spinner />;

  const { nama, email } = user;
  //Executing updateUser --START
  function onSuccess(data) {
    // console.log(isNaN(Number(data.telpon)));
    if (
      !data.telpon ||
      data.telpon == user.telpon ||
      data.telpon == "Belum ada" ||
      isNaN(Number(data.telpon))
    )
      return;
    updateUser(data);
  }
  function onError() {}
  //Executing updateUser --END

  return (
    <>
      {/* DATA USER Wrapper */}
      <div className="w-1/2 mb-12 px-4 lg:w-full lg:px-0">
        {/* DATA USER GRID */}
        <div className="p-4 grid grid-cols-2 grid-rows-3 gap-2 bg-bodyBackColor rounded-lg sm:p-2">
          {/* Box 1 Nama */}
          <div className="w-full p-4 col-start-1 col-end-3 flex flex-col bg-secondaryYellowTint rounded-lg sm:p-2">
            <span className="text-xs text-primaryBlue">Nama</span>
            <span className="text-sm">{nama}</span>
          </div>
          {/* Box 2 Email */}
          <div className="w-full p-4 col-start-1 col-end-3 row-start-2 flex flex-col bg-secondaryYellowTint rounded-lg sm:p-2">
            <span className="text-xs text-primaryBlue">Email</span>
            <span className="text-sm">{email}</span>
          </div>
          {/* Box 3 WA */}
          <form
            onSubmit={handleSubmit(onSuccess, onError)}
            className="w-full p-4 row-start-3 col-start-1 col-end-3 flex items-center justify-between bg-secondaryYellowTint rounded-lg sm:p-2"
          >
            {/* Label-Input WhatsApp */}
            <div className="w-1/3 flex flex-col">
              <label htmlFor="telpon" className="text-xs text-primaryBlue">
                Nomor&nbsp;WhatsApp
              </label>
              <input
                type="text"
                minLength={10}
                maxLength={15}
                defaultValue={user.telpon ? user.telpon : "Belum ada"}
                id="telpon"
                {...register("telpon")}
                className="border-b-2 border-textColor text-sm bg-transparent outline-none"
              />
            </div>
            {/* Notification */}
            {/* <Notification type="success" text="berhasil!" /> */}
            {/* Tombol Submit */}
            <button
              disabled={isUpdating}
              className="p-2 px-2 sm:p-1 sm:px-1 sm:items-end shadow-sm justify-self-center self-center text-xs text-white text-center opacity-80 rounded-md bg-slate-700 duration-300 cursor-pointer hover:opacity-100"
            >
              {isUpdating ? "Loading..." : "Update WhatsApp"}
            </button>
          </form>
        </div>{" "}
        {/* DATA USER GRID end */}
      </div>{" "}
      {/* DATA USER Wrapper end */}
    </>
  );
}

export default DataUser;
