import { getUserInfo } from "zmp-sdk";

export const getUser = async () => {
  const res = await getUserInfo({});
  return res?.userInfo
};
