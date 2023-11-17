import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/bagasi
export async function apiGetAllBagasi(page, limitResult, queryStatus) {
  const query =
    page > 0 ? `?page=${page}&limit=${limitResult}${queryStatus}` : "";

  try {
    const res = await axios.get(`${BAKA_URL}/bagasi${query}`, {
      withCredentials: true,
    });
    // console.log(res);
    return res?.data?.data?.bagasi;
  } catch (error) {
    console.log(error);
  }
}

//* www.nama.com/bagasi/888
export async function apiGetOneBagasi(id) {
  try {
    const res = await axios.get(`${BAKA_URL}/bagasi/${id}`, {
      withCredentials: true,
    });

    return res?.data?.data?.bagasi;
  } catch (error) {
    console.log(error);
  }
}

//* www.nama.com/bagasi
export async function apiCreateBagasi(body) {
  try {
    const res = await axios.post(`${BAKA_URL}/bagasi`, body, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/bagasi/888
export async function apiUpdateBagasi(id, body) {
  try {
    const res = await axios.patch(`${BAKA_URL}/bagasi/${id}`, body, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/bagasi/888
export async function apiDeleteBagasi(id) {
  try {
    const res = await axios.delete(`${BAKA_URL}/bagasi/${id}`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
