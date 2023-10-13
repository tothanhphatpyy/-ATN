import React from 'react'
import { useTranslation } from 'react-i18next';

interface CustomTextProps {
  className: any;
  children: any;
}

const CustomText: React.FC<CustomTextProps> = ({className, children}) => {
  const { t } = useTranslation();
  return (
    <div className={className}>{children ? children : '--'}</div>
  )
}

export default CustomText