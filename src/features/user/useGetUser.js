import { useQuery } from "@tanstack/react-query";
import { apiGetUser } from "../../services & hooks/apiBakaUser";

export function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetUser,

    // onSuccess: (data) => {
    //   queryClient.setQueriesData("user", [...data]);
    // },
  });

  return { user, isLoading };
}
