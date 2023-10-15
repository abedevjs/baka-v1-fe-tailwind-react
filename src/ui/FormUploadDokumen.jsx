import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUploadDokumen } from "../features/upload/useUploadDokumen";
import toast from "react-hot-toast";
import { currencyFormat } from "../utilities/formatter";

const MULTER_MAX_UPLOAD = import.meta.env.VITE_MULTER_MAX_UPLOAD;
const MAX_DOCUMENT = import.meta.env.VITE_MAX_DOCUMENT;
const fileType = ["application/pdf", "image/png", "image/jpg", "image/jpeg"];

export function FormUploadDokumen({
  type = "",
  user,
  dari,
  tujuan,
  netRp,
  dokumen,
}) {
  const { id } = useParams();
  const paramId = type == "create-order" || type == "create-bagasi" ? "" : id;
  // const paramId = id ? id : "";
  const navigate = useNavigate();
  const { uploadDokumen, isUploading } = useUploadDokumen();
  const { register, handleSubmit, reset, formState } = useForm();
  const { isDirty } = formState;

  //Execute uploadDokumen -- start
  function onSuccess(data) {
    if (data.dokumen.length == 0) return;

    //todo Jika user sdh kebanyakan upload document sebelumnya, reject
    if (user.dokumen.length >= MAX_DOCUMENT) {
      //* Guard Clause yg ini tdk ada di backend
      toast.error(
        "Dokumen sebelumnya yg pernah di upload sedang periksa. Hasilnya akan segera kami infokan ya kak 🤗"
      );
      return;
    }

    //todo jika jual bagasi User must have createBagasi before
    if (type == "bagasi" && user.bagasi.length == 0) {
      toast.error(
        `Sebelum upload dokumen, isi formulir 'Jual-Bagasi' dulu ya kak 🙁`
      );
      return;
    }

    //todo jika beli bagasi User must have createOrder before
    if (type == "order" && user.order.length == 0) {
      toast.error(
        `Sebelum upload dokumen, isi formulir 'Beli-Bagasi' dulu ya kak 🙁`
      );
      return;
    }

    //todo file type must be ["application/pdf", "image/png", "image/jpg", "image/jpeg"]
    if (!fileType.includes(data.dokumen[0].type)) {
      toast.error("Upload dokumen dengan tipe PDF atau gambar saja kk 🙁");
      return;
    }

    //todo file must not exceed 5mb
    if (data.dokumen[0].size > MULTER_MAX_UPLOAD) {
      toast.error("Kapasitas dokumen tidak lebih dari 5mb ya kak 🙁");
      return;
    }

    const form = new FormData();
    form.append("dokumen", data.dokumen[0]);

    uploadDokumen(
      { id: paramId, body: form },
      {
        onSuccess: () => {
          if (type == "create-bagasi") navigate("/list-bagasi");
          if (type == "create-order") navigate("/order");
          if (type == "update-bagasi" || type == "update-order")
            navigate("/user");
        },
      }
    );
  }
  function onError(err) {}
  //Execute uploadDokumen -- end

  return (
    <div
      className={`${
        type == "create-bagasi" || type == "create-order"
          ? "w-full py-8 px-4 mb-8 mx-auto text-textColor bg-secondaryYellow rounded-lg shadow-md lg:px-0"
          : ""
      }`}
    >
      <form
        onSubmit={handleSubmit(onSuccess, onError)}
        action=""
        className="px-4 grid grid-cols-4 grid-rows-2 gap-1 font-text bg-bodyBackColor rounded-lg lg:mx-4 lg:pb-4"
      >
        {/* Box 1 Upload Instruksi */}
        <div
          className="w-full p-4 col-start-1 col-end-5 row-start-1 flex flex-col justify-between  
                lg:row-end-[9] lg:col-start-1 lg:col-end-5
                sm:p-2
                "
        >
          {/* Paragraf Pendukung Jual Bagasi */}
          <Instruksi type={type} dari={dari} tujuan={tujuan} totalNet={netRp} />
          {/* Paragraf instruksi selanjutnya untuk Traveler. Isinya: <br />
          1. Tiket akan di periksa. <br />
          2. Jika valid akan di list. Jika tdk valid minta register lg. <br />
          3. Alamat Gudang Baka utk mengambil titipan Jastiper. */}
        </div>
        {/* Box 2 Upload Document */}
        <div
          className="w-full py-4 px-4 col-start-1 col-end-3 row-start-2 flex justify-around   
            lg:col-end-5
            sm:p-2 sm:flex-col
            "
        >
          {/* Icon */}
          <img
            src="/svg/plane-ticket.svg"
            className="w-12 sm:w-10 sm:self-center"
            alt=""
          />
          {/* Label + Input Box */}
          <div className="w-[80%] flex flex-col justify-between sm:w-auto">
            <label
              htmlFor="dokumen"
              className="text-sm text-primaryBlue sm:text-xs"
            >
              Upload{" "}
              {type == "create-bagasi" || type == "update-bagasi"
                ? "Tiket Penerbangan"
                : "Bukti Pembayaran"}{" "}
              <br />{" "}
              <span className="text-xs text-textColor">
                (File Type: PDF, PNG, JPG, atau JPEG. File Max: 5mb)
              </span>
            </label>
            <input
              type="file"
              id="dokumen"
              accept="*"
              {...register("dokumen")}
              className="text-base sm:text-xs text-center text-textColor bg-transparent border-b-2 border-textColor outline-none cursor-pointer"
            />
          </div>
        </div>
        {/* Box 3 Upload Button */}
        <div
          className="col-start-3 col-end-5 row-start-2 flex flex-col justify-evenly 
            lg:row-start-[9] lg:col-start-1 lg:col-end-5 "
        >
          {/* Tombol Submit */}
          <button
            disabled={!isDirty || isUploading}
            className={`${
              !isDirty ? "cursor-not-allowed" : "cursor-pointer"
            } p-2 px-4 justify-self-center self-center text-sm text-white text-center rounded-xl bg-primaryBlue duration-300 hover:bg-primaryBlueBold`}
          >
            {isUploading ? "Uploading..." : "Upload Dokumen"}
          </button>
          {/* Success Message */}
          {/* <Notification type="error" text="upload gagal" /> */}
        </div>
      </form>
    </div>
  );
}

function Instruksi({ type = "", dari, tujuan, totalNet, dokumen }) {
  return (
    <p className="text-sm text-textColor">
      {type == "create-bagasi" || type == "update-bagasi"
        ? `Silahkan upload tiket valid penerbangan dari: ${dari}, tujuan: ${tujuan} ya kak 🤗`
        : ""}

      {type == "create-order" || type == "update-order"
        ? `Silahkan upload bukti pembayaran sebesar ${currencyFormat(
            totalNet
          )} ke rekening Baka, Bank Mandiri 12345678954456`
        : ""}
    </p>
  );
}
