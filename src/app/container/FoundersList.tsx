import React from 'react';
import { FOUNDER_DEMO } from '../data';
import FounderCard from './FounderCard';

const FoundersList: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-20  mx-2 md:mx-4 lg:mx-8">
      <h1 className="text-2xl font-bold">
        ⛱ Get tons of unique features for your Listing.
      </h1>
      <p className="text-sm text-gray-500">
        We’re impartial and independent, and every day we create distinctive, world-class programmes and content
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full">
        {FOUNDER_DEMO.map((founder) => (
          <FounderCard key={founder.id} {...founder} />
        ))}
      </div>
    </div>
  );
};

export default FoundersList;
