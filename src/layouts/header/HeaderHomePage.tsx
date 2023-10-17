import React, { FC } from "react";

import Text from "@shared/text/Text";
import { useRecoilValueLoadable } from "recoil";
import { userInfoSelector } from "@atom/user/user";

export const HeaderHomePage: FC = () => {
  const userInfo = useRecoilValueLoadable(userInfoSelector);

  return (
    <div>
    <div className="p-4">
      <div className="flex align-items-center">
        <img
          className="rounded-circle" style={{width : 50, height: 50}}
          src={
            /* userInfo?.profile_image */ "https://nhadepso.com/wp-content/uploads/2023/03/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg"
          }
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
