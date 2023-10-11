import { useGetAllOrder } from "../order/useGetAllOrder";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";

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

const orderComplete = [
  {
    berangkat: "2023-12-08T00:00:00.000+00:00",
    dari: "Dubai",
    tujuan: "Jakarta",
    total: "05",
    status: "Preparing",
  },
  {
    berangkat: "2023-07-10T00:00:00.000+00:00",
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
  return (
    <>
      <Tabel feature="orderHero" dataObj={orderHero} />
    </>
  );
}

export function TabelOrderComplete() {
  const { order, isLoading: isLoadingOrder } = useGetAllOrder();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  if (isLoadingOrder || isLoadingBagasi) return <Spinner />;

  const orderDetails = order.map((el) => ({
    jumlahKg: el.jumlahKg,
    status: el.status,
    waktuBerangkat: bagasi.find((bag) => bag._id == el.bagasi._id)
      .waktuBerangkat,
    dari: bagasi.find((bag) => bag._id == el.bagasi._id).dari,
    tujuan: bagasi.find((bag) => bag._id == el.bagasi._id).tujuan,
  }));

  return (
    <>
      <Tabel feature="order" dataObj={orderDetails} />
      {orderDetails.length > 8 && <Pagination />}
    </>
  );
}
