import React, { FC } from "react";

import { userInfoState } from "atom/user-atom/user";
import Text from "@shared/text/Text";
import { useRecoilValueLoadable } from "recoil";

export const HeaderHomePage: FC = () => {
  const user = useRecoilValueLoadable(userInfoState);

  return (
    <div
      className="app-header no-border pl-4 flex-none bg-transparent"
      title={
        (
          <div className="flex align-items-center">
            <img
              className="w-12 h-12 rounded-full border-inset"
              src={user.contents.avatar}
            />
            <div className="ml-2">
              {/* <Text.Title size="small">{appConfig.app.title}</Text.Title> */}
              {user.state === "hasValue" ? (
                <Text className="font-bold text-lg text-white">
                  Hi,{" "}{user.contents.name}
                </Text>
              ) : (
                <Text>...</Text>
              )}
              <Text className="font-normal text-xs text-gray-300">
                Ngày mới tốt lành 👋
              </Text>
            </div>
          </div>
        ) as unknown as string
      }
    />
  );
};