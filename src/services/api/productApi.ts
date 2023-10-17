import { ApiUtils } from './index';
import { PATH } from './path';

export const getAllProductsApi = async (warehouseId: string) => {
    return await ApiUtils.request(PATH.get_all_products + warehouseId);
}

export const getProductsByPageApi = async (page: number, limit: number, warehouseId: string) => {
    const URL = PATH.get_products_by_page + `&offset=${page}` + `&limit=${limit}` + `&warehouse=${warehouseId}`
    return await ApiUtils.request(URL);
}
