import React, { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
  src: string;
  height?: number;
  width?: number;
  effect?: string;
  alt?: string;
  className?: string;
  props?: any;
}

const LazyImage: FC<LazyImageProps> = ({
  src,
  height,
  width,
  effect = "blur",
  alt,
  className,
  ...props
}) => (
  <>
    <LazyLoadImage
      alt={alt}
      height={height}
      effect={effect}
      src={src}
      width={width}
      className={className}
      {...props}
    />
  </>
);

export default LazyImage;
