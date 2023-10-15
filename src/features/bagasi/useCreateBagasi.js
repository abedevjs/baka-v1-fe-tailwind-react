import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateBagasi() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createBagasi, isLoading: isCreating } = useMutation({
    mutationFn: (body) => apiCreateBagasi(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bagasi", "userBagasi"] });
      toast.success(
        "Permohonan Jual Bagasi berhasil! Silahkan upload Tiket Keberangkatan ya kak 🤗"
      );
      // navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createBagasi, isCreating };
}
