import { useGetAllOrder } from "../order/useGetAllOrder";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import Filter from "../../ui/Filter";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetAllOrder } from "../../services & hooks/apiBakaOrder";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const HERO_LIMIT = import.meta.env.VITE_HERO_LIMIT;

// export function TabelOrderHero() {
//   return (
//     <>
//       <Tabel feature="orderHero" dataObj={orderHero} />
//     </>
//   );
// }

export function TabelOrderComplete({ complete = true }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const queryClient = useQueryClient();

  const { allOrder, isLoadingAllOrder } = useGetAllOrder();

  //Setting filter n page for query allOrder --start
  const limitResult = complete ? PAGE_SIZE : HERO_LIMIT;
  const queryStatus = status ? `&status=${status}` : "";
  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["orderQuery", page, status],
    queryFn: () => apiGetAllOrder(page, limitResult, queryStatus),
  });

  //Set the page to 1 whenever user switch the filter status
  useEffect(
    function () {
      if (status) {
        setPage(1);
        searchParams.set("page", 1);
        setSearchParams(searchParams);
      }
    },

    //Utk Array Dependency useEffect dibwh ini, sengaja sy tdk masukkan searchParams dan setSearchParams, karena dy error (sdh di tes).
    [status]
  );
  //Setting filter n page for query allOrder --end

  if (isLoadingAllOrder || isLoadingBagasiQuery) return <Spinner />;

  //PRE-FETCHING procedure --start
  const pageCount = Math.ceil(Number(allOrder?.length) / limitResult); // 17/10 = 1.7 dibulatkan ke 2
  if (complete && allOrder?.length > PAGE_SIZE && page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page + 1, status],
      queryFn: () => apiGetAllOrder(page + 1, limitResult, queryStatus),
    });
  }
  if (complete && allOrder?.length > PAGE_SIZE && page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page - 1, status],
      queryFn: () => apiGetAllOrder(page - 1, limitResult, queryStatus),
    });
  }
  //PRE-FETCHING procedure --end

  //Make the final array to hold the (filter n page result) newData, to prevent error set it to empty array if (filter n page result) newData is still undefined --start
  let filteredOrder = newData || [];
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
  //Make the final array to hold the (filter n page result) newData, to prevent error set it to empty array if (filter n page result) newData is still undefined --end

  return (
    <>
      {complete ? <Filter type="order" setterStatus={setStatus} /> : ""}
      <Tabel feature="order" dataObj={filteredOrder} />
      {complete ? (
        <Pagination
          count={allOrder?.length}
          setterPage={setPage}
          newDataCount={newData?.length}
        />
      ) : (
        ""
      )}
    </>
  );
}
