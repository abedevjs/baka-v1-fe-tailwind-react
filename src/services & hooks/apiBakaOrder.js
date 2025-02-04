import axios from "axios";
import { decode } from "../utilities/cryptoJS";

const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/order
export async function apiGetAllOrder(page, limitResult, queryStatus) {
  const query =
    page > 0 ? `?page=${page}&limit=${limitResult}${queryStatus}` : "";

  try {
    const res = await axios.get(`${BAKA_URL}/order${query}`, {
      withCredentials: true,
    });

    // if (page > 0) return res?.data;

    const data = decode(res.data.data.encryptedData);

    // return res?.data?.data?.order;
    return data;
  } catch (error) {
    console.log(error);
  }
}

//* www.nama.com/order/:id
export async function apiGetOneOrder(id) {
  try {
    const res = await axios.get(`${BAKA_URL}/order/${id}`, {
      withCredentials: true,
    });

    const data = decode(res.data.data.encryptedData);

    // return res?.data?.data?.order;
    return data;
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

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/order/888
export async function apiUpdateOrder(id, body) {
  try {
    const res = await axios.patch(`${BAKA_URL}/order/${id}`, body, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/order/888/delivered
export async function apiDeliveredOrder(id) {
  try {
    const res = await axios.patch(`${BAKA_URL}/order/${id}/delivered`, null, {
      withCredentials: true,
    });

    return res.data.data;
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
