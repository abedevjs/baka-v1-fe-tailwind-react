import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateOrder } from "../../services & hooks/apiBakaOrder";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: ({ id, body }) => apiCreateOrder(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allOrder", "userOrder"] });
      toast.success(
        "Permohonan Beli Bagasi berhasil! Silahkan upload Bukti Pembayaran ya kak"
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createOrder, isCreating };
}
