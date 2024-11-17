"use client";

import Image from "next/image";
import React from "react";
import FooterImg from "/public/images/footer-image.jpeg";
import CenterLayout from "../layouts/center-layout";
import Logo from "/public/icons/logo.png";
import { LinkIcon, Mail, MapPin, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0">
        <Image src={FooterImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
      </div>

      <CenterLayout className="relative px-4 lg:px-0 py-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">About Our Company</h1>
          <div className="mt-8 flex items-center space-x-4">
            <Image
              src={Logo}
              alt="Ecomobilus logo"
              className="h-12 w-auto"
              placeholder="blur"
            />
            <div>
              <p className="text-white font-bold text-2xl">
                Ecomobilus Technologies LTD
              </p>
              <p className="text-cyan-400 font-light">
                Pioneering Sustainable Mobility
              </p>
            </div>
          </div>

          <p className="mt-4 text-white font-extralight">
            We specialize in designing and manufacturing electric vehicles and
            energy storage systems, addressing critical challenges in
            transportation, agriculture, and energy access.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white w-fit p-2">
                <MapPin color="black" />
              </div>

              <p className="text-white">
                <span className="text-[#1cd6f5] font-bold">
                  Business Location:{" "}
                </span>
                Ecopark Centre, Next to Total Northlands, Eastern Bypass Nairobi{" "}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white w-fit p-2">
                <MapPin color="black" />
              </div>

              <p className="text-white">
                <span className="text-[#1cd6f5] font-bold">
                  Office Location:
                </span>
                Kenyatta University Chandaria Business Innovation and Incubation
                Centre
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white w-fit p-2">
                <PhoneCallIcon color="black" />
              </div>

              <p className="text-white">0729 722 712</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white w-fit p-2">
                <Mail color="black" />
              </div>

              <p className="text-white">info@ecomobilus.com</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-white text-xl font-bold">Useful Links</h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className=" space-y-4">
              <div>
                <Link href="/about">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">About us</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/products">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">
                      Product & services
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/careers">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">
                      Careers & Opportunities
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/findus">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">
                      Contact us
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Link href="#">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">X</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="#">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">Facebook</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="#">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">Instagram</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="#">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white w-fit p-2">
                      <LinkIcon color="black" />
                    </div>

                    <p className="text-white  hover:text-cyan-400">Linkedin</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CenterLayout>
    </footer>
  );
}
