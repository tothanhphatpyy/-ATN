import { useRecoilState, useRecoilValue } from "recoil"
import { useMount, useRequest } from "ahooks";
import { WarehouseProps, warehouseAtom, warehouseIdSelector } from "./warehouse"
import { getWarehousesApi } from "@services/api/warehouseApi";

export const useWarehouse = () => {
    const [warehouse, setWarehouse] = useRecoilState<WarehouseProps[]>(warehouseAtom);
    const warehouseId = useRecoilValue<string | null>(warehouseIdSelector);

    const requestGetWarehouse = useRequest(() => getWarehousesApi(), {
        cacheKey: "get-warehouses",
        manual: true,
        onSuccess: (res: any) => setWarehouse(res?.data),
        onError: (err: any) => console.log("Api warehouse:", err.message)
    });

    useMount(() => {
        if (warehouse.length < 1) {
            requestGetWarehouse.runAsync();
        }
    })

    return {
        warehouse,
        warehouseId,
        requestGetWarehouse,
        setWarehouse,
    }
}