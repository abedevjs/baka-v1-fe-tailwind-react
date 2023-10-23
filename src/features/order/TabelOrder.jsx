import { useGetAllOrder } from "../order/useGetAllOrder";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";
import Filter from "../../ui/Filter";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetAllOrder } from "../../services & hooks/apiBakaOrder";
import { useState } from "react";
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;

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

// const orderComplete = [
//   {
//     berangkat: "2023-12-08T00:00:00.000+00:00",
//     dari: "Dubai",
//     tujuan: "Jakarta",
//     total: "05",
//     status: "Preparing",
//   },
//   {
//     berangkat: "2023-07-10T00:00:00.000+00:00",
//     dari: "Istanbul",
//     tujuan: "Cairo",
//     total: "20",
//     status: "Delivered",
//   },
//   {
//     berangkat: "tanggal 1",
//     dari: "Dubai",
//     tujuan: "Jakarta",
//     total: "05",
//     status: "Preparing",
//   },
//   {
//     berangkat: "tanggal 2",
//     dari: "Istanbul",
//     tujuan: "Cairo",
//     total: "20",
//     status: "Ready",
//   },
//   {
//     berangkat: "tanggal 2",
//     dari: "Istanbul",
//     tujuan: "Cairo",
//     total: "20",
//     status: "Delivered",
//   },
// ];

export function TabelOrderHero() {
  return (
    <>
      <Tabel feature="orderHero" dataObj={orderHero} />
    </>
  );
}

export function TabelOrderComplete() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();

  const { order, isLoading: isLoadingOrder } = useGetAllOrder();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  const queryStatus = status ? `&status=${status}` : "";

  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["orderQuery", page, status],
    queryFn: () => apiGetAllOrder(page, PAGE_SIZE, queryStatus),
  });

  if (isLoadingOrder || isLoadingBagasi || isLoadingBagasiQuery)
    return <Spinner />;

  //PRE-FETCHING
  const pageCount = Math.ceil(Number(bagasi?.length) / PAGE_SIZE); // 17/10 = 1.7 dibulatkan ke 2
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page + 1, status],
      queryFn: () => apiGetAllOrder(page + 1, PAGE_SIZE, queryStatus),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page - 1, status],
      queryFn: () => apiGetAllOrder(page - 1, PAGE_SIZE, queryStatus),
    });
  }

  const orderDetails = newData?.map((el) => ({
    jumlahKg: el.jumlahKg,
    status: el.status,
    waktuBerangkat: bagasi.find((bag) => bag._id == el.bagasi._id)
      .waktuBerangkat,
    dari: bagasi.find((bag) => bag._id == el.bagasi._id).dari,
    tujuan: bagasi.find((bag) => bag._id == el.bagasi._id).tujuan,
  }));

  let filteredOrder = orderDetails || [];
  if (filteredOrder.length == 0)
    filteredOrder = [
      {
        berangkat: "",
        dari: "",
        tujuan: "",
        jumlahKg: "",
        status: "",
      },
    ];

  return (
    <>
      <Filter type="order" setterStatus={setStatus} />
      <Tabel feature="order" dataObj={filteredOrder} />
      <Pagination count={order?.length} setterPage={setPage} />
    </>
  );
}
