import { useQuery } from "@tanstack/react-query";
import { apiGetAllUser } from "../../services & hooks/apiBakaUser";

export function useGetAllUser() {
  const { data: allUser, isLoading: isLoadingAllUser } = useQuery({
    queryKey: ["allUser"],
    queryFn: apiGetAllUser,
  });

  return { allUser, isLoadingAllUser };
}
