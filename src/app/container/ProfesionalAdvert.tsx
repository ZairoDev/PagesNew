import React from 'react';
import Image from 'next/image';

const AdvertComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {/* Left Column (Image) */}
      <div className="w-full md:w-1/2 px-4">
        <Image src="/images/About_us_midle.png" alt="Advert Image" width={500} height={300} />
      </div>

      {/* Right Column (Content) */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Get Expert Tips on Listing a Professional Advert
        </h2>
        <p className="text-lg leading-relaxed">
          Here you can place your content, providing expert tips or any relevant information.
        </p>
      </div>
    </div>
  );
};

export default AdvertComponent;
