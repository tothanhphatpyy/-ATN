import { useUser } from "@atom/user/useUser";
import { getConfig } from "@services/zalo-api/appInfo";
import { getNumber } from "@services/zalo-api/userPhone";
import {
  ConfirmType,
  confirmModal,
} from "@shared/common/ConfirmModal/ConfirmModal";
import { CustomToastType, showCustomToast } from "@shared/common/CustomToast";
import { useNavigate } from "react-router-dom";

const showSuccessToast = () => {
  showCustomToast({
    type: CustomToastType.SUCCESS,
    message: "Success",
  });
};

export const useFollow = () => {
  const navigate = useNavigate();
  const { userInfo, handleFollow, handleUpdatePhone } = useUser();

  const handleFollowOA = (path) => {
    confirmModal.show({
      type: ConfirmType.Follow,
      title: "Đăng ký mới",
      content: `Quan tâm ${getConfig(
        (c) => c.app.title
      )} để có thể sử dụng toàn bộ các tính năng của ứng dụng!`,
      acceptButton: {
        text: "Quan tâm ngay!",
        onClick: () => {
          handleFollow(path);
        },
      },
      cancelButton: {
        text: "Để sau",
      },
    });
  };

  const handleFollowPhone = (path) => {
    // if (!userInfo?.phone) {
      confirmModal.show({
        type: ConfirmType.Follow,
        title: "Đăng ký mới",
        content: `Cấp quyền truy cập số điện thoại cho ${getConfig(
          (c) => c.app.title
        )} để có thể sử dụng các tính năng đặt hàng, đăng ký thành viên..`,
        acceptButton: {
          text: "Truy cập ngay!",
          onClick: () => {
            handleUpdatePhone(path);
          },
        },
        cancelButton: {
          text: "Để sau",
        },
      });
    // } else navigate(path);
  };

  return { handleFollowOA, handleFollowPhone };
};
