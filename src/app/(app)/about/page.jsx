import CenterLayout from "@/components/layouts/center-layout";
import Image from "next/image";
import React from "react";
import AboutImage from "/public/images/about-image.jpeg";
import { Alert } from "antd";
import { EyeIcon, FlagIcon } from "lucide-react";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <section className="bg-[#cccdda]">
      <div className="h-[300px] relative">
        <div
          className="absolute inset-0 bg-[url('/images/about-image.jpeg')] bg-cover bg-top brightness-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold">About Us</h1>
            <p className="text-white text-xl mt-2 font-extralight tracking-widest">
              Ecomobilus Technologies Limited
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-0">
          <div>
            <Image
              src={AboutImage}
              alt=""
              className="h-[300px] object-cover rounded-xl"
            />
          </div>
          <div>
            <p className="py-4 text-xl font-light tracking-wide">
              Ecomobilus Technologies, established in 2022, leads the way in
              sustainable mobility and energy solutions in Kenya. We drive
              sustainable development across Africa by delivering innovative and
              affordable clean energy and mobility solutions. We design and
              manufacture electric vehicles and energy storage systems, tackling
              key challenges in transportation, agriculture, and energy access.
            </p>
          </div>
        </CenterLayout>
      </div>

      <div className="mt-10 bg-[#020747] py-6 px-4 lg:px-0">
        <CenterLayout className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="text-center ">
            <div className="flex items-center w-full justify-center">
              <FlagIcon color="white" size={30} className="" />
            </div>
            <p className="text-4xl font-bold text-white mt-4">Mission</p>
            <p className="mt-4 text-white font-light text-center">
              Our mission is to provide the best electric vehicle solutions to
              fit custom clients’ needs, and their infrastructure in Kenya and
              in the entire of Africa.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center w-full justify-center">
              <EyeIcon color="white" size={30} className="" />
            </div>
            <p className="text-4xl font-bold text-white mt-4">Vision</p>
            <p className="mt-4 text-white font-light  text-center">
              Our vision is to be the best company in Africa that offers
              custom-built electric vehicles and their infrastructure.
            </p>
          </div>
        </CenterLayout>
      </div>

      <div className="mt-6">
        <p className="font-bold text-5xl text-center my-10 text-gray-700">
          Values
        </p>

        <CenterLayout className="mt-4 px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Alert
              message="Innovation"
              description="Continuously pushing the boundaries of technology to develop cutting-edge solutions."
              type="success"
              showIcon
            />

            <Alert
              message="Sustainability"
              description="Prioritizing environmental sustainability and promoting renewable energy. "
              type="success"
              showIcon
            />

            <Alert
              message="Social Impact"
              description="Empowering communities and contributing to a more equitable future."
              type="success"
              showIcon
            />

            <Alert
              message="Customer Focus"
              description="Delivering exceptional products and services that meet the needs of our customers."
              type="success"
              showIcon
            />

            <Alert
              message="Integrity"
              description="Conducting business with honesty, transparency, and ethical principles. "
              type="success"
              showIcon
            />
          </div>
        </CenterLayout>
      </div>
    </section>
  );
}
