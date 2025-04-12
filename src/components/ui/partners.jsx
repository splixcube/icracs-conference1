import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function Partners() {
    return (
        <div>
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">OUR PUBLICATION PARTNERS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4">
                        <Card>
                            <CardContent className="p-4 mt-10 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/AIP.png'} className='mb-6' width={400} height={400} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>AIP CONFERENCE PROCEEDINGS<span className='text-red-500'>*</span></h1>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/crcpress.jpg'} width={200} height={200} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>CRC PUBLICATIONS <span className='text-red-500'>*</span></h1>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/ijte.png'} width={200} height={200} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>IJTE-ISTE PUBLICATIONS <span className='text-red-500'>*</span></h1>
                            </CardContent>
                        </Card>




                    </div>
                </div>
            </section>
           
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-blue-600">OUR TECHNICAL PARTNERS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-4">
                        <Card>
                            <CardContent className="p-4 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/iste.png'} width={200} height={200} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>Indian Society for Technical Education</h1>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/ieee.png'} width={200} height={200} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>Institute of Electrical and Electronics Engineers</h1>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4 md:p-6 gap-4 flex flex-col justify-center items-center">
                                <Image src={'/partners/acm.png'} width={200} height={200} />
                                <h1 className='font-bold text-sm md:text-xl lg:text-xl'>Association for Computing Machinery</h1>
                            </CardContent>
                        </Card>




                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partners