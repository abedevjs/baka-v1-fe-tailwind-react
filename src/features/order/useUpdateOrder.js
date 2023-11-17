import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiUpdateOrder } from "../../services & hooks/apiBakaOrder";

export function useUpdateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => apiUpdateOrder(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["allOrder", "oneOrder", "userOrder"],
      });
      toast.success("Order berhasil di update");
      navigate(0); //Sengaja tdk di reload ke /user karena updateOrder available utk order.status  = 'Preparing', dan di bawah form updateOrder ada form uploadDokumen. Jadi setelah updateOrder, User bisa selanjutnya/sekalian uploadDokumen
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateOrder, isUpdating };
}
