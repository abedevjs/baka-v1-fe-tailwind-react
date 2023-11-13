import { useState } from "react";
import { Link } from "react-router-dom";

export function TabRules({ tabOpen }) {
  const [openTab, setOpenTab] = useState(1);

  function handleToggle(e) {
    // console.log(e.target.tabIndex);
    // if (e.target.tabIndex == -1) e.target.tabIndex = 1;
    setOpenTab(e);
    tabOpen(e);
  }

  return (
    <>
      {/* Steps Box */}
      <div className="flex-1 flex flex-col justify-between items-center space-y-4">
        {/* Steps Title */}
        <span className="mb-2 text-lg self-center sm:text-base">
          Pastikan sudah menjadi Member, kemudian ikuti langkah berikut:
        </span>
        {/* Steps Options Box */}
        <div className="tab_container w-full flex justify-evenly items-center">
          {/* Traveler Button */}
          <button
            onClick={() => handleToggle(1)}
            className={`${
              openTab == 1
                ? " bg-primaryBlue -translate-y-4 shadow-lg shadow-primaryBlueBold"
                : "bg-primaryBlueBold"
            } p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition duration-300  hover:bg-primaryBlue sm:px-8 sm:text-xs`}
          >
            {/* <a href="#" class="p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition-all duration-300 opacity-100 bg-primaryBlueBold"> */}
            <div className=" ">Untuk Traveler</div>
          </button>
          {/* Jastiper Button */}
          <button
            onClick={() => handleToggle(2)}
            className={`${
              openTab == 2
                ? " bg-primaryBlue -translate-y-4 shadow-lg shadow-primaryBlueBold"
                : "bg-primaryBlueBold"
            } p-2 px-28 rounded-lg text-sm text-white cursor-pointer transition duration-300  hover:bg-primaryBlue sm:px-8 sm:text-xs`}
          >
            <div className=" ">Untuk Jastiper</div>
          </button>
        </div>

        <TabRulesContent contentNumber={openTab} />
      </div>
      {/* akhir Steps Box */}
    </>
  );
}

function TabRulesContent({ contentNumber }) {
  return (
    <>
      {/* Steps Content Box Bagasi */}
      {contentNumber == 1 && (
        <div
          className={`${
            contentNumber == 1 ? " flex flex-col self-start" : "hidden"
          } relative space-y-2`}
        >
          {/* Vertical Line */}
          <div className="absolute top-8 left-[20px] w-[2px] h-[80%] bg-secondaryYellow z-[1] " />
          {/* Step 1 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              1
            </div>
            <span>{`Registrasi Bagasi dengan mengisi formulir 'Jual Bagasi'`}</span>
          </div>
          {/* Step 2 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              2
            </div>
            <span>
              Upload dokumen Bukti Keberangkatan (Tiket Pesawat/Penerbangan)
            </span>
          </div>
          {/* Step 3 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              3
            </div>
            <span>Admin memeriksa dokumen bukti keberangkatan</span>
          </div>
          {/* Step 4 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              4
            </div>
            <span>{`Jika dokumen keberangkatan valid, Bagasi akan masuk list 'Daftar Bagasi Traveler'`}</span>
          </div>
          {/* Step 5 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              5
            </div>
            <span>
              Jika dokumen keberangkatan tidak valid, Traveler akan di
              notifikasi oleh Admin.
            </span>
          </div>
        </div>
      )}

      {/* Steps Content Box Order */}
      {contentNumber == 2 && (
        <div
          className={`${
            contentNumber == 2 ? " flex flex-col self-start" : "hidden"
          } relative space-y-2`}
        >
          {/* Vertical Line */}
          <div className="absolute top-8 left-[20px] w-[2px] h-[80%] bg-secondaryYellow z-[1] " />
          {/* Step 1 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              1
            </div>
            <span>
              Registrasi Order dengan melakukan pembelian Bagasi pada `List
              Bagasi`.
            </span>
          </div>
          {/* Step 2 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              2
            </div>
            <span>Melakukan pembayaran melalui rekening Admin.</span>
          </div>
          {/* Step 3 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              3
            </div>
            <span>Upload dokumen Bukti Pembayaran.</span>
          </div>
          {/* Step 4 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              4
            </div>
            <span>Admin melakukan validasi pada dokumen Bukti Pembayaran.</span>
          </div>
          {/* Step 5 */}
          <div className="flex space-x-3 items-center z-10">
            <div className="py-2 px-4 rounded-[50%] text-center text-base bg-secondaryYellow sm:text-sm">
              5
            </div>
            <span>
              Jika dokumen Bukti Pembayaran valid, Jastiper bisa mengirimkan
              titipan ke Alamat Kota Asal Traveler. Jika tidak, Jastiper akan
              menerima notifikasi dari Admin.
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export function RulesParagrafContent({ contentNumber }) {
  return (
    <>
      {/* Paragraf Container start */}
      <div
        className={`${
          contentNumber == 1 ? " flex flex-col" : "hidden"
        } p-6 space-y-8  mt-2 sm:p-2`}
      >
        <span className=" mb-2 p-2 text-base rounded-md bg-secondaryYellow">
          Untuk Traveler yang menjual Bagasi:
        </span>
        {/* <p className="p-2 text-base sm:text-sm">Bagasi</p> */}
        <ul className=" px-4 text-sm sm:text-xs list-decimal space-y-2 sm:px-0">
          <li>
            Admin tidak bertanggung jawab atas kesalahan dan atau keteledoran
            Traveler dalam menangani bagasi Jastiper.
          </li>
          <li>
            Traveler hendaknya sudah mengetahui kondisi, resiko, dan regulasi
            dari Bea Cukai di negara asal dan negara tujuan Traveler.
          </li>
          <li>
            Demi keamanan bersama, Traveler berhak memeriksa isi bagasi
            Jastiper, dan melakukan tindakan yang perlu atas bagasi tersebut
            jika di nilai melanggar hukum, aturan yang berlaku dan atau
            kesepakatan antara kedua belah pihak <i>(Traveler - Jastiper)</i>.
          </li>
          <li>Admin tidak bertanggung jawab atas isi bagasi Jastiper.</li>
          <li>
            Traveler yang ingin menjual Bagasi, dapat mengisi form{" "}
            <Link
              to="/list-bagasi"
              className="underline text-primaryBlue hover:text-textColor"
            >
              Jual Bagasi
            </Link>
            . Data yang diisi harus sesuai dengan tiket pernerbangan yang akan
            di upload.
          </li>
          <li>
            Pastikan sebelumnya untuk memiliki tiket penerbangan keberangkatan
            yang valid. Setelah mengisi form jual bagasi, Traveler selanjutnya
            dipandu untuk mengupload dokumen di form upload. File yang di upload
            bisa dalam bentuk gambar dan <i>pdf</i>, dengan kapasitas maksimal
            5mb.
          </li>
          <li>
            Setelah mengisi form jual-bagasi dan dokumen keberangkatan berhasil
            di upload, secara otomatis bagasi Traveler akan masuk di `List
            Bagasi` dengan status{" "}
            <span className="px-1 text-primaryBlue bg-blue-50">Scheduled</span>.
            Pada tahap ini, Jastiper belum bisa membeli bagasi tersebut, karena
            Admin sedang melakukan validasi bagasi Traveler. data Traveler
            <span className="italic">
              (Kontak, Alamat Kota Asal, Alamat Kota Tujuan)
            </span>{" "}
            tidak di ekspos.
          </li>
          <li>
            Proses validasi membutuhkan waktu maksimal 24 jam. Jika data dan
            atau dokumen penerbangan tidak valid, Admin akan memberikan{" "}
            <i>feedback</i> pada Traveler, status Bagasi tidak berubah. Namun
            jika keduanya valid, status bagasi akan berubah menjadi{" "}
            <span className="px-1 text-green-500 bg-green-50">Opened</span>,
            Bagasi kemudian sudah bisa di order oleh Jastiper.
          </li>
          <li>
            Selama status Bagasi{" "}
            <span className="px-1 text-green-500 bg-green-50">Opened</span>,
            Traveler bebas untuk merubah{" "}
            <span className="italic">
              jumlah berat, harga Bagasi, alamat kota asal-tujuan
            </span>
            , dan <span className="italic">catatan Traveler</span>.
          </li>
          <li>
            Admin melakukan validasi terhadap pembayaran atas seluruh pembelian
            Bagasi oleh Jastiper. Jika pembayaran valid, data Traveler{" "}
            <span className="italic">
              (Kontak, Alamat Kota Asal, Alamat Kota Tujuan)
            </span>{" "}
            akan di ekspos ke Jastiper tersebut. Selanjutnya Jastiper akan
            mengirimkan bagasi ke alamat kota asal Traveler.
          </li>
          <li>
            Status Bagasi secara otomatis akan berubah menjadi{" "}
            <span className=" px-1 text-red-500 bg-red-50">Closed</span>, jika
            seluruh berat Bagasi terjual dan atau sehari sebelum waktu
            keberangkatan Traveler (h-1).
          </li>
          <li>
            Seluruh hasil penjualan Bagasi dari Jastiper akan di transfer ke
            rekening Admin. Dana hasil penjualan akan di teruskan ke Traveler
            ketika misi Bagasi sudah selesai dan sukses, yaitu Bagasi aman
            sampai di Alamat Kota Tujuan dan diterima oleh Jastiper, dan atau 72
            jam setelah waktu tiba Traveler/Bagasi (h+3).
          </li>
          <li>
            Admin hanya bertanggung jawab pada dana penjualan Bagasi yang
            transaksinya dilakukan melalui aplikasi Baka, dan pembayarannya
            ditujukan ke rekening Admin.{" "}
          </li>
          <li>
            Jika seluruh misi Bagasi sudah selesai dan sukses, status akan
            berubah menjadi{" "}
            <span className="px-1 text-orange-500 bg-orange-50">Unloaded</span>.
            Detail Bagasi kemudian akan dihapus dari data Traveler.
          </li>
          <li>
            Traveler yang tidak melengkapi data dan dokumen penerbangan yang
            valid hingga sehari sebelum waktu keberangkatan (h-1), secara
            otomatis status Bagasi akan berubah menjadi{" "}
            <span className=" px-1 text-gray-500 bg-gray-50">Canceled</span>.
          </li>
          <li>
            Traveler dapat memeriksa, melakukan update, dan atau menghapus
            Bagasi pada halaman{" "}
            <Link
              to="/user"
              className="underline text-primaryBlue hover:text-textColor"
            >
              User
            </Link>
            .
          </li>
          <li>
            Traveler yang melanggar aturan, syarat ketentuan atau tidak
            bertanggung jawab atas titipan Jastiper{" "}
            <i>(seperti yang sudah disepakati oleh kedua belah pihak)</i>, akan
            di <i>Blacklist</i> oleh Admin.
          </li>
          <li>
            Admin di setiap waktu dapat dihubungi melalui halaman{" "}
            <Link
              to="/about"
              className="underline text-primaryBlue hover:text-textColor"
            >
              Hubungi Kami
            </Link>
            .
          </li>
        </ul>

        {/* Link Detail */}
        <Link
          to="/faq"
          className=" w-full p-1 px-2  flex justify-center text-lg text-white cursor-pointer bg-primaryBlue opacity-80 rounded-lg hover:opacity-100 hover:bg-primaryBlueBold transition-all duration-300 "
        >
          Lihat Tanya-Jawab
        </Link>
      </div>
      <div
        className={`${
          contentNumber == 2 ? " flex flex-col" : "hidden"
        } p-6 space-y-8  sm:mt-2 sm:p-2 sm:space-y-0`}
      >
        <span className="mb-2 p-2 text-base rounded-md bg-secondaryYellow">
          Untuk Jastiper pembeli Bagasi:
        </span>
        {/* <p className="p-2 text-base sm:text-sm">Order</p> */}
        <ul className="px-4 text-sm list-decimal space-y-2 sm:px-0 sm:text-xs">
          <li>
            Admin tidak bertanggung jawab atas kesalahan dan atau keteledoran
            Traveler dalam menangani bagasi Jastiper.
          </li>
          <li>
            Jastiper hendaknya sudah mengetahui kondisi, resiko, dan regulasi
            dari Bea Cukai di negara asal dan negara tujuan Traveler.
          </li>
          <li>
            Demi keamanan bersama, Traveler berhak memeriksa isi bagasi
            Jastiper, dan melakukan tindakan yang perlu atas bagasi tersebut
            jika di nilai melanggar hukum, aturan yang berlaku dan atau
            kesepakatan antara kedua belah pihak <i>(Traveler - Jastiper)</i>.
          </li>
          <li>Admin tidak bertanggung jawab atas isi bagasi Jastiper.</li>
          <li>
            Jastiper dapat membeli Bagasi pada halaman{" "}
            <Link
              to="/list-bagasi"
              className="underline text-primaryBlue hover:text-textColor"
            >
              List Bagasi
            </Link>
            .
          </li>
          <li>
            Bagasi dengan status{" "}
            <span className="px-1 text-primaryBlue bg-blue-50">Scheduled</span>{" "}
            belum bisa di beli karena Admin masih dalam proses validasi data dan
            dokumen penerbangan Traveler tersebut.
          </li>
          <li>
            Jastiper tidak dapat membeli Bagasi dengan status{" "}
            <span className="px-1 text-red-500 bg-red-50">Closed</span>. Yaitu
            dimana kapasitas Bagasi sudah penuh dan atau bertepatan sehari
            sebelum waktu keberangkatan Bagasi (h-1).
          </li>
          <li>
            Jastiper hanya bisa membeli Bagasi dengan status{" "}
            <span className="px-1 text-green-500 bg-green-50">Opened</span>,
            Bagasi tersebut secara otomatis sudah memiliki data dan dokumen
            penerbangan yang valid.
          </li>
          <li>
            Pada formulir Beli Bagasi, Jastiper mengisi formulir sesuai dengan
            data yang diminta kemudian melakukan pembayaran ke rekening Admin
            Baka.
          </li>
          <li>
            Bukti pembayaran di upload dalam bentuk gambar atau <i>pdf</i>{" "}
            dengan kapasitas maksimal 5mb. Berikutnya dalam waktu 24 jam Admin
            akan melakukan validasi atas dokumen pembayaran tersebut.
          </li>
          <li>
            Admin hanya bertanggung jawab pada dana pembelian Bagasi yang
            transaksinya dilakukan melalui aplikasi Baka, dan pembayarannya
            ditujukan ke rekening Admin.{" "}
          </li>
          <li>
            Order yang sudah dibuat dan sedang menunggu validasi Admin, secara
            otomatis akan ber-status{" "}
            <span className="px-1 text-red-500 bg-red-50">Preparing</span>. Pada
            tahap ini Jastiper bebas untuk memeriksa, melakukan update dan atau
            menghapus Order.
          </li>
          <li>
            Jika validasi pembayaran berhasil, status Order berubah menjadi{" "}
            <span className="px-1 text-blue-500 bg-blue-50">Ready</span>.
            Jastiper akan menerima data Traveler berupa nomor Kontak, Alamat
            Kota Asal{" "}
            <span className="italic">(tempat Jastiper mengirimkan bagasi)</span>{" "}
            dan Alamat Kota Tujuan{" "}
            <span className="italic">(tempat Jastiper mengambil bagasi)</span>.
          </li>

          <li>
            Di hari kedatangan Bagasi, terdapat tombol `Selesai` pada halaman{" "}
            <Link
              to="/user"
              className="underline text-primaryBlue hover:text-textColor"
            >
              update Order
            </Link>
            . Jastiper dapat menekan tombol tersebut jika titipan sudah
            diterima, yang kemudian secara otomatis mengubah status Order
            menjadi{" "}
            <span className="px-1 text-orange-500 bg-orange-50">Delivered</span>
            .
          </li>
          <li>
            Tombol `Selesai` juga akan aktif secara otomatis di hari ketiga
            setelah waktu kedatangan Bagasi (h+3) yang mengubah status Bagasi
            menjadi{" "}
            <span className="px-1 text-orange-500 bg-orange-50">Unloaded</span>{" "}
            dan menyatakan misi Bagasi telah selesai dan sukses.
          </li>
          <li>
            Jastiper yang tidak melengkapi data dan dokumen pembayaran yang
            valid hingga sehari sebelum waktu keberangkatan Bagasi (h-1), secara
            otomatis status Order akan berubah menjadi{" "}
            <span className=" px-1 text-gray-500 bg-gray-50">Postponed</span>.
          </li>
          <li>
            Jastiper dapat memeriksa, melakukan update, dan atau menghapus Order
            pada halaman{" "}
            <Link
              to="/user"
              className="underline text-primaryBlue hover:text-textColor"
            >
              User
            </Link>
            .
          </li>
          <li>
            Jastiper yang melanggar aturan, syarat ketentuan{" "}
            <i>(seperti yang sudah disepakati oleh kedua belah pihak)</i>, akan
            di <i>Blacklist</i> oleh Admin.
          </li>
          <li>
            Admin di setiap waktu dapat dihubungi melalui halaman{" "}
            <Link
              to="/about"
              className="underline text-primaryBlue hover:text-textColor"
            >
              Hubungi Kami
            </Link>
            .
          </li>
        </ul>
        {/* Link Detail */}
        <Link
          to="/faq"
          className=" w-full p-1 px-2  flex justify-center text-lg text-white cursor-pointer bg-primaryBlue opacity-80 rounded-lg hover:opacity-100 hover:bg-primaryBlueBold transition-all duration-300 "
        >
          Lihat Tanya-Jawab
        </Link>
      </div>
    </>
  );
}

// export default Tab;
