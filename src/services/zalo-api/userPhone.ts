import { CustomToastType, showCustomToast } from "@shared/common/CustomToast";
import axios from "axios";
import { getAccessToken, getPhoneNumber } from "zmp-sdk";

export const getNumber = async () => {
  const { number, token } = await getPhoneNumber({
    fail: (err) => {
      showCustomToast({
        type: CustomToastType.SUCCESS,
        message: "Bạn chưa cho phép cấp quyền số điện thoại",
      });
    },
  });
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
          secret_key: "kS1Cs1JcKRH8v8WiIRe4",
        },
      })
      .then((response) => {
        return response.data.data.number;
      })
      .catch((err) => {
        return 0;
      });
    return numberPhone;
  }
};
