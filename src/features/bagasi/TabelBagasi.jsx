import Tabel from "../../ui/Tabel";

const bagasiHero = [
  {
    berangkat: "2023-07-10T00:00:00.000+00:00",
    dari: "Jakarta",
    tujuan: "Cairo",
    sisa: "10",
    status: "Opened",
  },
  {
    berangkat: "2023-07-04T09:48:51.265+00:00",
    dari: "Dubai",
    tujuan: "Istanbul",
    sisa: "50",
    status: "Canceled",
  },
  {
    berangkat: "2023-07-06T00:00:00.000+00:00",
    dari: "Jakarta",
    tujuan: "Cairo",
    sisa: "30",
    status: "Closed",
  },
  {
    berangkat: "tanggal 4",
    dari: "Cairo",
    tujuan: "Istanbul",
    sisa: "45",
    status: "Scheduled",
  },
  {
    berangkat: "tanggal 5",
    dari: "Istanbul",
    tujuan: "Jakarta",
    sisa: "10",
    status: "Opened",
  },
];

const bagasiComplete = [
  {
    berangkat: "2023-07-10T00:00:00.000+00:00",
    dari: "Jakarta",
    tujuan: "Cairo",
    sisa: "10",
    harga: "150000",
    status: "Opened",
  },
  {
    berangkat: "2023-07-04T09:48:51.265+00:00",
    dari: "Dubai",
    tujuan: "Istanbul",
    sisa: "50",
    harga: "250000",
    status: "Canceled",
  },
  {
    berangkat: "2023-07-06T00:00:00.000+00:00",
    dari: "Jakarta",
    tujuan: "Cairo",
    sisa: "30",
    harga: "100000",
    status: "Closed",
  },
  {
    berangkat: "tanggal 4",
    dari: "Cairo",
    tujuan: "Istanbul",
    sisa: "45",
    harga: "120000",
    status: "Scheduled",
  },
  {
    berangkat: "tanggal 5",
    dari: "Istanbul",
    tujuan: "Jakarta",
    sisa: "10",
    harga: "150000",
    status: "Opened",
  },
];

export function TabelBagasiHero() {
  return <Tabel feature="bagasiHero" dataObj={bagasiHero} />;
}

export function TabelBagasiComplete() {
  return <Tabel feature="bagasi" dataObj={bagasiComplete} />;
}
