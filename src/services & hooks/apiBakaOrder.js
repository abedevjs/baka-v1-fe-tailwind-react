import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/order
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

//* www.nama.com/bagasi/888/order
export async function apiCreateOrder(id, body) {
  try {
    const res = await axios.post(`${BAKA_URL}/bagasi/${id}/order`, body, {
      withCredentials: true,
    });
    // .then((data) => console.log(data))
    // .catch((err) => {
    //   return err?.response?.data?.message;
    // });
    // console.log(res);

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
