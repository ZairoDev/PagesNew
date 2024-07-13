// import React from 'react';
// import { FOUNDER_DEMO } from '../data';
// import FounderCard from './FounderCard';

// const FoundersList: React.FC = () => {
//   return (
// //     <div className="p-20 mx-2 md:mx-4 lg:mx-8">
   
// //   <div className="flex flex-col items-start mb-8">
// //     <h1 className="text-2xl font-bold">
// //       ⛱ Get tons of unique features for your Listing.
// //     </h1>
// //     <p className="text-sm text-gray-500 mt-2">
// //       We’re impartial and independent, and every day we create distinctive, world-class programs and content.
// //     </p>
// //   </div>
// //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
// //     {FOUNDER_DEMO.map((founder) => (
// //       <FounderCard key={founder.id} {...founder} />
// //     ))}
// //   </div>
// // </div>
// <div className='flex flex-col'>
//   <div> <h1 className="text-2xl font-bold">
//       ⛱ Get tons of unique features for your Listing.
//    </h1>
//    <p className="text-sm text-gray-500 mt-2">
//       We’re impartial and independent, and every day we create distinctive, world-class programs and content.
//     </p>
//     </div>
//   <div>
//   </div>
//    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//      {FOUNDER_DEMO.map((founder) => (
//       <FounderCard key={founder.id} {...founder} />
//     ))}
//   </div>
//   </div>
// </div>


  

//   );
// };

// export default FoundersList;


import React from 'react';
import { FOUNDER_DEMO } from '../data';
import FounderCard from './FounderCard';

const FoundersList: React.FC = () => {
  return (
    <div className='flex flex-col items-start p-20 mx-2 md:mx-4 lg:mx-8'>
      <div>
        <h1 className="text-2xl font-bold">
          ⛱ Get tons of unique features for your Listing.
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          We’re impartial and independent, and every day we create distinctive, world-class programs and content.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4"> */}
      <div className='flex  justify-between'>
        {FOUNDER_DEMO.map((founder) => (
          <FounderCard key={founder.id}
         {...founder} />
        ))}
      </div>
    </div>
  );
};

export default FoundersList;
