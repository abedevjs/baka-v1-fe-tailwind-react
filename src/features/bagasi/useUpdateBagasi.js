import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateBagasi() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateBagasi, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, body }) => apiUpdateBagasi(id, body),
    onSuccess: () => {
      toast.success("Bagasi berhasil di update 🤗");
      queryClient.invalidateQueries({ queryKey: ["bagasi"] });
      navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateBagasi, isUpdating };
}