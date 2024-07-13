
// import Image from 'next/image';
// import React from 'react';

// interface TwoColumnLayoutProps {
//   content: React.ReactNode;
//   imageUrl: string;
//   imageAlt: string;
// }

// const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ content, imageUrl, imageAlt }) => {
//   return (
//     <div className="container mx-auto px-4 py-8 p-20">
//       <div className="flex flex-col md:flex-row gap-x-8 items-center justify-center">
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

// src/components/container/TwoColumnLayout.tsx

// import React from 'react';

// interface TwoColumnLayoutProps {
//   content: React.ReactNode;
//   imageUrl: string;
//   imageAlt: string;
// }

// const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ content, imageUrl, imageAlt }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center p-8  mx-2 md:mx-4 lg:mx-8">
//       <div className="w-full md:w-1/2 p-4">
//         {content}
//       </div>
//       <div className="w-full md:w-1/2 p-4 flex justify-center">
//         <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-md max-w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default TwoColumnLayout;
import React from 'react';
import Image from 'next/image';

const AboutVaction: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-20">
      {/* Left Column (Content) */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-lg leading-relaxed">
        Vacation Saga is a prime vacation holiday rental brand, welcoming guests by providing them suitable holiday lettings. We help our travellers to find ideal holiday homes and allow you to search holiday lettings easily by filtering the price range, date, amenities, according to your needs. Stays are extremely affordable in holiday apartments and country cottages. From a couch in a holiday apartment to an entire villa in Europe, Asia and United States, you’ll find everything with us. We provide short term holiday rentals with easy ways of bookings. By providing luxurious holiday homes with basic touches like balcony, refrigerator, parking, air conditioner and many more facilities, we continue to offer the best to our customers.
        </p>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 px-4">
        <div className="w-full h-auto">
          <Image src="/images/vs-about-us.png" alt="image" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default AboutVaction;
