import { useQuery } from "@tanstack/react-query";
import { apiGetAdmin } from "../../services & hooks/apiBakaAdmin";

export function useGetAdmin() {
  const { data: admin, isLoading: isLoadingAdmin } = useQuery({
    queryKey: ["admin"],
    queryFn: apiGetAdmin,
  });
  return { admin, isLoadingAdmin };
}
