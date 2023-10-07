import { useQuery } from "@tanstack/react-query";
import { apiGetAllOrder } from "../../services & hooks/apiBakaOrder";

export function useGetAllOrder() {
  const { data: order, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: apiGetAllOrder,
  });

  return { order, isLoading };
}
