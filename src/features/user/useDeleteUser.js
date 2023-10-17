import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiDeleteUser } from "../../services & hooks/apiBakaUser";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: () => apiDeleteUser(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User berhasil dihapus. Good bye kak! 😭");
      // navigate("/home");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteUser, isDeleting };
}
