import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetUser } from "../../services & hooks/apiBakaUser";
import toast from "react-hot-toast";

export function useGetUser() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetUser,

    // onSuccess: (data) => {
    //   queryClient.setQueriesData("user", [...data]);
    // },
  });

  return { data, isLoading };
}
