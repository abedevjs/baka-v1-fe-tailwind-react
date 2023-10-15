import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect, useNavigate } from "react-router-dom";
import { apiUploadDokumen } from "../../services & hooks/apiBakaUpload";
import toast from "react-hot-toast";

export function useUploadDokumen() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: uploadDokumen, isLoading: isUploading } = useMutation({
    mutationFn: ({ id, body }) => apiUploadDokumen(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "bagasi", "order", "userOrder", "userBagasi"],
      });
      toast.success(
        "Dokumen berhasil di upload. Tim Baka memeriksa dokumen tsb 🤝"
      );

      // navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { uploadDokumen, isUploading };
}
