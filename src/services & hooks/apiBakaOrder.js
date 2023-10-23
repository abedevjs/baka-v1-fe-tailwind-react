import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/order
export async function apiGetAllOrder(page, PAGE_SIZE, queryStatus) {
  const query =
    page > 0 ? `?page=${page}&limit=${PAGE_SIZE}${queryStatus}` : "";

  try {
    const res = await axios.get(`${BAKA_URL}/order${query}`, {
      withCredentials: true,
    });

    // if (page > 0) return res?.data;

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

//* www.nama.com/order/888
export async function apiUpdateOrder(id, body) {
  console.log(id, body);
  try {
    const res = await axios.patch(`${BAKA_URL}/order/${id}`, body, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/order/888
export async function apiDeleteOrder(id) {
  try {
    const res = await axios.delete(`${BAKA_URL}/order/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
