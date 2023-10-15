import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateStatusBagasi } from "../../services & hooks/apiBakaAdmin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateStatusBagasi() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateStatusBagasi, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => apiUpdateStatusBagasi(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bagasi", "userBagasi"] });
      toast.success("Done. Cek Database Bagasi");
      navigate("/list-bagasi");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateStatusBagasi, isUpdating };
}
