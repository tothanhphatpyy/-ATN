import React, { FC } from "react";
import { Text } from "@components/common";

interface CurrencyProps {
  value?: number;
  currency?: "vi-VN" | "en-US";
  className?: string;
}

const Currency: FC<CurrencyProps> = ({
  value = 0,
  currency = "vi-VN",
  className,
}) => {
  const formattedAmount = value?.toLocaleString(currency, {
    style: "currency",
    currency: currency === "vi-VN" ? "VND" : "USD",
  });

  return (
    <React.Fragment>
      <Text className={className}>{formattedAmount}</Text>
    </React.Fragment>
  );
};

export default Currency;
