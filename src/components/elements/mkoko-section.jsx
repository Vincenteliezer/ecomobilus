import React from 'react'
import CenterLayout from '../layouts/center-layout'
import Emkoko from "/public/images/emoko-image-one.jpeg";
import Image from 'next/image';
import { Button } from 'antd';
import Link from 'next/link';

export default function MkokoSection() {
    return (
        <section className='bg-[#020747] py-10'>
            <CenterLayout className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-6 place-items-center px-4 lg:px-0">
                <div>
                    <Image
                        src={Emkoko}
                        alt="emobilus emkoko"
                        className="w-full object-cover rounded-tl-3xl rounded-br-3xl"
                        placeholder="blur"
                        priority
                    />
                </div>

                <div>
                    <p className='text-6xl font-bold text-[#93d31e] text-center lg:text-start'>eMkoko Project</p>

                    <div className='mt-10'>
                        <p className='text-white text-center lg:text-start font-light text-xl'>
                            eMkoko provides decent urban and rural light cargo transport with zero emissions and gender inclusivity.
                        </p>
                    </div>

                    <div className='flex justify-center lg:justify-end'>
                        <Link href="/emkoko">
                            <Button style={{ height: 70, backgroundColor: "#93d31e", border: 0 }} className='mt-10'>
                                <p className='text-black uppercase'>Lean more about eMkoko</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </CenterLayout>
        </section>
    )
}
