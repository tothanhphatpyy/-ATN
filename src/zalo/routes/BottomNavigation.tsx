import React, { useMemo } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleFollow } from "@hooks/useFollow";
import { useAuth } from "@hooks/useAuth";
import { useUser } from "@atom/user/useUser";

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: "house",
  },
  "/favorite": {
    label: "Yêu thích",
    icon: "heart",
  },
  "/cart": {
    label: "Đặt chỗ của tôi",
    icon: "calendar-days",
  },
  "/chat": {
    label: "Tin nhắn",
    icon: "message",
  },
  "/profile": {
    label: "Cá nhân",
    icon: "face-grin",
  },
};

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/components/products/"];
export const REQUIRED_FOLLOW_PAGES = ["/cart", "/profile"];

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userInfo, handleFollow } = useUser();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);
  const isRequiredFollow = useMemo(() => {
    return REQUIRED_FOLLOW_PAGES.includes(location.pathname);
  }, [location]);

  if(isRequiredFollow){
    if(!userInfo?.follow_oa){
      handleFollow();
    }
  }

  if (noBottomNav) {
    return <></>;
  }

  return (
    <nav className="bottom-navigation dark__bg-1000 bg-light">
      {Object.entries(tabs).map(([path, tab]) => (
        <div
          key={path}
          onClick={() => {navigate(path)}}
          className={classNames("tab", { active: location.pathname === path })}
        >
          <FontAwesomeIcon icon={tab.icon as any} />
          <span>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavigation;
