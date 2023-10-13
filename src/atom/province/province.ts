import { atom } from "recoil";
import {effects_UNSTABLE} from "@hooks/useRecoilLogger"

export interface ProvinceProps {
    code: string,
    codename: string,
    division_type: string,
    name: string,
    phone_code: string,
}

export const provinceAtom = atom<ProvinceProps[]>({
    key: `PROVINCE`,
    default: [],
    effects_UNSTABLE,
});