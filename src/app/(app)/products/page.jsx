import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import CenterLayout from "@/components/layouts/center-layout";
import FourWheeler from "/public/images/hero-image-three.jpeg"
import ElectricTuktuk from "/public/images/tuk-tuk-image.png"
import SolarInstallation from "/public/images/solar-image.png"

import Battery from "/public/images/eco-batteries.jpg"


export const metadata = {
  title: "Products & Services",
};

export default function ProductsPage() {
  return (
    <section className="bg-[#cccdda]">
      <div className="h-[300px] relative">
        <div
          className="absolute inset-0 bg-[url('/images/eco-batteries.jpg')] bg-cover bg-center brightness-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold">
              Products & Services
            </h1>
            <p className="text-white text-xl mt-2 font-extralight tracking-widest">
              Ecomobilus Technologies Limited
            </p>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <CenterLayout className="px-4 lg:px-0">
          <p className="text-4xl font-bold">Our services & Solutions</p>

          <p className="mt-8 font-light text-lg">
            At Ecomobilus, we are committed to transforming the way the world moves and powers itself. By combining cutting-edge electric vehicle technology with sustainable energy solutions, we offer a comprehensive range of products and services designed to address today’s most pressing challenges in transportation, energy access, and environmental conservation. Explore our offerings and join us in building a cleaner, greener future.
          </p>


          <Divider orientation="center">***</Divider>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6 place-items-center">
            <div>
              <p className="text-4xl font-bold">Electric Vehicles: Sale of 2, 3, & 4 Wheelers</p>

              <p className="text-lg font-light mt-10">
                Ecomobilus offers a wide range of electric vehicles tailored for personal, commercial, and industrial use. Our products include efficient and eco-friendly 2-wheelers, versatile 3-wheelers ideal for transport and delivery services, and powerful 4-wheelers for family or cargo needs. Each vehicle is equipped with cutting-edge technology, ensuring durability, cost-effectiveness, and zero emissions.
              </p>
            </div>
            <div>
              <Image src={FourWheeler} alt="ecomobilus emkoko" className="rounded-xl" placeholder="blur" />
            </div>

            <div>
              <Image src={ElectricTuktuk} alt="electric tuktuk" className="rounded-xl" placeholder="blur" />
            </div>
            <div>
              <p className="text-4xl font-bold">Gasoline-to-Electric Conversion</p>

              <p className="text-lg font-light mt-10">
                Transform your conventional gasoline-powered vehicle into an electric vehicle with our state-of-the-art conversion services. We replace the internal combustion engine with a robust electric motor and battery system, reducing your carbon footprint and operating costs. Our process ensures your converted vehicle maintains its original functionality while offering improved efficiency and environmental benefits.
              </p>
            </div>


            <div>
              <p className="text-4xl font-bold">Battery Solutions: Assembly, Charging, Swapping, & Repair</p>

              <p className="text-lg font-light mt-5">
                We provide comprehensive battery services to support electric mobility:
              </p>

              <ul className="text-base font-light mt-4 list-disc ml-6 space-y-3">
                <li>
                  <p>Battery Assembly: Custom-designed battery packs to meet the specific energy needs of various applications.</p>
                </li>
                <li>
                  <p>Battery Charging: Efficient and safe charging solutions for homes, businesses, and public charging stations.</p>
                </li>
                <li>
                  <p>Battery Swapping: Quick and hassle-free battery swapping stations to minimize downtime for electric vehicles.</p>
                </li>
                <li>
                  <p> Battery Repair: Professional diagnostics and repairs to ensure optimal battery performance and longevity.</p>
                </li>
              </ul>
            </div>
            <div>
              <Image src={Battery} alt="electric tuktuk" className="rounded-xl" placeholder="blur" />
            </div>
          </div>
        </CenterLayout>
      </div>

      <div className="py-20 bg-[#020747] mt-10">
        <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0 place-items-center">
          <div>
            <h4 className="text-[#1cd6f5]  font-bold text-4xl">Training in e-Mobility, Solar PV, & Related Technologies</h4>
            <p className="text-white mt-4 font-normal">Ecomobilus is committed to building a skilled workforce for the green energy revolution. Our training programs cover:</p>

            <ul className="text-white list-disc ml-8 mt-4 space-y-2 font-light">
              <li>
                <p>Fundamentals of electric mobility, vehicle design, and battery technology.</p>
              </li>
              <li>
                <p>Installation and maintenance of solar photovoltaic systems.</p>
              </li>
              <li>
                <p>Hands-on experience in energy storage systems and integration with the grid. Our courses are designed for professionals, enthusiasts, and organizations aiming to adopt sustainable technologies.</p>
              </li>
            </ul>
          </div>

          <div>

          </div>


          <div>
            <Image src={SolarInstallation} alt="electric tuktuk" className="rounded-xl" placeholder="blur" />
          </div>

          <div className="">
            <h4 className="text-[#1cd6f5]  font-bold text-4xl">Solar PV Systems Installation</h4>
            <p className="text-white mt-4 font-normal">Harness the power of the sun with our solar photovoltaic solutions. We specialize in</p>

            <ul className="text-white list-disc ml-8 mt-4 space-y-2 font-light">
              <li>
                <p>EV Charging Integration: Solar-powered charging stations to support clean energy use for electric vehicles.</p>
              </li>
              <li>
                <p>Grid-Connected Systems: Efficient and reliable solar systems for homes, businesses, and industries.</p>
              </li>
              <li>
                <p>
                  Energy Storage Integration: Advanced energy storage systems to maximize solar energy usage and ensure power reliability.
                </p>
              </li>
            </ul>
          </div>
        </CenterLayout>
      </div>
    </section>
  );
}
