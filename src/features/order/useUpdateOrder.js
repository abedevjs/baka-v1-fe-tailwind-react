import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiUpdateOrder } from "../../services & hooks/apiBakaOrder";
import toast from "react-hot-toast";

export function useUpdateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => apiUpdateOrder(id, body),
    onSuccess: () => {
      toast.success("Order berhasil di update 🤗");
      queryClient.invalidateQueries({ queryKey: ["order"] });
      navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateOrder, isUpdating };
}
