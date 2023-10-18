import React, { FC } from "react";

import Text from "@components/text/Text";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { userInfoSelector } from "@atom/user/user";

export const WelcomeUser: FC = () => {
  const userInfo = useRecoilValue(userInfoSelector);
  return (
    <div>
    <div className="">
      <div className="flex align-items-center">
        <img
          className="rounded-circle" style={{width : 50, height: 50}}
          src={userInfo?.profile_image}
        />
        <div className="ml-2">
          <Text className="font-bold text-lg text-black">{userInfo?.name}</Text>
          <Text className="font-normal text-base text-gray-800 mt-1">
            Ngày mới tốt lành 👋
          </Text>
        </div>
      </div>
    </div>
    </div>
  );
};
