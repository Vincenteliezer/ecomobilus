import React from 'react'
import Image from 'next/image'
import { Card, Carousel } from 'antd'
import Emkoko from '/public/images/emkoko-image-two.jpeg'
import CenterLayout from '@/components/layouts/center-layout'
import EmkokoOne from "/public/images/emkoko/emkoko-image-twon.jpeg";
import EmkokoThree from "/public/images/emkoko/emkoko-image-three.jpeg";
import EmkokoFour from "/public/images/emkoko/emkoko-image-four.jpeg";
import EmkokoFive from "/public/images/emkoko/emkoko-image-five.jpeg";
import EmkokoSix from "/public/images/emkoko/emkoko-image-six.jpeg";


export default function EmkokoPage() {
    return (
        <main>
            <Image src={Emkoko} alt='hkj' priority className='h-[500px] w-full object-cover object-center' />
            <CenterLayout className="-mt-[100px]  px-4 lg:px-0">
                <Card className='h-[200px]' style={{ backgroundColor: '#020747', opacity: 0.8, border: 0 }}>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <p className='text-white text-6xl z-40 font-bold'>eMkoko</p>
                        <p className='text-white font-light text-3xl text-center'>An electric cart-Move cargo with ease and dignity</p>
                    </div>
                </Card>

                <div>
                    <Carousel
                        className="h-fit w-full mt-10"
                        arrows={true}
                        dots={false}
                        autoplay={true}
                    >
                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 place-items-center">
                                <div>
                                    <Image
                                        src={EmkokoOne}
                                        alt="auto track logo"
                                        className="rounded-xl w-auto"
                                        placeholder="blur"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={EmkokoThree}
                                        alt="enviro serve logo"
                                        className="rounded-xl w-auto"
                                        placeholder="blur"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={EmkokoFour}
                                        alt="kenyatta university logo"
                                        className="rounded-xl w-auto"
                                        placeholder="blur"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
                                <Image
                                    src={EmkokoFive}
                                    alt="muranga university logo"
                                    className="rounded-xl w-auto mx-auto"
                                    placeholder="blur"
                                />
                                <Image
                                    src={EmkokoSix}
                                    alt="siemens logo"
                                    className="rounded-xl w-auto mx-auto"
                                // placeholder="blur"
                                />
                                <Image
                                    src={EmkokoSix}
                                    alt="university of kigali logo"
                                    className="rounded-xl w-auto mx-auto"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </Carousel>
                </div>

            </CenterLayout>
            <div className='mt-10 bg-[#020747]' >
                <p></p>
            </div>
        </main>
    )
}
