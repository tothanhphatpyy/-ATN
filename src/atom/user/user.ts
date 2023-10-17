import { atom, selector } from "recoil";
import {effects_UNSTABLE} from "@hooks/useRecoilLogger"
export interface UserInfoProps {
  user: UserProps | null;
  token: string | null;
}

export interface UserProps {
  xid: string;
  name: string | null;
  phone?: string | number | null;
  profile_image?: string | null;
  email?: string | null;
  address?: string | null;
  follow_oa: number | string;
}
export type TokenProps = string | null;

export const userAtom = atom<UserInfoProps>({
  key: "USER",
  default: {
    user: null,
    token: null,
  },
  effects_UNSTABLE
});

export const userInfoSelector = selector<UserProps | null>({
  key: "USER_INFO",
  get: ({ get }) => {
    const userInfo = get(userAtom);
    return userInfo.user ?? null;
  },
});

export const userTokenSelector = selector<TokenProps>({
  key: "USER_TOKEN",
  get: ({ get }) => {
    const userInfo = get(userAtom);
    return userInfo.token ?? null;
  },
});