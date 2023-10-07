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

export async function apiUpdateUser(data) {
  try {
    const res = await axios({
      url: `${BAKA_URL}/user/update`,
      method: "patch",
      data,
    }).then((abe) => console.log(abe));
    return res;
  } catch (error) {
    console.log(error);
  }
}
