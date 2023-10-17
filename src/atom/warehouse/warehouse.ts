import { atom, selector } from "recoil";
import {effects_UNSTABLE} from "@hooks/useRecoilLogger"

export interface WarehouseProps {
    company_id: string | number;
    dark_logo: any;
    dark_logo_url: string;
    logo: any;
    logo_url: string;
    name: string;
    online_store_enabled: string | number | boolean;
    slug: string;
    xid: string;
}

export const warehouseAtom = atom<WarehouseProps[]>({
    key: "WAREHOUSE",
    default: [],
    effects_UNSTABLE
});

export const warehouseIdSelector = selector<string | null>({
    key: "WAREHOUSE_ID",
    get: ({ get }) => {
        const warehouse = get(warehouseAtom);
        if (warehouse) {
            const warehouseId = warehouse[0]?.xid;
            return warehouseId;
        }
        return null;
    }
})