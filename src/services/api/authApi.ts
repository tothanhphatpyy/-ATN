import { ApiUtils } from './index';
import { PATH } from './path';

export const signUpWebApi = async (data: any) => {
    return await ApiUtils.post(PATH.sign_up_web, data);
}
export const signUpZaloApi = async (data: any) => {
    return await ApiUtils.post(PATH.sign_up_zalo, data);
}
export const updateInfoUserApi = async (data, token) => {
    return await ApiUtils.post(PATH.update_user_zalo, data, {token: token});
}
