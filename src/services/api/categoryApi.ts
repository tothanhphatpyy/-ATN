import { ApiUtils } from './index';
import { PATH } from './path';

export const getAllCategoryApi = async () => {
    return await ApiUtils.request(PATH.get_all_category);
}
