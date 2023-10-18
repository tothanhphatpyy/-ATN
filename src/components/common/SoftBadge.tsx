import React from 'react';
import classNames from 'classnames';

interface SoftBadgeProps {
  bg?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  pill?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const SoftBadge: React.FC<SoftBadgeProps> = ({ bg = 'primary', pill, children, className }) => {
  return (
    <div
      className={classNames(className, `badge badge-soft-${bg}`, {
        'rounded-pill': pill
      })}
    >
      {children}
    </div>
  );
};

export default SoftBadge;
