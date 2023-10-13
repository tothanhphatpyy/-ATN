import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { useConfig } from '@atom/config/useConfig';

const DigiBirdCloseButton = ({
  size,
  onClick,
  noOutline,
  variant,
  className,
  ...rest
}) => {
  const { config } = useConfig();

  return (
    <CloseButton
      variant={variant ? variant : config.isDark ? 'white' : undefined}
      className={classNames('btn', {
        [`btn-${size}`]: size,
        'outline-none': noOutline,
        [className]: className
      })}
      onClick={onClick && onClick}
      {...rest}
    />
  );
};

DigiBirdCloseButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  noOutline: PropTypes.bool,
  variant: PropTypes.string, // use 'white' for white variant
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default DigiBirdCloseButton;
