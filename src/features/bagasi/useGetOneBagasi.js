import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { apiGetOneBagasi } from "../../services & hooks/apiBakaBagasi";

export function useGetOneBagasi() {
  const { id } = useParams();
  const { data: oneBagasi, isLoading: isLoadingOneBagasi } = useQuery({
    queryKey: ["oneBagasi", id],
    queryFn: () => apiGetOneBagasi(id),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { oneBagasi, isLoadingOneBagasi };
}
