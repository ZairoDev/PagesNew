// import React from "react";
// import Heading from "../shared/Heading";
// import NcImage from "../shared/NcImage/NcImage"; // Adjusted import path if necessary
// import img1 from "../../../public/images/a.png"
// import Image , {StaticImageData} from "next/image"
// export interface People {
//   id: string;
//   name: string;
//   job: string;
//   avatar: string;
// }

// const FOUNDER_DEMO: People[] = [
//   {
//     id: "1",
//     name: ``,
//     job: "",
//     // avatar:
//     //   "https://www.vacationsaga.com/img/How_Work_Img/How%20we%20work%201.png?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     avatar:img1
//   },
//   // Add other data items similarly
// ];

// const SectionFounder = () => {
//   return (
//     <div className="nc-SectionFounder relative">
//       <Heading
//         desc="We’re impartial and independent, and every day we create distinctive, world-class programmes and content"
//       >
//         ⛱ Get tons of unique features for your Listing.
//       </Heading>
//       <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
//         {FOUNDER_DEMO.map((item) => (
//           <div key={item.id} className="max-w-sm">
//             <NcImage
//               containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
//               className="absolute inset-0 object-cover"
//               src={item.avatar}
//               alt={item.name} // Adjust as per your data structure
//               width={500}
//               height={300}
//             />
//             <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
//               {item.name}
//             </h3>
//             <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
//               {item.job}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionFounder;



import React from "react";
import Heading from "../shared/Heading";
import NcImage from "../shared/NcImage/NcImage"; // Adjusted import path if necessary
import Image,{StaticImageData} from "next/image";
import img1 from "../../../public/images/a.png";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: StaticImageData; // Adjusted to StaticImageData type for local images
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: "",
    job: "",
    avatar: img1,
  },
  // Add other data items similarly
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re impartial and independent, and every day we create distinctive, world-class programmes and content"
      >
        ⛱ Get tons of unique features for your Listing.
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar.src} // Use item.avatar.src for local images
              alt={item.name}
              width={500}
              height={300}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
