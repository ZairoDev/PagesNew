    // import React, { FC, ImgHTMLAttributes, useEffect, useRef, useState } from "react";
    // import dynamic from "next/dynamic";
    // import { StaticImageData } from "next/image";
    // import checkInViewIntersectionObserver from "@/app/utils/isInViewPortIntersectionObserver";
    // import placeholderLarge from "../../../../../images/placeholder-large.png";
    // import placeholderLargeH from "../../../../../images/placeholder-large-h.png";
    
    // // Dynamic import of next/image to ensure client-side rendering
    // const NextImage = dynamic(() => import("next/image"), { ssr: false });
    
    // export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    //   containerClassName?: string;
    //   prevImageHorizontal?: boolean;
    //   width: number;
    //   height: number;
    // }
    
    // const NcImage: FC<NcImageProps> = ({
    //   containerClassName = "",
    //   alt = "nc-imgs",
    //   src = "",
    //   prevImageHorizontal = false,
    //   className = "object-cover w-full h-full",
    //   width,
    //   height,
    //   ...args
    // }) => {
    //   const _containerRef = useRef<HTMLDivElement>(null);
    //   const placeholderImage = prevImageHorizontal ? placeholderLargeH : placeholderLarge;
    
    //   const [__src, set__src] = useState<string | StaticImageData>(placeholderImage);
    
    //   const _initActions = async () => {
    //     set__src(placeholderImage);
    //     _checkInViewPort();
    //   };
    
    //   const _checkInViewPort = () => {
    //     if (!_containerRef.current) return;
    //     checkInViewIntersectionObserver({
    //       target: _containerRef.current,
    //       distanceFromEnd: 0,
    //       callback: _imageOnViewPort,
    //     });
    //   };
    
    //   const _imageOnViewPort = () => {
    //     if (!src) {
    //       _handleImageLoaded();
    //       return true;
    //     }
    //     if (typeof src === "string") {
    //       set__src(src);
    //     }
    //     return true;
    //   };
    
    //   const _handleImageLoaded = () => {
    //     set__src(src);
    //   };
    
    //   useEffect(() => {
    //     _initActions();
    //   }, [src]);
    
    //   return (
    //     <div className={`nc-NcImage ${containerClassName}`} data-nc-id="NcImage" ref={_containerRef}>
    //       {typeof __src === "string" ? (
    //         <NextImage src={__src} alt={alt} className={className} width={width} height={height} {...args} />
    //       ) : (
    //         <NextImage src={__src.src} alt={alt} className={className} width={width} height={height} {...args} />
    //       )}
    //     </div>
    //   );
    // };
    
    // export default NcImage;
    


    

    "use client"; // Mark this file as a client component

import React, { FC, ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { StaticImageData } from "next/image";
import checkInViewIntersectionObserver from "@/app/utils/isInViewPortIntersectionObserver";
import placeholderLarge from "../../../../../images/placeholder-large.png";
import placeholderLargeH from "../../../../../images/placeholder-large-h.png";

// Dynamic import of next/image to ensure client-side rendering
const NextImage = dynamic(() => import("next/image"), { ssr: false });

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  prevImageHorizontal?: boolean;
  width: number;
  height: number;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  prevImageHorizontal = false,
  className = "object-cover w-full h-full",
  width,
  height,
  ...args
}) => {
  const _containerRef = useRef<HTMLDivElement>(null);
  const placeholderImage = prevImageHorizontal ? placeholderLargeH : placeholderLarge;

  const [__src, set__src] = useState<string | StaticImageData>(placeholderImage);

  const _initActions = async () => {
    set__src(placeholderImage);
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    if (typeof src === "string") {
      set__src(src);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    set__src(src);
  };

  useEffect(() => {
    _initActions();
  }, [src]);

  return (
    <div className={`nc-NcImage ${containerClassName}`} data-nc-id="NcImage" ref={_containerRef}>
      {typeof __src === "string" ? (
        <NextImage src={__src} alt={alt} className={className} width={width} height={height} {...args} />
      ) : (
        <NextImage src={__src.src} alt={alt} className={className} width={width} height={height} {...args} />
      )}
    </div>
  );
};

export default NcImage;
