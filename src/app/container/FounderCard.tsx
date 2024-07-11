// import React from 'react';
// import Image from 'next/image';
// import { People } from '../data';

// const FounderCard: React.FC<People> = ({ name, job, avatar }) => {
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
//       <div className="w-40 h-40 mt-4">
//         <Image
//           className="rounded-full"
//           src={typeof avatar === 'string' ? avatar : avatar.src}
//           alt={name}
//           width={160}
//           height={160}
//           objectFit="cover"
//         />
//       </div>
//       <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job}</p>
//       </div>
//     </div>
//   );
// };

// export default FounderCard;
// src/components/FounderCard.tsx

import React from 'react';
import Image from 'next/image';
import { People } from '../data';

const FounderCard: React.FC<People> = ({ name, job, avatar }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center mx-auto">
      <div className="w-40 h-40 mt-4 relative">
        <Image
          className="rounded-full"
          src={typeof avatar === 'string' ? avatar : avatar.src}
          alt={name}
          width={160}
          height={160}
          objectFit="cover"
        />
      </div>
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job}</p>
      </div>
    </div>
  );
};

export default FounderCard;
