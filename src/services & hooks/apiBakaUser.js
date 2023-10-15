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
    throw new Error(error.response.data.message);
  }
}

export async function apiGetUserOrder() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });
    // console.log(res.data?.data?.user?.order);
    return res.data?.data?.user?.order;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function apiGetUserBagasi() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });
    // console.log(res.data?.data?.user?.bagasi);
    return res.data?.data?.user?.bagasi;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function apiUpdateUser(body) {
  try {
    const res = await axios.patch(`${BAKA_URL}/user/update`, body, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
