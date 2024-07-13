
// import React, { FC, ReactNode } from "react";
// import Image from "next/image"; // Import Image for Next.js optimization
// import ButtonPrimary from "../shared/Button/ButtonPrimary";
// import { StaticImageData } from 'next/image'; // Import StaticImageData for type definition

// export interface SectionHero2Props {
//   className?: string;
//   leftimg: StaticImageData; // Define leftimg as a prop of type StaticImageData
//   heading: ReactNode;
//   subHeading: string;
//   btnText: string;
// }

// const SectionHero2: FC<SectionHero2Props> = ({
//   className = "",
//   leftimg,
//   heading,
//   subHeading,
//   btnText,
// }) => {
//   return (
//     <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
//       <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
//         <div className="flex-grow">
//           {/* Use Image component from next/image */}
//           <Image src={leftimg} alt="Left Image" width={500} height={500} />
//         </div>
//         <div className="w-full xl:max-w-lg space-y-5 lg:space-y-7">
//           <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
//             {heading}
//           </h2>
//           <p>{subHeading}</p>
//           {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SectionHero2;


"use client"; // Mark this file as a client component

import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image"; // Import Image for Next.js optimization and StaticImageData for type definition
import ButtonPrimary from "../shared/Button/ButtonPrimary";

export interface SectionHero2Props {
  className?: string;
  leftimg: StaticImageData; // Define leftimg as a prop of type StaticImageData
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero2: FC<SectionHero2Props> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`} data-nc-id="SectionHero">
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="flex-grow">
          {/* Use Image component from next/image */}
          <Image src={leftimg} alt="Left Image" width={500} height={500} />
        </div>
        <div className="w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <p>{subHeading}</p>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
