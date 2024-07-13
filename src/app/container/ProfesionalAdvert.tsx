import React from 'react';
import Image from 'next/image';

const AdvertComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-20">
      {/* Left Column (Image) */}
      <div className="w-full md:w-1/2 px-4">
        <Image src="/images/About_us_midle.png" alt="Advert Image" width={500} height={300} />
      </div>

      {/* Right Column (Content) */}
      <div className="w-full md:w-1/2 px-4">
      <h2 className="text-4xl font-bold mb-4 flex items-center justify-center ">
          Who We Are
        </h2>

        <p className="text-lg leading-relaxed  p-4 text-justify">
        We started our career in Tourism Industry long back and after some deliberation, we introduced Vacation Saga! Our Company Name is Zairo International Private Limited and it has just two goals through Vacation Saga: - To provide suitable accommodations to the travellers - To provide more bookings to property owners. We are a team of devoted young professionals in love with customer satisfaction and making vacations memorable, so join us and help us in taking vacation rental business to new heights together!
        </p>
      </div>
    </div>
  );
};

export default AdvertComponent;
