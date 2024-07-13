import React from "react";
import Image,{StaticImageData} from "next/image";
import howWeWork from "../../../public/images/how_we_work_banner.jpg";

const Creation: React.FC<{ image: StaticImageData }> = ({ image }) => {
  return (
    <div className="flex">
      <div>
        <span>Create</span>
      </div>
      <div>
        <Image
          src={howWeWork}
          alt="How We Work Banner"
          width={1200}
          height={600}
        />
      </div>
    </div>
  );
};

export default Creation;
