import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiUploadDokumen } from "../../services & hooks/apiBakaUpload";

export function useUploadDokumen() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: uploadDokumen, isLoading: isUploading } = useMutation({
    mutationFn: ({ id, body }) => apiUploadDokumen(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "allBagasi", "allOrder", "userOrder", "userBagasi"],
      });
      toast.success("Dokumen berhasil di upload. Kami validasi dulu ya kak");

      // navigate("/user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { uploadDokumen, isUploading };
}
