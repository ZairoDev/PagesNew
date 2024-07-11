import type { NextPage } from 'next';
import TwoColumnLayout from './container/TwoColumnLayout';
// import FeatureListing from './container/FeatureListing';
import FoundersList from './container/FoundersList';
import ProfesionalAdvert from './container/ProfesionalAdvert';
import WhoWeAreComponent from './container/WhoWeAre';
import HeroGlobal from './container/HeroGlobal';


const Home: NextPage = () => {
  const content = (
    <div className="text-center p-15">
      <h1 className="text-4xl font-mono mb-4">About Us</h1>
      <p className='text-justify'>Vacation Saga is a prime vacation holiday rental brand, welcoming guests by providing them suitable holiday lettings. We help our travellers to find ideal holiday homes and allow you to search holiday lettings easily by filtering the price range, date, amenities, according to your needs. Stays are extremely affordable in holiday apartments and country cottages. From a couch in a holiday apartment to an entire villa in Europe, Asia and United States, you’ll find everything with us. We provide short term holiday rentals with easy ways of bookings. By providing luxurious holiday homes with basic touches like balcony, refrigerator, parking, air conditioner and many more facilities, we continue to offer the best to our customers.</p>
    </div>
  );

  return (
    <>
    <TwoColumnLayout
      content={content}
      imageUrl="/images/vs-about-us.png" // Replace with your image path
      imageAlt="Example Image"
      />
      {/* <FeatureListing/> */}
      <FoundersList/>
      <ProfesionalAdvert/>
      <WhoWeAreComponent/>
      <HeroGlobal/>
    </>
  );
};

export default Home;
