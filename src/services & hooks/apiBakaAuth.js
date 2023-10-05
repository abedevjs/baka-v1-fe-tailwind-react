import axios from "axios";
import toast from "react-hot-toast";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiIsAuthenticated() {
  try {
    const res = await axios.get(`${BAKA_URL}`, {
      withCredentials: true,
    });

    // if (res.data?.isAuthenticated == false)
    //   toast.success("Terima kasih kak 😊");
    // else toast.success("Selamat datang kak 😊");

    return res.data?.isAuthenticated;
  } catch (error) {
    console.log(error);
  }
}
