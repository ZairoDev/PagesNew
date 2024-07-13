import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface SectionHeroMiddleProps {
  className?: string;
  leftimg: StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHeroMiddle: FC<SectionHeroMiddleProps> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="max-w-full">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mt-4">
            {subHeading}
          </p>
          {btnText && (
            <button className="btn-primary mt-4">
              {btnText}
            </button>
          )}
          <div className="w-full mt-4">
            <Image src={leftimg} alt="Left Image" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroMiddle;
