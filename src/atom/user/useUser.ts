import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  TokenProps,
  UserInfoProps,
  UserProps,
  userAtom,
  userInfoSelector,
  userTokenSelector,
} from "./user";
import { getUser } from "@services/zalo-api/user";
import { useMount, useRequest } from "ahooks";
import { signUpZaloApi, updateInfoUserApi } from "@services/api/authApi";
import { followOA } from "zmp-sdk";
import { CustomToastType, showCustomToast } from "@shared/common/CustomToast";
import { getNumber } from "@services/zalo-api/userPhone";
import { useNavigate } from "react-router-dom";

const OA_ID = import.meta.env.VITE_OA_ID;

export const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState<UserInfoProps>(userAtom);
  const token = useRecoilValue<TokenProps>(userTokenSelector);
  const userInfo = useRecoilValue<UserProps | null>(userInfoSelector);

  const requestUpdateInfoUser = useRequest(
    (data) => updateInfoUserApi(data, token),
    {
      cacheKey: "update_info",
      manual: true,
    }
  );

  const handleUpdatePhone = async (path) => {
    const phoneNumber = await getNumber();
    let userInfoUpdate = { ...userInfo, phone: phoneNumber };
    setUser({ ...user, user: userInfoUpdate as any });
    navigate(path);
    requestUpdateInfoUser.runAsync({ name: userInfoUpdate.name, phone: phoneNumber })
      .then((res) => console.log("res-update", res))
      .catch((err) => console.log("err", err));
  };

  const handleFollow = async (path) => {
    await followOA({
      id: OA_ID,
    })
      .then((res: any) => {
        setUser({...user, user : {...userInfo, follow_oa: 1} as any })
        navigate(path);
        requestUpdateInfoUser.runAsync({ name: userInfo?.name, follow_oa: 1 })
          .then((res) => console.log("setPhoneUSer", res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        showCustomToast({
          type: CustomToastType.ERROR,
          message: "Error",
        });
        return 0;
      });
  };

  return {
    requestUpdateInfoUser,
    user,
    token,
    userInfo,
    setUser,
    handleFollow,
    handleUpdatePhone,
  };
};
