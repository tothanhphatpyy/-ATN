import { useRecoilState, useSetRecoilState } from "recoil";
import { useRequest } from "ahooks";
import { signUpZaloApi, updateInfoUserApi } from "@services/api/authApi";
import { getUser } from "@services/zalo-api/user";
import { TokenProps, UserInfoProps, userAtom } from "@atom/user/user";

export const useAuth = () => {
    const setUserInfo = useSetRecoilState<UserInfoProps | null>(userAtom);

    const requestLoginZalo = useRequest((data) => signUpZaloApi(data), {
        cacheKey: "login-web",
        manual: true,
    });

    const loginZalo = async() => {
        const userInfoZalo = await getUser();
        requestLoginZalo.runAsync({id: userInfoZalo.id, name: userInfoZalo.name}).then((res: any) => {
            console.log('login-zalo', res.data);
            setUserInfo(res.data);
        }).catch((err) => console.log('login-fail', err));
    }

    return { requestLoginZalo, loginZalo };
}