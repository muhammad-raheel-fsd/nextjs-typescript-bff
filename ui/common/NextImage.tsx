import React from "react";

import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type NextImageProps = Omit<ImageProps, "alt"> & {
  src: string;
  alt?: string;
  className?: string;
};

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  className,
  fill,
  ...props
}) => {
  // Don't set width/height if fill is true
  const sizeProps = fill ? {} : { width: 1000, height: 1000 };

  return (
    <Image
      src={src}
      {...sizeProps}
      fill={fill}
      alt={alt ?? "There is supposed to be an image."}
      className={cn("inline-block", className)}
      {...props}
    />
  );
};

export default NextImage;
