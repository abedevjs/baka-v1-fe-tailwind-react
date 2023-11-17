import { useQuery } from "@tanstack/react-query";
import { apiGetAllBagasi } from "../../services & hooks/apiBakaBagasi";

export function useGetAllBagasi() {
  const { data: allBagasi, isLoading: isLoadingAllBagasi } = useQuery({
    queryKey: ["allBagasi"],
    queryFn: apiGetAllBagasi,
  });

  return { allBagasi, isLoadingAllBagasi };
}
