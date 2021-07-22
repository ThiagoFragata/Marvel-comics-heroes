import axios from "axios";
import md5 from "md5";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const marvelApi = {
    privateKey: "0eb8fba0c55ecdd5ea438a2c7add3ade14481425",
    publicKey: "20a812bb3e9adaf952b5a9af769aeb94",
    timeStamp: Math.floor(Date.now() / 1000),
};
const hash = md5(
    marvelApi.timeStamp + marvelApi.privateKey + marvelApi.publicKey
);

export const token = hash