import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBagasi() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteBagasi, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteBagasi(id),
    onSuccess: () => {
      toast.success("Bagasi berhasil dihapus 🤝");
      queryClient.invalidateQueries({ queryKey: ["bagasi"] });
      navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteBagasi, isDeleting };
}
