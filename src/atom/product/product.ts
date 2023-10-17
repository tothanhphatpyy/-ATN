import { atom } from "recoil";
import { effects_UNSTABLE } from "@hooks/useRecoilLogger"

export const productAtom = atom({
    key: 'PRODUCT',
    default: [],
    effects_UNSTABLE
})

