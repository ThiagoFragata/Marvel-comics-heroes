import axios from "axios";
import md5 from "md5";

export const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
});

const marvelApi = {
    privateKey: "0eb8fba0c55ecdd5ea438a2c7add3ade14481425",
    publicKey: "20a812bb3e9adaf952b5a9af769aeb94",
    ts: Date.now(),
};
const hash = md5(
    String(marvelApi.ts) + marvelApi.privateKey + marvelApi.publicKey
);

export const token =
    `?ts=${marvelApi.ts}` + `&apikey=${marvelApi.publicKey}` + `&hash=${hash}`;
