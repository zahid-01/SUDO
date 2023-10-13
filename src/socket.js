import { io } from "socket.io-client";
import API_BASE_URL from "./config/api";

export let socket;

export const socketConnect = (token = null) => {
  try {
    socket = io(API_BASE_URL, { auth: { token } });
  } catch (e) {
    console.log(e);
  }
};
