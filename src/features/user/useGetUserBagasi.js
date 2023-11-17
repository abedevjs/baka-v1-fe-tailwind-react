import { useQuery } from "@tanstack/react-query";
import { apiGetUserBagasi } from "../../services & hooks/apiBakaUser";

export function useGetUserBagasi() {
  const { data: userBagasi, isLoading: isLoadingUserBagasi } = useQuery({
    queryKey: ["userBagasi"],
    queryFn: apiGetUserBagasi,
  });

  return { userBagasi, isLoadingUserBagasi };
}
