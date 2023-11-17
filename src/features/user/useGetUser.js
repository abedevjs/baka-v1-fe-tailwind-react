import { useQuery } from "@tanstack/react-query";
import { apiGetUser } from "../../services & hooks/apiBakaUser";

export function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetUser,
  });

  return { user, isLoading };
}
