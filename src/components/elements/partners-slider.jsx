import React from "react";
import { Carousel, Divider } from "antd";

import AutoTrackLogo from "/public/icons/partners/autotrack-logo.jpeg";
import EnviroServeLogo from "/public/icons/partners/enviroserve-logo.png";
import KenyattaUniLogo from "/public/icons/partners/kenyatta-uni-logo.png";
import MurangaUniLogo from "/public/icons/partners/muranga-uni-logo.jpg";
import SiemensLogo from "/public/icons/partners/siemens-stiftung-logo.svg";
import UniversityOfKigali from "/public/icons/partners/university-of-kigali-logo.png";
import Image from "next/image";
import CenterLayout from "../layouts/center-layout";

export default function PartnersSlider() {
  return (
    <CenterLayout className="py-10 px-4 lg:px-0">
      <div className="text-center">
        <h3 className="font-bold text-5xl">Our Partners</h3>
      </div>
      <Divider>***</Divider>
      <Carousel
        className="h-fit w-full mt-10"
        arrows={false}
        dots={false}
        autoplay={true}
      >
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
            <div>
              <Image
                src={AutoTrackLogo}
                alt="auto track logo"
                className="h-12 w-auto"
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={EnviroServeLogo}
                alt="enviro serve logo"
                className="h-12 w-auto"
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={KenyattaUniLogo}
                alt="kenyatta university logo"
                className="h-12 w-auto"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Image
              src={MurangaUniLogo}
              alt="muranga university logo"
              className="h-12 w-auto mx-auto"
              placeholder="blur"
            />
            <Image
              src={SiemensLogo}
              alt="siemens logo"
              className="h-12 w-auto mx-auto"
              // placeholder="blur"
            />
            <Image
              src={UniversityOfKigali}
              alt="university of kigali logo"
              className="h-12 w-auto mx-auto"
              placeholder="blur"
            />
          </div>
        </div>
      </Carousel>
    </CenterLayout>
  );
}
