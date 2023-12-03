import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Filter from "../../ui/Filter";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Tabel from "../../ui/Tabel";
import { useGetAllBagasi } from "./useGetAllBagasi";
import { apiGetAllBagasi } from "../../services & hooks/apiBakaBagasi";

const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const HERO_LIMIT = import.meta.env.VITE_HERO_LIMIT;

// export function TabelBagasiHero() {
//   return <Tabel feature="bagasiHero" dataObj={bagasiHero} />;
// }

export function TabelBagasiComplete({ complete = true }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1); //* There's 'Two Way Data Binding' is going on here. Parent Component (Tabel Bagasi) - Child Component (Pagination)
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();
  const { allBagasi, isLoadingAllBagasi } = useGetAllBagasi();

  //Setting filter n page for query allBagasi --start
  const limitResult = complete ? PAGE_SIZE : HERO_LIMIT;
  const queryStatus = status ? `&status=${status}` : "";
  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["bagasiQuery", page, status],
    queryFn: () => apiGetAllBagasi(page, limitResult, queryStatus),
  });

  //Set the page to 1 whenever user switch the filter status
  useEffect(
    function () {
      if (status) {
        setPage(1); //This number (1) is basically the initial state of Pagination component
        searchParams.set("page", 1);
        setSearchParams(searchParams);
      }
    },

    //Utk Array Dependency useEffect dibwh ini, sengaja sy tdk masukkan searchParams dan setSearchParams, karena dy error (sdh di tes).
    // If we use Object, Array, Function as dependency it will cause error because in JavaScript and React see everything is Object, and new objects as different, {} !== {}
    [status]
  );
  //Setting filter n page for query allBagasi --end

  if (isLoadingAllBagasi || isLoadingBagasiQuery) return <Spinner />;

  //PRE-FETCHING procedure --start
  const pageCount = Math.ceil(Number(allBagasi?.length) / limitResult); // 17/10 = 1.7 dibulatkan ke 2
  if (complete && allBagasi?.length > PAGE_SIZE && page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bagasiQuery", page + 1, status],
      queryFn: () => apiGetAllBagasi(page + 1, limitResult, queryStatus),
    });
  }
  if (complete && allBagasi?.length > PAGE_SIZE && page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bagasiQuery", page - 1, status],
      queryFn: () => apiGetAllBagasi(page - 1, limitResult, queryStatus),
    });
  }
  //PRE-FETCHING procedure --end

  //Make the final array to hold the (filter n page result) newData, to prevent error set it to empty array if (filter n page result) newData is still undefined --start
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
  //Make the final array to hold the (filter n page result) newData, to prevent error set it to empty array if (filter n page result) newData is still undefined --start

  return (
    <>
      {complete ? <Filter type="bagasi" setterStatus={setStatus} /> : ""}
      <Tabel feature="bagasi" dataObj={filteredBagasi} />
      {complete ? (
        <Pagination
          count={allBagasi?.length}
          setterPage={setPage}
          newDataCount={newData?.length}
        />
      ) : (
        ""
      )}
    </>
  );
}
