import Tabel from "../../ui/Tabel";

const orderHero = [
  {
    berangkat: "tanggal 1",
    dari: "Dubai",
    tujuan: "Jakarta",
    total: "05",
    status: "Preparing",
  },
  {
    berangkat: "2023-07-04T09:53:24.974+00:00",
    dari: "Istanbul",
    tujuan: "Cairo",
    total: "20",
    status: "Delivered",
  },
  {
    berangkat: "tanggal 1",
    dari: "Dubai",
    tujuan: "Jakarta",
    total: "05",
    status: "Preparing",
  },
  {
    berangkat: "tanggal 2",
    dari: "Istanbul",
    tujuan: "Cairo",
    total: "20",
    status: "Ready",
  },
  {
    berangkat: "tanggal 2",
    dari: "Istanbul",
    tujuan: "Cairo",
    total: "20",
    status: "Delivered",
  },
];

export function TabelOrderHero() {
  return <Tabel feature="orderHero" dataObj={orderHero} />;
}
