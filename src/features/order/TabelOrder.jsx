import { useGetAllOrder } from "../order/useGetAllOrder";
import Pagination from "../../ui/Pagination";
import Tabel from "../../ui/Tabel";
import Spinner from "../../ui/Spinner";
import { useGetAllBagasi } from "../bagasi/useGetAllBagasi";
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

  const { order, isLoading: isLoadingOrder } = useGetAllOrder();
  const { bagasi, isLoading: isLoadingBagasi } = useGetAllBagasi();

  const limitResult = complete ? PAGE_SIZE : HERO_LIMIT;
  const queryStatus = status ? `&status=${status}` : "";

  const { data: newData, isLoading: isLoadingBagasiQuery } = useQuery({
    queryKey: ["orderQuery", page, status],
    queryFn: () => apiGetAllOrder(page, limitResult, queryStatus),
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

  // if (isLoadingOrder || isLoadingBagasi || isLoadingBagasiQuery)
  if (isLoadingBagasiQuery) return <Spinner />;

  //PRE-FETCHING
  const pageCount = Math.ceil(Number(bagasi?.length) / limitResult); // 17/10 = 1.7 dibulatkan ke 2
  if (complete && bagasi?.length > PAGE_SIZE && page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page + 1, status],
      queryFn: () => apiGetAllOrder(page + 1, limitResult, queryStatus),
    });
  }
  if (complete && bagasi?.length > PAGE_SIZE && page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orderQuery", page - 1, status],
      queryFn: () => apiGetAllOrder(page - 1, limitResult, queryStatus),
    });
  }

  const orderDetails = newData?.map((el) => ({
    jumlahKg: el.jumlahKg,
    status: el.status,
    waktuBerangkat: bagasi?.find((bag) => bag._id == el.bagasi._id)
      .waktuBerangkat,
    dari: bagasi?.find((bag) => bag._id == el.bagasi._id).dari,
    tujuan: bagasi?.find((bag) => bag._id == el.bagasi._id).tujuan,
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
      {complete ? <Filter type="order" setterStatus={setStatus} /> : ""}
      <Tabel feature="order" dataObj={filteredOrder} />
      {complete ? (
        <Pagination
          count={order?.length}
          setterPage={setPage}
          newDataCount={newData?.length}
        />
      ) : (
        ""
      )}
    </>
  );
}
