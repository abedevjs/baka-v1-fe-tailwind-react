import Filter from "../../ui/Filter";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Tabel from "../../ui/Tabel";
import { useGetAllBagasi } from "./useGetAllBagasi";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetAllBagasi } from "../../services & hooks/apiBakaBagasi";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const HERO_LIMIT = import.meta.env.VITE_HERO_LIMIT;

// export function TabelBagasiHero() {
//   return <Tabel feature="bagasiHero" dataObj={bagasiHero} />;
// }

export function TabelBagasiComplete({ complete = true }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  const limitResult = complete ? PAGE_SIZE : HERO_LIMIT;
  const queryStatus = status ? `&status=${status}` : "";

  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["bagasiQuery", page, status],
    queryFn: () => apiGetAllBagasi(page, limitResult, queryStatus),
  });

  useEffect(
    function () {
      if (status) {
        setPage(1);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
      }
    },
    [status]
  );

  // if (isLoadingBagasi || isLoadingBagasiQuery) return <Spinner />;
  if (isLoadingBagasiQuery) return <Spinner />;

  //PRE-FETCHING
  const pageCount = Math.ceil(Number(bagasi?.length) / limitResult); // 17/10 = 1.7 dibulatkan ke 2
  if (complete && bagasi?.length > PAGE_SIZE && page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bagasiQuery", page + 1, status],
      queryFn: () => apiGetAllBagasi(page + 1, limitResult, queryStatus),
    });
  }
  if (complete && bagasi?.length > PAGE_SIZE && page > 1) {
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
      {complete ? <Filter type="bagasi" setterStatus={setStatus} /> : ""}
      <Tabel feature="bagasi" dataObj={filteredBagasi} />
      {complete ? (
        <Pagination
          count={bagasi?.length}
          setterPage={setPage}
          newDataCount={newData?.length}
        />
      ) : (
        ""
      )}
    </>
  );
}
