import Notification from "../../ui/Notification";

function DataUser() {
  return (
    <>
      {/* DATA USER Wrapper */}
      <div className="w-1/2 mb-12 px-4 lg:w-full lg:px-0">
        {/* DATA USER GRID */}
        <div className="p-4 grid grid-cols-2 grid-rows-3 gap-2 bg-bodyBackColor rounded-lg sm:p-2">
          {/* Box 1 Nama */}
          <div className="w-full p-4 col-start-1 col-end-3 flex flex-col bg-secondaryYellowTint rounded-lg sm:p-2">
            <span className="text-xs text-primaryBlue">Nama</span>
            <span className="text-sm">Muhammad Akbar</span>
          </div>
          {/* Box 2 Email */}
          <div className="w-full p-4 col-start-1 col-end-3 row-start-2 flex flex-col bg-secondaryYellowTint rounded-lg sm:p-2">
            <span className="text-xs text-primaryBlue">Email</span>
            <span className="text-sm">bonsoir.abe@gmail.com</span>
          </div>
          {/* Box 3 WA */}
          <form className="w-full p-4 row-start-3 col-start-1 col-end-3 flex items-center justify-between bg-secondaryYellowTint rounded-lg sm:p-2">
            {/* Label-Input WhatsApp */}
            <div className="w-1/3 flex flex-col">
              <label htmlFor="whatsapp" className="text-xs text-primaryBlue">
                Nomor&nbsp;WhatsApp
              </label>
              <input
                type="text"
                minLength={10}
                maxLength={15}
                defaultValue={"01006944643"}
                className="border-b-2 border-textColor text-sm bg-transparent outline-none"
              />
            </div>
            {/* Notification */}
            <Notification type="success" text="berhasil!" />
            {/* Tombol Submit */}
            <div className="p-2 px-2 sm:p-1 sm:px-1 sm:items-end justify-self-center self-center text-xs text-white text-center opacity-80 rounded-md bg-slate-700 duration-300 cursor-pointer hover:opacity-100">
              <button type="submit">Update WhatsApp</button>
            </div>
          </form>
        </div>{" "}
        {/* DATA USER GRID end */}
      </div>{" "}
      {/* DATA USER Wrapper end */}
    </>
  );
}

export default DataUser;
