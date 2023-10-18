import { useRecoilState } from "recoil";
import { FollowProps, visibleFollowAtom } from "./follow";
import { ConfirmType, confirmModal } from "@components/common/confirm-modal/ConfirmModal";
import { getConfig } from "@services/zalo-api/appInfo";
import { useUser } from '@atom/user/useUser';

export const useFollow = () => {

    const [visibleFollow, setVisibleFollow] = useRecoilState<FollowProps>(visibleFollowAtom);
    const { handleFollow } = useUser();

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

    return { visibleFollow, setVisibleFollow, handleFollowOA };
}