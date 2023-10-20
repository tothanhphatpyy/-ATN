import axios from "axios";
import { getAccessToken, getPhoneNumber } from "zmp-sdk";

export const getNumber = async () => {
  const { number, token } = await getPhoneNumber({ fail: console.warn });
  if (number) {
    return number;
  }
  if (token) {
    const accessToken = await getAccessToken({});
    const numberPhone = await axios
      .get(`https://graph.zalo.me/v2.0/me/info`, {
        headers: {
          access_token: accessToken,
          code: token,
          secret_key: "9TyRUKHRQJ29XLopwZVG",
        },
      })
      .then((response) => {
        return response.data.data.number;
      });
    return numberPhone;
  }
};