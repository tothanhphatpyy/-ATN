const ID_COMPANY = import.meta.env.VITE_ID_COMPANY;

export const PATH = {
    //sign_up
    sign_up_web: '/front/login',
    sign_up_zalo: '/front/sign-up-zalo',
    //user
    update_user_zalo: '/front/profile',

    //category
    get_all_category: `/front/categories/${ID_COMPANY}`,
}