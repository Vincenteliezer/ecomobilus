import React from "react";
import Image from "next/image";

import CenterLayout from "../layouts/center-layout";
import GitauImg from "/public/images/team/gitau-image.png";
import EzraImg from "/public/images/team/ezra-image.png";
import NeliusImg from "/public/images/team/nelius-image.png";
import PaulImg from "/public/images/team/paul-image.png";

export default function TeamSection() {
  return (
    <section className="py-10 bg-[#020747] mt-10">
      <CenterLayout className="px-4 lg:px-0">
        <h1 className="text-center font-bold text-5xl text-white">Our Team</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 gap-6">
          <div className="flex flex-col items-center">
            <Image
              src={GitauImg}
              alt="prof gitau"
              className="h-40 w-auto bg-white rounded-full"
            />
            <div className="mt-4 text-center">
              <p className="text-[#4eba39] font-bold text-lg">
                Prof. Geoffrey Gitau
              </p>
              <p className="text-[#1cd6f5] tracking-wider">
                Technical Director
              </p>
              <p className="text-sm text-white mt-2 font-extralight">
                Professor of entrepreneurship & technology, in charge of
                business modelling and strategy development
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={PaulImg}
              alt="prof gitau"
              className="h-40 w-auto bg-white rounded-full"
            />
            <div className="mt-4 text-center">
              <p className="text-[#4eba39] font-bold text-lg">Paul Waweru</p>
              <p className="text-[#1cd6f5] tracking-wider">
                Head of Quality Assurance
              </p>
              <p className="text-sm text-white mt-2 font-extralight">
                Physicist and innovator. In charge of lithium battery
                technologies and quality control.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={EzraImg}
              alt="prof gitau"
              className="h-40 w-auto bg-white rounded-full"
            />
            <div className="mt-4 text-center">
              <p className="text-[#4eba39] font-bold text-lg">Ezra Nyaega</p>
              <p className="text-[#1cd6f5] tracking-wider">
                Head of Energy Solutions
              </p>
              <p className="text-sm text-white mt-2 font-extralight">
                Graduate in electrical & Electrical Engineering
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={NeliusImg}
              alt="prof gitau"
              className="h-40 w-auto bg-white rounded-full"
            />
            <div className="mt-4 text-center">
              <p className="text-[#4eba39] font-bold text-lg">Nelly Gatitu</p>
              <p className="text-[#1cd6f5] tracking-wider">
                Head of Production & Engineering
              </p>
              <p className="text-sm text-white mt-2 font-extralight">
                Graduate in production engineering.
              </p>
            </div>
          </div>
        </div>
      </CenterLayout>
    </section>
  );
}
