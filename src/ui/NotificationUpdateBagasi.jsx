import Notification from "./Notification";

function NotificationUpdateBagasi({ bagasiStatus, orderListLength }) {
  if (bagasiStatus == "Scheduled")
    return (
      <Notification
        type="error"
        text="Bagasi berhasil di registrasi, menunggu bukti tiket penerbangan"
      />
    );

  if (bagasiStatus == "Opened" && orderListLength == 0)
    return (
      <Notification
        type="success"
        text="Validasi dokumen penerbangan berhasil, menunggu order Jastiper. Update hanya berlaku untuk Alamat, Berat, Harga dan Catatan"
      />
    );

  if (bagasiStatus == "Opened" && orderListLength >= 1)
    return (
      <Notification
        type="success"
        text="Update hanya berlaku untuk Alamat, Berat, Harga dan Catatan ya kak"
      />
    );

  if (bagasiStatus == "Closed")
    return (
      <Notification
        type="success"
        text="Bagasi full atau siap berangkat. Have a nice flight ya kak"
      />
    );

  if (bagasiStatus == "Canceled")
    return (
      <Notification
        type="error"
        text="Tiket penerbangan tidak valid atau belum tersedia, Bagasi dibatalkan. Mohon di hapus untuk permohonan jual bagasi yang baru."
      />
    );
}

export default NotificationUpdateBagasi;
