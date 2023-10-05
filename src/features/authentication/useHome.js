import { useQuery } from "@tanstack/react-query";
import { apiGetHome } from "../../services & hooks/apiBakaHome";

export function useHome() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useQuery({
    queryHash: [""],
    queryFn: apiGetHome,
  });

  return { data, isLoading };
}
