import { useQuery } from "@tanstack/react-query";
import { apiGetAllBagasi } from "../../services & hooks/apiBakaBagasi";

export function useGetAllBagasi() {
  const { data: bagasi, isLoading } = useQuery({
    queryKey: ["bagasi"],
    queryFn: apiGetAllBagasi,
  });

  return { bagasi, isLoading };
}
