import React, { useMemo } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@hooks/useAuth";
import { useUser } from "@atom/user/useUser";
import { useFollow } from "@hooks/useFollow";

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
const TYPE_OA = import.meta.env.VITE_OA_TYPE;

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { requestLoginZalo } = useAuth();
  const { userInfo } = useUser();
  const { handleFollowOA, handleFollowPhone } = useFollow();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav) {
    return <></>;
  }

  if (!userInfo?.xid) {
    return null;
  }

  const handleNavigate = (path) => {
    const shouldFollow = REQUIRED_FOLLOW_PAGES.includes(path); //check xem OA là User hay Fanpage
    if (shouldFollow) {
      //trường hợp OA là User
      if (TYPE_OA == "user" && !userInfo?.phone) handleFollowPhone(path);
      //Trường hợp OA là Fanpage
      else if (TYPE_OA == "oa" && !userInfo?.follow_oa) handleFollowOA(path);
      //navigate page
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
          <FontAwesomeIcon icon={tab.icon as any} />
          <span>{tab.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavigation;
