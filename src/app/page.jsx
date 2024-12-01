import HeroSlider from "@/components/elements/hero-slider";
import CenterLayout from "@/components/layouts/center-layout";
import { Card } from "antd";
import Image from "next/image";
import ScooterImg from "/public/images/tuk-tuk-image.png";
import ServicesBriefSection from "@/components/elements/services-brief-section";
import { MapPinned, PlugZap, Tractor } from "lucide-react";
import SdgsSection from "@/components/elements/sdgs";
import BannerSection from "@/components/elements/banner";
import PartnersSlider from "@/components/elements/partners-slider";

export default function HomePage() {
  return (
    <main className="bg-[#cccdda]">
      <HeroSlider />
      <CenterLayout className="-mt-24 lg:-mt-56 flex justify-center lg:justify-end px-4 lg:px-0">
        <Card
          style={{
            borderRadius: 0,
            backgroundColor: "#020747",
            border: 0,
          }}
          className="h-56 w-md bg-black bg-opacity-35"
          hoverable={true}
        >
          <p className="text-3xl text-[#4eba39]">OUR MISSION</p>
          <div className="mt-6">
            <p className="text-white font-light tracking-wider">
              Our mission is to drive sustainable development in Africa by
              providing innovative and affordable clean energy and mobility
              solutions.
            </p>
          </div>
        </Card>
      </CenterLayout>
      <div className="bg-[#020747] py-6">
        <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 h-full pt-10">
          <div className="h-full flex items-end justify-start px-4 lg:px-0">
            <Image src={ScooterImg} alt="" className="w-auto object-cover" />
          </div>

          <div className="h-full flex flex-col justify-center px-4 lg:px-0">
            <h1 className="text-3xl text-white font-extralight text-center lg:text-start tracking-wider">
              Established in 2022, Ecomobilus Technologies is a Kenyan
              innovation company at the forefront of sustainable mobility and
              energy solutions.
            </h1>

            <div className="flex justify-center lg:justify-end w-full">
              <button className="bg-white w-fit mt-8 px-6 py-4">
                Read More
              </button>
            </div>
          </div>
        </CenterLayout>
      </div>

      <ServicesBriefSection />

      <div className="h-[400px] relative">
        <div
          className="absolute inset-0 bg-[url('/images/middle-image.jpeg')] bg-bottom bg-cover bg-fixed brightness-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative h-full flex items-center justify-center">
          <CenterLayout>
            <BannerSection />
          </CenterLayout>
        </div>
      </div>

      <div className="mt-10 px-4 lg:px-0">
        <CenterLayout className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex space-x-4 hover:scale-105 cursor-pointer">
            <div className="bg-[#020747] h-20 w-20 flex items-center justify-center flex-shrink-0">
              <PlugZap color="white" size={30} />
            </div>

            <div>
              <p className="font-bold text-xl">Eco-friendly Power Solutions</p>
              <p className="mt-2">
                Portable power banks and large-capacity battery systems made
                from recycled materials, charged using renewable energy source
                like solar panels.
              </p>
            </div>
          </div>

          <div className="flex space-x-4 hover:scale-105 cursor-pointer">
            <div className="bg-[#4eba39] h-20 w-20 flex items-center justify-center flex-shrink-0">
              <MapPinned color="white" size={30} />
            </div>

            <div>
              <p className="font-bold text-xl">Empowering Remote Communities</p>
              <p className="mt-2">
                Delivering reliable and affordable power for lighting,
                appliances, and mobile device charging in off-grid areas.
              </p>
            </div>
          </div>

          <div className="flex space-x-4 hover:scale-105 cursor-pointer">
            <div className="bg-[#1cd6f5] h-20 w-20 flex items-center justify-center flex-shrink-0">
              <Tractor color="white" size={30} />
            </div>

            <div>
              <p className="font-bold text-xl">Sustainable Transportation</p>
              <p className="mt-2">
                Converting convention gasoline-powered Boda-bodas(Motorcycles)
                into electric vehicles, reducing fuel costs, emissions, and
                noise pollution.
              </p>
            </div>
          </div>
        </CenterLayout>
      </div>

      <SdgsSection />

      <PartnersSlider />
    </main>
  );
}
