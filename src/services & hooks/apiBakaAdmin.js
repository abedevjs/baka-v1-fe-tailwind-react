import axios from "axios";
import { decode } from "../utilities/cryptoJS";

const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiGetAdmin() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });

    const data = decode(res.data.data.encryptedData);

    // return res.data?.data?.user?.email;
    return data?.email;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/admin/status-bagasi/888
export async function apiUpdateStatusBagasi(id, body) {
  try {
    const res = await axios.patch(
      `${BAKA_URL}/admin/status-bagasi/${id}`,
      body,
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/admin/activate-order/777
export async function apiUpdateStatusOrder(id, body) {
  try {
    const res = await axios.patch(
      `${BAKA_URL}/admin/activate-order/${id}`,
      body,
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
