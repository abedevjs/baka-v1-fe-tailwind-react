import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiDeleteOrder } from "../../services & hooks/apiBakaOrder";

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteOrder, isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteOrder(id),
    onSuccess: () => {
      toast.success("Order berhasil dihapus 🤝");
      queryClient.invalidateQueries({ queryKey: ["order"] });
      navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteOrder, isDeleting };
}
