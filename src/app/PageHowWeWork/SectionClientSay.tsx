"use client"

import Glide from "@glidejs/glide";
import Heading from "../components/Heading/Heading";
import React, { FC, useEffect, useState } from "react";
import ncNanoId from "../utils/ncNanoId";
import Image from "next/image";
import clientSay1 from "../../../public/images/clientSay1.png";
import clientSay2 from "../../../public/images/clientSay2.png";
import clientSay3 from "../../../public/images/clientSay3.png";
import clientSay4 from "../../../public/images/clientSay4.png";
import clientSay5 from "../../../public/images/clientSay5.png";
import clientSay6 from "../../../public/images/clientSay6.png";
import quotationImg from "../../../public/images/quotation.png";
import quotationImg2 from "../../../public/images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

interface Testimonial {
  id: number;
  clientName: string;
  clientAddress: string;
  content: string;
  photo: string;
  source: string;
}

const DEMO_DATA: Testimonial[] = [
  // ... (Your data goes here)
];

const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  const UNIQUE_CLASS = "glide_" + ncNanoId();

  useEffect(() => {
    getData();
    if (document.querySelector(`.${UNIQUE_CLASS}`)) {
      new Glide(`.${UNIQUE_CLASS}`, {
        perView: 1,
      }).mount();
    }
  }, []);

  const [dummyData, setDummyData] = useState<Testimonial[]>([]);

  const getData = async () => {
    try {
      const response = await fetch('https://admin.vacationsaga.com/api/testionial');
      const data = await response.json();
      const transformedData = data.map((item: any) => ({
        id: item.id,
        clientName: item.clientName,
        clientAddress: item.clientAddress,
        content: item.content,
        photo: item.photo,
        source: item.source,
      }));
      setDummyData(transformedData);
      console.log('api array', transformedData);
    } catch (e) {
      console.log(e);
    }
  };

  console.log('static array', DEMO_DATA);

  const renderBg = () => (
    <div className="hidden md:block">
      <Image className="absolute top-9 -left-20" src={clientSay1} alt="" />
      <Image className="absolute bottom-[100px] right-full mr-40" src={clientSay2} alt="" />
      <Image className="absolute top-full left-[140px]" src={clientSay3} alt="" />
      <Image className="absolute -bottom-10 right-[140px]" src={clientSay4} alt="" />
      <Image className="absolute left-full ml-32 bottom-[80px]" src={clientSay5} alt="" />
      <Image className="absolute -right-10 top-10" src={clientSay6} alt="" />
    </div>
  );

  const centerStyle: React.CSSProperties = {
    marginTop: '-6px',
    marginRight: '-55px',
  };

  const dummyIconStyle: React.CSSProperties = {
    borderRadius: '100%',
    width: '74px',
    height: '74px',
  };

  return (
    <div className={`nc-SectionClientSay relative ${className}`} data-nc-id="SectionClientSay">
      <Heading desc="Let's see what people think of VS" isCenter>
        Good news from far away
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        {renderBg()}
        <div className={`mt-12 lg:mt-16 relative ${UNIQUE_CLASS}`}>
          <Image
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt=""
          />
          <Image
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt=""
          />
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {dummyData.map((item, index) => {
                const sourcetype = item.source === 'google' ? 'google' : 'facebook-square';
                const iconStyle: React.CSSProperties =
                  item.source === 'google'
                    ? { fontSize: '16px', color: 'red', fontWeight: 'bold', border: 'solid 1px' }
                    : { fontSize: '27px', color: 'rgb(24, 119, 242)' };

                return (
                  <li key={index} className="glide__slide flex flex-col items-center text-center">
                    {item.photo ? (
                      <div>
                        <Image
                          className="mx-auto"
                          style={dummyIconStyle}
                          src={`https://admin.vacationsaga.com/public/images/owner/${item.photo}`}
                          alt=""
                          width={74}
                          height={74}
                        />
                        <center style={centerStyle}>
                          <i className={`lab la-${sourcetype}`} style={iconStyle}></i>
                        </center>
                      </div>
                    ) : (
                      <div>
                        <Image
                          className="mx-auto"
                          style={dummyIconStyle}
                          src="https://vacationsaga.com/img/about_img/avatars.jpg"
                          alt=""
                          width={74}
                          height={74}
                        />
                        <center style={centerStyle}>
                          <i className={`lab la-${sourcetype}`} style={iconStyle}></i>
                        </center>
                      </div>
                    )}
                    <span className="block text-2xl">{item.content.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                    <span className="block mt-8 text-2xl font-semibold">
                      {item.clientName.replace(/<\/?[^>]+(>|$)/g, "")}
                    </span>
                    <div className="flex items-center space-x-2 text-lg mt-2 text-neutral-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{item.clientAddress.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="mt-10 glide__bullets flex items-center justify-center"
            data-glide-el="controls[nav]"
          >
            {dummyData.map((item, index) => (
              <button
                key={index}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
