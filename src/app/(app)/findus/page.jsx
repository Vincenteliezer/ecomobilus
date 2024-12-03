import { Card, Divider } from 'antd';
import { Mail, MapPin, PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Logo from "/public/icons/logo.png";

export const metadata = {
  title: "Find Us",
};

export default function FindUsPage() {

  return (
    <main className='h-screen grid grid-cols-12'>
      <div className='col-span-full lg:col-span-7 h-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9047586842944!2d36.989921!3d-1.226135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTMnMzQuMSJTIDM2wrA1OScyMy43IkU!5e0!3m2!1sen!2ske!4v1733220755854!5m2!1sen!2ske"
          className='h-full w-full'
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='col-span-full lg:col-span-5 p-10 place-content-center'>
        <div>
          <h1 className='text-5xl text-center font-bold'>Get in touch</h1>
        </div>
        <Divider className='max-w-lg'>***</Divider>

        <div className=' flex justify-center w-full'>
          <Card hoverable>
            <div className="mt-8 flex items-center space-x-4">
              <Image
                src={Logo}
                alt="Ecomobilus logo"
                className="h-12 w-auto"
                placeholder="blur"
              />
              <div>
                <p className="text-black font-bold text-2xl">
                  Ecomobilus Technologies Ltd
                </p>
                <p className="text-back font-light">
                  Ideas in Motion
                </p>
              </div>
            </div>

            <p className="mt-4 font-extralight">
              We specialize in designing and manufacturing electric vehicles and
              energy storage systems, addressing critical challenges in
              transportation, agriculture, and energy access.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-black w-fit p-2">
                  <MapPin color="white" />
                </div>

                <p className="text-black">
                  <span className="text-black font-bold">
                    Business Location:{" "}
                  </span>
                  Ecopark Centre, Next to Total Northlands, Eastern Bypass Nairobi{" "}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-black w-fit p-2">
                  <MapPin color="white" />
                </div>

                <p className="text-black">
                  <span className="text-black font-bold">
                    Office Location:
                  </span>
                  Kenyatta University Chandaria Business Innovation and Incubation
                  Centre
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-black w-fit p-2">
                  <PhoneCallIcon color="white" />
                </div>

                <p className="text-black">0729722912</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-black w-fit p-2">
                  <Mail color="white" />
                </div>

                <p className="text-black">info@ecomobilus.com</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
