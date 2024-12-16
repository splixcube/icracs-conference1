"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="md:w-1/1">
            <Slider {...settings} className="">
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]  overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/5.webp"
                        alt="ICRACS 2"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]  overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/1.jpg"
                        alt="ICRACS 2"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/2.png"
                        alt="ICRACS"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/2.jpg"
                        alt="ICRACS"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/3.jpg"
                        alt="ICRACS"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/hero/4.png"
                        alt="ICRACS"
                        width={600}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Slider>


        </div>
    );
};

export default ImageSlider;
