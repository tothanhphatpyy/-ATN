import { atom } from "recoil";

export type FollowProps = boolean;

export const visibleFollowAtom = atom<FollowProps>({
    key: `IS_VISIBILE_FOLLOW`,
    default: true,
});