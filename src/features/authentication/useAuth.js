import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiIsAuthenticated } from "../../services & hooks/apiBakaAuth";
import toast from "react-hot-toast";

export function useIsAuthenticated() {
  const queryClient = useQueryClient();
  const { data: isAuthenticated, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiIsAuthenticated,
  });

  return { isAuthenticated, isLoading };
}
