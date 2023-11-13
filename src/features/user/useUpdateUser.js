import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateUser } from "../../services & hooks/apiBakaUser";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: (body) => apiUpdateUser(body),
    onSuccess: () => {
      toast.success("Update Data User berhasil");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
