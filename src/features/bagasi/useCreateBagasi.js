import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";

export function useCreateBagasi() {
  const queryClient = useQueryClient();
  const { mutate: createBagasi, isLoading: isCreating } = useMutation({
    mutationFn: (body) => apiCreateBagasi(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allBagasi", "userBagasi"] });
      toast.success(
        "Permohonan Jual Bagasi berhasil! Silahkan upload Tiket Keberangkatan ya kak "
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createBagasi, isCreating };
}
