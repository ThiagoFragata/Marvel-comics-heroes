import axios from "axios";
import md5 from "md5";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const marvelApi = {
    privateKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    timeStamp: Math.floor(Date.now() / 1000),
};
const hash = md5(
    marvelApi.timeStamp + marvelApi.privateKey + marvelApi.publicKey
);

export const token = hash;
