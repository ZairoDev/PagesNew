// // src/components/FoundersList.tsx

// import React from 'react';
// import { FOUNDER_DEMO } from '../data';
// import FounderCard from './FounderCard';

// const FoundersList: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 relative left-10 top-5">
//       {FOUNDER_DEMO.map((founder) => (
//         <FounderCard key={founder.id} {...founder} />
//       ))}
//     </div>
//   );
// };

// export default FoundersList;
// src/components/FoundersList.tsx

import React from 'react';
import { FOUNDER_DEMO } from '../data';
import FounderCard from './FounderCard';

const FoundersList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-20">
      {FOUNDER_DEMO.map((founder) => (
        <FounderCard key={founder.id} {...founder} />
      ))}
    </div>
  );
};

export default FoundersList;
