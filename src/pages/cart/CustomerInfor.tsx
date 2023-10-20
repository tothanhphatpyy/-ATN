import React from "react";
import { Text } from "@components/common";

const CustomerInfor = () => {
  return (
    <>
      <div className="bg-white p-3">
        <Text className="body-large-semibold text-black mb-3">
          Thông tin khách hàng
        </Text>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Text className="body-medium-medium text-gray-700">
            Tên khách hàng
          </Text>
          <Text className="body-medium-medium text-black">Andy Lexian</Text>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Text className="body-medium-medium text-gray-700">
            Số điện thoại
          </Text>
          <Text className="body-medium-medium text-black">01234567890</Text>
        </div>
      </div>
    </>
  );
};

export default CustomerInfor;
