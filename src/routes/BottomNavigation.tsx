import classNames from "classnames";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Iconly } from "react-iconly";

import { useUser } from "@atom/user/useUser";
import { usePhone } from "@hooks/usePhone";

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: "Home",
  },
  "/category": {
    label: "Danh mục",
    icon: "Category",
  },
  "/cart": {
    label: "Đặt chỗ của tôi",
    icon: "Buy",
  },
  "/chat": {
    label: "Tin nhắn",
    icon: "Chat",
  },
  "/profile": {
    label: "Cá nhân",
    icon: "User",
  },
};

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/cart", "/components/products/"];
export const REQUIRED_FOLLOW_PAGES = ["/cart", "/profile"];
const TYPE_OA = import.meta.env.VITE_OA_TYPE;

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userInfo } = useUser();
  const { handleFollowPhone } = usePhone();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav) {
    return <></>;
  }

  // if (!userInfo?.xid) {
  //   return null;
  // }

  const handleNavigate = (path) => {
    const shouldFollow = REQUIRED_FOLLOW_PAGES.includes(path); //check xem có đang vào trang require phone hay không
    if (shouldFollow) {
      //trường hợp chưa đăng ký phone
      if (!userInfo?.phone) handleFollowPhone(path);
      else navigate(path);
    } else navigate(path);
  };

  return (
    <nav className="bottom-navigation dark__bg-1000 bg-light">
      {Object.entries(tabs).map(([path, tab]) => (
        <div
          key={path}
          onClick={() => {
            handleNavigate(path);
          }}
          className={classNames("tab", { active: location.pathname === path })}
        >
          <Iconly name={tab.icon} size={24} stroke="regular" />
        </div>
      ))}
    </nav>
  );
};

export default BottomNavigation;
