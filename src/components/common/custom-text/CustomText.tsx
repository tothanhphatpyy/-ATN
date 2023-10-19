import React from "react";
import classNames from "classnames";

interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, style, children }) => {
  return (
    <span
      className={classNames("font-base", className)}
      style={style}
    >
      {children}
    </span>
  );
};

export default Text;
