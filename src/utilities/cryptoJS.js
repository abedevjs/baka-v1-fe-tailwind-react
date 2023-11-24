import CryptoJS from "crypto-js";

const CRYPTOJS_SECRET_KEY = import.meta.env.VITE_CRYPTOJS_SECRET_KEY;

// const secretKey = "muhammadakbar";

// Encrypt
export function encode(dataObj) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(dataObj),
    CRYPTOJS_SECRET_KEY
  ).toString();
}

// Decrypt
export function decode(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, CRYPTOJS_SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
}
