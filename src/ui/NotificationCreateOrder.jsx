import Notification from "./Notification";

function NotificationCreateOrder({ bagasiStatus, availableKg }) {
  if (bagasiStatus == "Opened")
    return (
      <Notification type="success" text="Bagasi ready. Silahkan di order kak" />
    );

  if (bagasiStatus == "Scheduled")
    return (
      <Notification
        type="error"
        text="Kami sedang melakukan validasi tiket penerbangan Traveler, coba beberapa saat lagi ya kak"
      />
    );

  if (bagasiStatus == "Closed")
    return (
      <Notification
        type="error"
        text="Bagasi full atau sudah berangkat, tunggu bagasi berikut ya kak"
      />
    );

  if (bagasiStatus == "Unloaded")
    return (
      <Notification
        type="success"
        text="Misi Bagasi berhasil dan selesai. Terima kasih ya kak"
      />
    );

  if (bagasiStatus == "Canceled")
    return (
      <Notification
        type="error"
        text="Bagasi dibatalkan, cari jadwal bagasi yang lain ya kak"
      />
    );
}

export default NotificationCreateOrder;

// {
//   status == "Opened" ? (
//     <div
//       className="w-full mb-8 col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center
//       sm:row-start-[11] sm:row-end-[10] sm:col-start-1 sm:col-end-5"
//     >
//       <span className="py-1 px-2 text-xs text-white bg-green-600 rounded-lg">
//         Bagasi ready. Silahkan di order kak 🤗
//       </span>
//     </div>
//   ) : (
//     <div
//       className="w-full mb-4 col-start-3 col-end-5 row-start-4 row-end-6 self-center flex justify-center
//           sm:row-start-[11] sm:row-end-[10] sm:col-start-1 sm:col-end-5
//           "
//     >
//       {status == "Scheduled" ? (
//         <Notification
//           type="error"
//           text="Bagasi sedang dikonfirmasi, coba beberapa saat lagi ya kak"
//         />
//       ) : (
//         ""
//       )}

//       {status == "Closed" && availableKg == 0 ? (
//         <Notification
//           type="error"
//           text="Bagasi sudah penuh, tunggu bagasi berikut ya kak"
//         />
//       ) : (
//         ""
//       )}
//       {status == "Closed" && availableKg > 0 ? (
//         <Notification
//           type="error"
//           text="Bagasi sudah berangkat, tunggu penerbangan berikut ya kak"
//         />
//       ) : (
//         ""
//       )}

//       {status == "Unloaded" ? (
//         <Notification
//           type="success"
//           text="Misi Bagasi berhasil dan selesai. Terima kasih ya kak"
//         />
//       ) : (
//         ""
//       )}

//       {status == "Canceled" ? (
//         <Notification
//           type="error"
//           text="Bagasi dibatalkan, cari jadwal bagasi yang lain ya kak"
//         />
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }
