import axios from "axios";
import toast from "react-hot-toast";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiIsAuthenticated() {
  try {
    const res = await axios.get(`${BAKA_URL}`, {
      withCredentials: true,
    });

    return res.data?.isAuthenticated;
  } catch (error) {
    console.log(error);
  }
}
