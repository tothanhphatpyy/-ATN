import React from 'react';

interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Text;