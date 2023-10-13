import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { TokenProps, UserInfoProps, userAtom, userTokenSelector } from "./user"
import { getUser } from "@services/zalo-api/user";
import { useMount, useRequest } from "ahooks";
import { signUpZaloApi, updateInfoUserApi } from "@services/api/authApi";
import { followOA } from "zmp-sdk";
import { CustomToastType, showCustomToast } from "@shared/common/CustomToast";

const OA_ID = import.meta.env.VITE_OA_ID;
const OA_TYPE = import.meta.env.VITE_OA_TYPE;

export const useUser = () => {
    const [ userInfo, setUserInfo ] = useRecoilState<UserInfoProps>(userAtom);
    const token = useRecoilValue<TokenProps>(userTokenSelector);

    const { runAsync: updateInfo } = useRequest(
        (data) => updateInfoUserApi(data, token),
        {
          cacheKey: "update_info",
          manual: true,
        }
      );
    
    const updateInfoUser = async() => {
    }

    const handleFollow = async () => {
        console.log('OA_TYPE', OA_TYPE)
        await followOA({
          id: OA_ID,
        })
          .then((res: any) => {
            updateInfo({
                name: userInfo.name,
                follow_oa: "1",
              })
                .then((res) => console.log('setPhoneUSer', res))
                .catch((err) => console.log(err));
        })
          .catch((err) => {showCustomToast({
              type: CustomToastType.ERROR,
              message: "Error",
          });
          return 0
      })};

    return {
        userInfo,
        setUserInfo,
        updateInfoUser,
        handleFollow,
        token
    }
}