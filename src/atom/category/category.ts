import { atom } from "recoil";
import {effects_UNSTABLE} from "@hooks/useRecoilLogger"

export interface CategoryProps {
    xid: string,
    name: string,
    image_url: string,
}

export const categoryAtom = atom<CategoryProps[]>({
    key: `ALL_CATEGORY`,
    default: [],
    effects_UNSTABLE,
});