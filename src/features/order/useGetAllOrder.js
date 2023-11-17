import { useQuery } from "@tanstack/react-query";
import { apiGetAllOrder } from "../../services & hooks/apiBakaOrder";

export function useGetAllOrder() {
  const { data: allOrder, isLoading: isLoadingAllOrder } = useQuery({
    queryKey: ["allOrder"],
    queryFn: apiGetAllOrder,
  });

  return { allOrder, isLoadingAllOrder };
}
