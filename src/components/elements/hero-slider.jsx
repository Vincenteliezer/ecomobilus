import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import ImgFour from "/public/images/hero-image-four.jpeg";
import ImgTwo from "/public/images/hero-image-two.jpeg";
import ImgThree from "/public/images/hero-image-three.jpeg";
import CenterLayout from "../layouts/center-layout";

export default function HeroSlider() {
  return (
    <Carousel
      className="h-[500px] xxl:h-[700px] w-full"
      arrows={true}
      autoplay={true}
    >
      <div className="relative">
        <Image
          src={ImgFour}
          alt=""
          className="h-[500px] xxl:h-[700px] w-full object-cover relative brightness-50"
          placeholder="blur"
          priority
        />

        <div className="h-full absolute top-0 w-full px-4 lg:px-0">
          <CenterLayout className="h-full flex items-center">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl text-white font-bold text-wrap">
                Ecomobilus
                <span className="text-5xl font-light"> Technologies</span>
              </h1>
              <p className="text-3xl text-white font-extralight max-w-xl w-full">
                Pioneering Sustainable Mobility
              </p>

              <div>
                <button className="bg-white px-8 py-4 text-xl">
                  More about us
                </button>
              </div>
            </div>
          </CenterLayout>
        </div>
      </div>

      <div className="relative">
        <Image
          src={ImgFour}
          alt=""
          className="h-[500px] xxl:h-[700px] w-full object-cover relative brightness-50"
          placeholder="blur"
          priority
        />

        <div className="h-full absolute top-0 w-full px-4 lg:px-0">
          <CenterLayout className="h-full flex items-center">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl text-white font-bold">
                Innovation
              </h1>
              <p className="text-3xl text-white font-extralight max-w-xl w-full">
                Continuously pushing the boundaries of technology to develop
                cutting-edge solutions
              </p>

              <div>
                <button className="bg-white px-8 py-4 text-xl">
                  More about us
                </button>
              </div>
            </div>
          </CenterLayout>
        </div>
      </div>

      <div className="relative">
        <Image
          src={ImgTwo}
          alt=""
          className="h-[500px] xxl:h-[700px] w-full object-cover relative brightness-50"
          placeholder="blur"
          priority
        />

        <div className="h-full absolute top-0 w-full px-4 lg:px-0">
          <CenterLayout className="h-full flex items-center">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl text-white font-bold">
                Sustainability
              </h1>
              <p className="text-3xl text-white font-extralight max-w-xl w-full">
                Prioritizing environmental sustainability and promoting
                renewable energy.
              </p>

              <div>
                <button className="bg-white px-8 py-4 text-xl">
                  More about us
                </button>
              </div>
            </div>
          </CenterLayout>
        </div>
      </div>

      <div className="relative">
        <Image
          src={ImgThree}
          alt=""
          className="h-[500px] xxl:h-[700px] w-full object-cover relative brightness-50"
          placeholder="blur"
          priority
        />

        <div className="h-full absolute top-0 w-full px-4 lg:px-0">
          <CenterLayout className="h-full flex items-center">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl text-white font-bold">
                Social Impact
              </h1>
              <p className="text-3xl text-white font-extralight max-w-xl w-full">
                Empowering communities and contributing to a more equitable
                future.
              </p>

              <div>
                <button className="bg-white px-8 py-4 text-xl">
                  More about us
                </button>
              </div>
            </div>
          </CenterLayout>
        </div>
      </div>
    </Carousel>
  );
}
