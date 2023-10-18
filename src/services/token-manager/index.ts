import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { StorageKey } from "../storage/index";
//import { refreshToken } from "./refreshToken";


export const isTokenValid = () => {
  const token = JSON.parse(localStorage.getItem(StorageKey.Authen) as any);
  let decode = token && jwt_decode(token);
  let current_time = dayjs(new Date());
  return current_time < dayjs(decode?.exp * 1000);
};

export const getAccessToken = async () => {
  const token = JSON.parse(localStorage.getItem(StorageKey.Authen) as any);
  return token;
};

export const onRefreshToken = async(onDone) => {

  const old_token = window?.localStorage.getItem(StorageKey.Authen);

  if (old_token) {
    const token = await refreshToken(old_token );

    if (token) {
      // setCookie("shopDunkToken", token,token);
      window?.localStorage.setItem(StorageKey.Authen, token);
      // setAuthen({
      //   ...authenState,
      //   token: token,
      // });
      onDone(token);
    } else {
      try {
      //   setCookie("shopDunkToken", "");
        window?.localStorage.setItem(StorageKey.Authen, "");
        // setAuthen({
        //   ...authenState,
        //   token: "",
        // });
      } catch (error) {}
    }
  }
}
