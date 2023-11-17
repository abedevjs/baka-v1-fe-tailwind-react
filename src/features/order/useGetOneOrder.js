import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { apiGetOneOrder } from "../../services & hooks/apiBakaOrder";

export function useGetOneOrder() {
  const { id } = useParams();
  const { data: oneOrder, isLoading: isLoadingOneOrder } = useQuery({
    queryKey: ["oneOrder", id],
    queryFn: () => apiGetOneOrder(id),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { oneOrder, isLoadingOneOrder };
}
