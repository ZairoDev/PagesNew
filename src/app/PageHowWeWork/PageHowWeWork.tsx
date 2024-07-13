
import React, { FC } from "react";
import Image from "next/image"; // Import Image for Next.js optimization
import rightImg from "../../../public/images/about-hero-right.png";
import middleimg from "../../../public/images/c.png";
import middleimg1 from "../../../public/images/a.png";
import middleimg2 from "../../../public/images/how_we_work_banner.jpg";
import SectionFounder from "./SectionFounder";
import BgGlassmorphism from "../components/BgGlassmorphism";
import BackgroundSection from "../components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionHeroMiddle from "./SectionHeroMiddle";
import SectionHeroMiddle1, { SectionHeroMiddle1Props } from "./SectionHeroMiddle1"; // Import SectionHeroMiddle1 and its props
import SectionHero2 from "./SectionHero2";
import SectionHeroMiddle2 from "./SectionHeroMiddle2";
import SectionClientSay from "./SectionClientSay";

export interface PageAboutProps {
  className?: string;
}

const PageHowWeWork: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative ${className}`} data-nc-id="PageAbout">
      <title>How We Work || Vacationsaga</title>
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 How We Work."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />
        <SectionHeroMiddle
          leftimg={middleimg}
          heading="Our Mission"
          subHeading="Creating value for our customers"
          btnText="Learn More"
        />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionHeroMiddle1
            leftimg={middleimg1}
            heading="Our Values"
            subHeading="Integrity and innovation"
            btnText="Discover More"
          />
        </div>
        <SectionFounder />

        <SectionHero2
          leftimg={middleimg1}
          heading="Our Team"
          subHeading="Meet our dedicated team"
          btnText="Meet Us"
        />
        <SectionHeroMiddle2
          leftimg={middleimg2}
          heading="Our Process"
          subHeading="How we achieve excellence"
          btnText="See How"
        />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </div>
  );
};

export default PageHowWeWork;

