import axios from "axios";
import { toFormData } from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/upload/:id?
export async function apiUploadDokumen(id, body) {
  try {
    const res = await axios.patch(`${BAKA_URL}/upload/${id}`, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": `multipart/form-data; boundary=${body.getBoundary()}`,
      },
    });

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
