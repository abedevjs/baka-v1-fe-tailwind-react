import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiGetAllOrder() {
  try {
    const res = await axios.get(`${BAKA_URL}/order`, {
      withCredentials: true,
    });
    // console.log(res);
    return res?.data?.data?.order;
  } catch (error) {
    console.log(error);
  }
}
