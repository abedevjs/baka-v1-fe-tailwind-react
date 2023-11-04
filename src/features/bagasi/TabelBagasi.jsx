import Filter from "../../ui/Filter";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Tabel from "../../ui/Tabel";
import { useGetAllBagasi } from "./useGetAllBagasi";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetAllBagasi } from "../../services & hooks/apiBakaBagasi";
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const heroLimit = 5;

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

// const bagasiComplete = [
//   {
//     id: 1,
//     berangkat: "2023-07-10T00:00:00.000+00:00",
//     dari: "Jakarta",
//     tujuan: "Cairo",
//     sisa: "10",
//     harga: "150000",
//     status: "Opened",
//   },
//   {
//     id: 2,
//     berangkat: "2023-07-04T09:48:51.265+00:00",
//     dari: "Dubai",
//     tujuan: "Istanbul",
//     sisa: "50",
//     harga: "250000",
//     status: "Canceled",
//   },
//   {
//     id: 3,
//     berangkat: "2023-07-06T00:00:00.000+00:00",
//     dari: "Jakarta",
//     tujuan: "Cairo",
//     sisa: "30",
//     harga: "100000",
//     status: "Closed",
//   },
//   {
//     id: 4,
//     berangkat: "tanggal 4",
//     dari: "Cairo",
//     tujuan: "Istanbul",
//     sisa: "45",
//     harga: "120000",
//     status: "Scheduled",
//   },
//   {
//     id: 5,
//     berangkat: "tanggal 5",
//     dari: "Istanbul",
//     tujuan: "Jakarta",
//     sisa: "10",
//     harga: "150000",
//     status: "Opened",
//   },
// ];

export function TabelBagasiHero() {
  return <Tabel feature="bagasiHero" dataObj={bagasiHero} />;
}

export function TabelBagasiComplete({ hero = false }) {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  const limitResult = hero ? heroLimit : PAGE_SIZE;
  const queryStatus = status ? `&status=${status}` : "";

  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["bagasiQuery", page, status],
    queryFn: () => apiGetAllBagasi(page, limitResult, queryStatus),
  });

  if (isLoadingBagasi || isLoadingBagasiQuery) return <Spinner />;

  //PRE-FETCHING
  const pageCount = Math.ceil(Number(bagasi?.length) / limitResult); // 17/10 = 1.7 dibulatkan ke 2
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bagasiQuery", page + 1, status],
      queryFn: () => apiGetAllBagasi(page + 1, limitResult, queryStatus),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bagasiQuery", page - 1, status],
      queryFn: () => apiGetAllBagasi(page - 1, limitResult, queryStatus),
    });
  }

  let filteredBagasi = newData || [];

  if (filteredBagasi.length == 0)
    filteredBagasi = [
      {
        berangkat: "",
        dari: "",
        tujuan: "",
        availableKg: "",
        harga: "",
        status: "",
        action: "",
      },
    ];

  return (
    <>
      {!hero ? <Filter type="bagasi" setterStatus={setStatus} /> : ""}
      <Tabel feature="bagasi" dataObj={filteredBagasi} />
      {!hero ? <Pagination count={bagasi?.length} setterPage={setPage} /> : ""}
    </>
  );
}
