import { ApiUtils } from './index';
import { PATH } from './path';

export const getAllCategoriesApi = async () => {
    return await ApiUtils.request(PATH.get_all_categories);
}
