import axios from "axios";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

//* www.nama.com/bagasi

export async function apiGetAllBagasi() {
  try {
    const res = await axios.get(`${BAKA_URL}/bagasi`, {
      withCredentials: true,
    });
    // console.log(res);
    return res?.data?.data?.bagasi;
  } catch (error) {
    console.log(error);
  }
}

export async function apiGetOneBagasi(id) {
  try {
    const res = await axios.get(`${BAKA_URL}/bagasi/${id}`, {
      withCredentials: true,
    });

    // console.log(res?.data?.data?.bagasi);
    return res?.data?.data?.bagasi;
  } catch (error) {
    console.log(error);
  }
}

export async function apiCreateBagasi(body) {
  try {
    const res = await axios.post(`${BAKA_URL}/bagasi`, body, {
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
