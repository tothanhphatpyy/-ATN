import { followOA } from 'zmp-sdk';
import { useRecoilState, useSetRecoilState } from "recoil";
import { useRequest } from "ahooks";
import { signUpZaloApi, updateInfoUserApi } from "@services/api/authApi";
import { getUser } from "@services/zalo-api/user";
import { TokenProps, UserInfoProps, userAtom } from "@atom/user/user";

const COMPANY_ID = import.meta.env.VITE_ID_COMPANY;

export const useAuth = () => {
    const setUserInfo = useSetRecoilState<UserInfoProps | null>(userAtom);

    const requestLoginZalo = useRequest((data) => signUpZaloApi(data), {
        cacheKey: "login-web",
        manual: true,
    });

    const loginZalo = async() => {
        const userInfoZalo = await getUser();
        const userInfo = {
            id: userInfoZalo.id, 
            name: userInfoZalo.name, 
            company_id : COMPANY_ID,
            follow_oa: userInfoZalo.idByOA || 0,
        };
        requestLoginZalo.runAsync(userInfo).then((res: any) => {
            console.log('login-zalo', res.data);
            setUserInfo(res.data);
        }).catch((err) => console.log('login-fail', err));
    }

    return { requestLoginZalo, loginZalo };
}