import Notification from "./Notification";

function NotificationUpdateOrder({ bagasiStatus, orderStatus }) {
  if (bagasiStatus == "Opened" && orderStatus == "Preparing")
    return (
      <Notification
        type="error"
        text="Jastip berhasil di registrasi, menunggu bukti pembayaran"
      />
    );

  if (bagasiStatus == "Opened" && orderStatus == "Ready")
    return (
      <Notification
        type="success"
        text="Order yang sudah di bayar tidak bisa di update kak. Jika ingin order bagasi yang sama, silahkan buat order baru "
      />
    );

  if (bagasiStatus == "Closed" && orderStatus == "Ready")
    return (
      <Notification
        type="success"
        text="Bagasi full atau sudah berangkat. Mohon di tunggu ya kak"
      />
    );

  if (bagasiStatus == "Opened" && orderStatus == "Delivered")
    return (
      <Notification
        type="success"
        text="Terima kasih telah menggunakan jasa kami kak"
      />
    );

  if (bagasiStatus == "Closed" && orderStatus == "Preparing")
    return (
      <Notification
        type="error"
        text="Bagasi full atau sudah berangkat, tunggu bagasi berikut ya kak"
      />
    );
}

export default NotificationUpdateOrder;
