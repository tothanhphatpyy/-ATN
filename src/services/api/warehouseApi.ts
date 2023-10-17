import { ApiUtils } from './index';
import { PATH } from './path';

export const getWarehousesApi = async () => {
    return await ApiUtils.request(PATH.get_warehouses);
}
