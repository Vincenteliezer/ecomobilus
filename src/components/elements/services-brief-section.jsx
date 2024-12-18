import React from "react";
import CenterLayout from "../layouts/center-layout";
import ImgFour from "/public/images/scooter-image.png";
import Image from "next/image";
import {
  Cable,
  CarFrontIcon,
  CircuitBoard,
  Divide,
  PlugZap,
  Zap,
} from "lucide-react";
import { Divider } from "antd";
import Link from "next/link";

export default function ServicesBriefSection() {
  return (
    <section className="">
      <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4 px-4 lg:px-0">
        <div>
          <h2 className="text-6xl font-bold">What to Do...</h2>
          <ul className="space-y-2 mt-8 text-xl">
            <li className="flex items-center space-x-4">
              <div className="bg-[#020747] flex-shrink-0 p-2">
                <CarFrontIcon color="white" size={40} />
              </div>
              <p>Sale of Electric 2,3 & 4 Wheelers</p>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-[#020747] flex-shrink-0 p-2">
                <Zap color="white" size={40} />
              </div>
              <p>Conversion - Gasoline to Electric Vehicle</p>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-[#020747] flex-shrink-0 p-2">
                <PlugZap color="white" size={40} />
              </div>
              <p>Battery Assembly | Charging | Swapping | Repair</p>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-[#020747] flex-shrink-0 p-2">
                <Cable color="white" size={40} />
              </div>
              <p>Training on e-Mobility, Solar PV & Related Technologies</p>
            </li>

            <li className="flex items-center space-x-4">
              <div className="bg-[#020747] flex-shrink-0 p-2">
                <CircuitBoard color="white" size={40} />
              </div>
              <p>Solar PV Systems Installation for EV, Grid & Energy Storage</p>
            </li>
          </ul>
          <Divider />
          <Link href="/products">
            <button className="bg-[#020747] hover:bg-[#020640] hover:scale-105 active:scale-100 px-6 py-4 text-white font-normal text-xl">
              Explore Our Services
            </button>
          </Link>
        </div>

        <div>
          <Image
            src={ImgFour}
            alt=""
            className="w-full object-cover"
            placeholder="blur"
            priority
          />
        </div>
      </CenterLayout>
    </section>
  );
}
