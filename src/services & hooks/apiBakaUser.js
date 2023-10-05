import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiGetUser() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });
    // console.log(res.data.data.user);
    return res.data?.data?.user;
  } catch (error) {
    console.log(error);
  }
}
