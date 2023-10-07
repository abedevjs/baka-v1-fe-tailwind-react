import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateUser } from "../../services & hooks/apiBakaUser";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: (data) => apiUpdateUser(data),
    onSuccess: () => {
      toast.success("update telpon berhasil");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isLoading };
}
