import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiDeliveredOrder } from "../../services & hooks/apiBakaOrder";

export function useDeliveredOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deliveredOrder, isLoading: isCompleting } = useMutation({
    mutationFn: (id) => apiDeliveredOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allOrder", "userOrder", "allBagasi", "user"],
      });
      toast.success("Order selesai. Terima kasih kak");
      navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deliveredOrder, isCompleting };
}
