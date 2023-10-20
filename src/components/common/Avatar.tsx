import React from 'react';
import { isIterableArray } from '@helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from './Flex';
import classNames from 'classnames';

interface AvatarProps {
  size: 's'| 'm'| 'l'| 'xl'| '2xl'| '3xl'| '4xl'| '5xl',
  rounded: string,
  src: string | string[],
  name: string,
  emoji: string,
  className: string,
  mediaClass: string,
  isExact: boolean,
  icon: string
};
interface AvatarGroupProps {
  children: React.ReactNode;
  dense?: boolean;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 'xl',
  rounded = 'circle',
  src,
  name,
  emoji = '😊',
  className,
  mediaClass,
  isExact = false,
  icon
}) => {
  const classNames = ['avatar', `avatar-${size}`, className].join(' ');
  const mediaClasses = [
    rounded ? `rounded-${rounded}` : 'rounded',
    mediaClass
  ].join(' ');

  const getAvatar = () => {
    if (src) {
      if (isIterableArray(src)) {
        return (
          <div className={`${mediaClasses} overflow-hidden h-100 d-flex`}>
            <div className="w-50 border-right">
              <img src={src[0]} alt="" />
            </div>
            <div className="w-50 d-flex flex-column">
              <img src={src[1]} alt="" className="h-50 border-bottom" />
              <img src={src[2]} alt="" className="h-50" />
            </div>
          </div>
        );
      } else {
        return <img className={mediaClasses} src={src as any} alt="" />;
      }
    }

    if (name) {
      return (
        <div className={`avatar-name ${mediaClasses}`}>
          <span>{isExact ? name : (name.match(/\b\w/g) as any).join('')}</span>
        </div>
      );
    }

    if (icon) {
      return (
        <Flex className={`avatar-name ${mediaClasses}`}>
          <FontAwesomeIcon icon={icon as any} />
        </Flex>
      );
    }

    return (
      <div className={`avatar-emoji ${mediaClasses}`}>
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
      </div>
    );
  };

  return <div className={classNames}>{getAvatar()}</div>;
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, dense, className }) => {
  return (
    <div
      className={classNames(className, 'avatar-group', {
        'avatar-group-dense': dense
      })}
    >
      {children}
    </div>
  );
};

export default Avatar;
