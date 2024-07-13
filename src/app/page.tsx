// import type { NextPage } from 'next';
// // import TwoColumnLayout from './container/AboutVaction';
// // import FeatureListing from './container/FeatureListing';
// import FoundersList from './container/FoundersList';
// import ProfesionalAdvert from './container/ProfesionalAdvert';
// import WhoWeAreComponent from './container/WhoWeAre';
// import HeroGlobal from './container/HeroGlobal';
// import AboutVaction from './container/AboutVaction';
// import SectionHowItWork from './container/SectionHowItWork';
// import PageHowWeWork from './PageHowWeWork/PageHowWeWork';
// const Home: NextPage = () => {
//   const content = (
//     <div className='flex-col'>
//      <AboutVaction/>
//       <FoundersList/>
//       <ProfesionalAdvert/>
//       <WhoWeAreComponent/>
//       <HeroGlobal/> 
//       <SectionHowItWork/>
//       {/* <PageHowWeWork/> */}
//     </div>
//   );

//   return (
//     // <>
//     //   {/* <AboutVaction/>
//     //   <FoundersList/>
//     //   <ProfesionalAdvert/>
//     //   <WhoWeAreComponent/>
//     //   <HeroGlobal/> */}

//     // </>
//     <div className='flex-col'>
//      <AboutVaction/>
//       <FoundersList/>
//       <ProfesionalAdvert/>
//       <WhoWeAreComponent/>
//       <HeroGlobal/> 
//       <SectionHowItWork/>
//       <PageHowWeWork/>
//     </div>
//   );
// };

// export default Home;



import type { NextPage } from 'next';
import FoundersList from './container/FoundersList';
import ProfesionalAdvert from './container/ProfesionalAdvert';
import WhoWeAreComponent from './container/WhoWeAre';
import HeroGlobal from './container/HeroGlobal';
import AboutVaction from './container/AboutVaction';
import SectionHowItWork from './container/SectionHowItWork';
import PageHowWeWork from './PageHowWeWork/PageHowWeWork';

const Home: NextPage = () => {
  return (
    <div className='flex-col'>
      {/* <AboutVaction />
      <FoundersList />
      <ProfesionalAdvert />
      <WhoWeAreComponent />
      <HeroGlobal />
      <SectionHowItWork /> */}
      <PageHowWeWork />
    </div>
  );
};

export default Home;

