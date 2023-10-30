import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiUpdateStatusOrder } from "../../services & hooks/apiBakaAdmin";

export function useUpdateStatusOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateStatusOrder, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => apiUpdateStatusOrder(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order", "userOrder", "bagasi"],
      });
      toast.success("Done. Cek Database Order");
      navigate("/order");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateStatusOrder, isUpdating };
}
