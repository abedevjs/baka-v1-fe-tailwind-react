import { useQuery } from "@tanstack/react-query";
import { apiGetUserOrder } from "../../services & hooks/apiBakaUser";

export function useGetUserOrder() {
  const { data: userOrder, isLoading: isLoadingUserOrder } = useQuery({
    queryKey: ["userOrder"],
    queryFn: apiGetUserOrder,
  });

  // console.log(userOrder);
  return { userOrder, isLoadingUserOrder };
}
