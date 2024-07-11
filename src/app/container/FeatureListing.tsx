// components/FeatureListing.tsx

import React from 'react';

type HeadingProps = {
  desc: string;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ desc, children }) => {
  return (
    <div className="text-left my-3 md:my-4">
      <h1 className="text-xl md:text-2xl font-bold">{children}</h1>
      <p className="text-gray-600 mt-1 md:mt-2">{desc}</p>
    </div>
  );
};

const FeatureListing: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-20 bg-white shadow-lg rounded-lg mx-2 md:mx-4 lg:mx-8 ">
      <Heading desc="We’re impartial and independent, and every day we create distinctive, world-class programmes and content">
        ⛱ Get tons of unique features for your Listing.
      </Heading>
    </div>
  );
};

export default FeatureListing;
