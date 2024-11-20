import { Image as AntImage } from "antd";
import React from "react";
import CenterLayout from "../layouts/center-layout";
import SDGPoster from "/public/images/sdg-poster.png";
import Goal12 from "/public/icons/sdg-goal-12.png";

import Image from "next/image";

export default function SdgsSection() {
  return (
    <section className="mt-10 bg-[#020747] py-6 px-4 lg:px-0">
      <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <AntImage src={SDGPoster.src} />
        </div>
        <div className="space-y-4">
          <div className="w-full">
            <Image
              src={Goal12}
              alt="SDG 12 Image"
              width={1000}
              height={1000}
              className="h-40 w-auto"
            />
          </div>

          <div>
            <p className="text-2xl font-bold text-white">Goal 12</p>
            <p className="text-white ">
              Ensure sustainable consumption and production patterns.
            </p>

            <p className="text-white mt-3 font-extralight">
              Ecomobilus aligns with Goal 12 by designing and manufacturing
              electric vehicles and energy storage systems that prioritize
              efficiency and sustainability. By offering clean energy solutions,
              Ecomobilus reduces reliance on fossil fuels and promotes
              resource-efficient production practices. The company’s innovations
              contribute to minimizing waste, optimizing energy use, and
              supporting environmentally responsible development in
              transportation and agriculture.
            </p>
          </div>
        </div>
      </CenterLayout>
    </section>
  );
}
