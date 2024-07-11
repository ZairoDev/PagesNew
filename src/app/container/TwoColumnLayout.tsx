// import Image from 'next/image';
// import React from 'react';

// interface TwoColumnLayoutProps {
//   content: React.ReactNode;
//   imageUrl: string;
//   imageAlt: string;
// }

// const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ content, imageUrl, imageAlt }) => {
//   return (
//     <div className="flex justify-center pt-4 w-full">
//       <div className="flex flex-col md:flex-row w-full max-w-screen-lg gap-x-8">
//         <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
//           {content}
//         </div>
//         <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
//           <Image src={imageUrl} alt={imageAlt} layout="responsive" width={500} height={500} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoColumnLayout;


import Image from 'next/image';
import React from 'react';

interface TwoColumnLayoutProps {
  content: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ content, imageUrl, imageAlt }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-x-8 items-center justify-center">
        <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
          {content}
        </div>
        <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
          <Image src={imageUrl} alt={imageAlt} layout="responsive" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;

