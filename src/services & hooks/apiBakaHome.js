const BAKA_URL = import.meta.env.VITE_BAKA_URL;

export async function apiGetHome() {
  try {
    const res = await fetch(`${BAKA_URL}`);

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
