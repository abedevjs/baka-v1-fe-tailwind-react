import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateOrder } from "../../services & hooks/apiBakaOrder";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: ({ id, body }) => apiCreateOrder(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order", "userOrder"] });
      toast.success(
        "Permohonan Beli Bagasi berhasil! Silahkan upload Bukti Pembayaran ya kak 🤗"
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createOrder, isCreating };
}
