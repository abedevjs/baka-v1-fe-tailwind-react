import { useQuery } from "@tanstack/react-query";
import { apiGetOneBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";

export function useGetOneBagasi(id) {
  const { data: bagasi, isLoading } = useQuery({
    queryKey: ["bagasi"],
    queryFn: apiGetOneBagasi(id),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { bagasi, isLoading };
}
