import { useState } from "react";
import ContentWrapper from "../../ui/ContentWrapper";

function AdminOrderStatus() {
  const [status, setStatus] = useState("Ready");
  function handleStatus(e) {
    const val = e.target.value;
    setStatus(val);
  }
  return (
    <ContentWrapper padding="p-6">
      <form
        className=" w-2/3 px-4 flex flex-col gap-4 
          lg:py-4 lg:px-2
          "
      >
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
            required=""
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
            htmlFor="berat"
            className="text-sm text-primaryBlue lg:text-xs"
          >
            Dokumen <span className="text-xs text-textColor">(text)</span>
          </label>
          <input
            type="text"
            required=""
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
          <div className="p-2 px-4 self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 cursor-pointer hover:bg-primaryBlueBold">
            <button type="submit">Update Order Status</button>
          </div>
          {/* Success Message */}
          {/* <Notification type="success" text="Permintaan berhasil" /> */}
        </div>
      </form>
    </ContentWrapper>
  );
}

export default AdminOrderStatus;
