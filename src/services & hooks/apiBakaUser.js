import axios from "axios";
import { decode } from "../utilities/cryptoJS";
const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiGetUser() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });
    // console.log(res.data.data.user);
    // console.log(res);
    // console.log(decode(res.data.data.encryptedData));
    const data = decode(res.data.data.encryptedData);

    // return res.data?.data?.user;
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

//* www.nama.com/user/all
export async function apiGetAllUser() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/all`, {
      withCredentials: true,
    });

    const data = decode(res.data.data.encryptedData);

    // return res.data.data.data;
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function apiGetUserOrder() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });

    const data = decode(res.data.data.encryptedData);

    // return res.data?.data?.user?.order;
    return data?.order;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function apiGetUserBagasi() {
  try {
    const res = await axios.get(`${BAKA_URL}/user/profil`, {
      withCredentials: true,
    });
    // console.log(res);

    const data = decode(res.data.data.encryptedData);

    // return res.data?.data?.user?.bagasi;
    return data?.bagasi;
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

//* www.nama.com/user/hapus
export async function apiDeleteUser() {
  try {
    const res = await axios.delete(`${BAKA_URL}/user/hapus`, {
      withCredentials: true,
    });
    return res.data?.data?.user;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
