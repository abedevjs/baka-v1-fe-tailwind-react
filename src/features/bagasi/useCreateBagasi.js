import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateBagasi } from "../../services & hooks/apiBakaBagasi";
import toast from "react-hot-toast";

export function useCreateBagasi() {
  const queryClient = useQueryClient();
  const { mutate: createBagasi, isLoading: isCreating } = useMutation({
    mutationFn: (body) => apiCreateBagasi(body),
    onSuccess: () => {
      toast.success(
        "Permohonan Jual Bagasi kakak sedang di proses oleh tim Baka 🤗"
      );
      queryClient.invalidateQueries({ queryKey: ["bagasi"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createBagasi, isCreating };
}
