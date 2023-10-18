import { useUser } from "@atom/user/useUser";
import { getConfig } from "@services/zalo-api/appInfo";
import {
  ConfirmType,
  confirmModal,
} from "@shared/common/ConfirmModal/ConfirmModal";
import { useNavigate } from "react-router-dom";

export const usePhone = () => {
  const navigate = useNavigate();
  const { userInfo, user, setUser, handleUpdatePhone } = useUser();

  const handleFollowPhone = (path) => {
      confirmModal.show({
        type: ConfirmType.Phone,
        title: "Đăng ký mới",
        content: `Cấp quyền truy cập số điện thoại cho ${getConfig(
          (c) => c.app.title
        )} để có thể sử dụng các tính năng đặt hàng, đăng ký thành viên..`,
        acceptButton: {
          text: "Truy cập ngay!",
          onClick: () => {
            //check xem có đang dùng nền tảng zalo không
            const app = navigator.userAgent.indexOf("Zalo");
            if (app !== -1) handleUpdatePhone(path);
            else {
              // xét lại phone khi dùng nền tảng web
              setUser({...user, user : {...userInfo, phone: '0999999999'} as any })
              navigate(path) 
            };
          },
        },
        cancelButton: {
          text: "Để sau",
        },
      });
  };

  return { handleFollowPhone };
};
