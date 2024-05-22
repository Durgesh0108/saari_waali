"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import React from "react";

const data = {
	slides: [
		{
			textSubDisplay: "Sale! Up To 50% Off!",
			textDisplay: "Summer Sale Collections",
			href: "shop-breadcrumb-img.html",
			buttonText: "Shop Now",
			imgSrc: "/assets/images/slider/bg1-1.png",
			altText: "bg1-1",
			width: 1000,
			height: 1,
		},
		{
			textSubDisplay: "Sale! Up To 50% Off!",
			textDisplay: "Fashion for Every Occasion",
			href: "shop-breadcrumb-img.html",
			buttonText: "Shop Now",
			imgSrc: "/assets/images/slider/bg1-2.png",
			altText: "bg1-1",
			width: 1000,
			height: 1,
		},
		{
			textSubDisplay: "Sale! Up To 50% Off!",
			textDisplay: "Stylish Looks for Any Season",
			href: "shop-breadcrumb-img.html",
			buttonText: "Shop Now",
			imgSrc: "/assets/images/slider/bg1-3.png",
			altText: "bg1-1",
			width: 1000,
			height: 1,
		},
	],
};

const Slider = () => {
	return (
		<div className=" slider-block  style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full ">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Navigation, Autoplay]}
				className="w-full h-full"
			>
				{data.slides.map((slide) => (
					<SwiperSlide className="h-full ">
						<div className="h-full ">
							<div className="slider-item h-full w-full relative ">
								<div className="container w-full h-full flex items-center relative ">
									<div className="text-content basis-1/2">
										<div className="text-sub-display">
											{slide.textSubDisplay}
										</div>
										<div className="text-display md:mt-5 mt-2">
											{slide.textDisplay}
										</div>
										<a
											href={slide.href}
											className="button-main md:mt-8 mt-3"
										>
											{slide.buttonText}
										</a>
									</div>
									<div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
										<Image
											src={slide.imgSrc}
											alt={slide.altText}
											width={1000}
											height={1}
											className="h-full w-full"
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				{/* <SwiperSlide className="h-full ">
					<div className="h-full ">
						<div className="slider-item h-full w-full relative ">
							<div className="container w-full h-full flex items-center relative ">
								<div className="text-content basis-1/2">
									<div className="text-sub-display">
										Sale! Up To 50% Off!
									</div>
									<div className="text-display md:mt-5 mt-2">
										Summer Sale Collections
									</div>
									<a
										href="shop-breadcrumb-img.html"
										className="button-main md:mt-8 mt-3"
									>
										Shop Now
									</a>
								</div>
								<div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
									<Image
										src={"/assets/images/slider/bg1-1.png"}
										alt="bg1-1"
										width={1000}
										height={1}
										className="h-full w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="h-full">
					<div className="h-full ">
						<div className="slider-item h-full w-full relative ">
							<div className="container w-full h-full flex items-center relative ">
								<div className="text-content basis-1/2">
									<div className="text-sub-display">
										Sale! Up To 50% Off!
									</div>
									<div className="text-display md:mt-5 mt-2">
										Fashion for Every Occasion
									</div>
									<a
										href="shop-breadcrumb-img.html"
										className="button-main md:mt-8 mt-3"
									>
										Shop Now
									</a>
								</div>
								<div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
									<Image
										src={"/assets/images/slider/bg1-2.png"}
										alt="bg1-1"
										width={1000}
										height={1}
										className="h-full w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="h-full">
					<div className="h-full ">
						<div className="slider-item h-full w-full relative ">
							<div className="container w-full h-full flex items-center relative ">
								<div className="text-content basis-1/2">
									<div className="text-sub-display">
										Sale! Up To 50% Off!
									</div>
									<div className="text-display md:mt-5 mt-2">
										Stylish Looks for Any Season
									</div>
									<a
										href="shop-breadcrumb-img.html"
										className="button-main md:mt-8 mt-3"
									>
										Shop Now
									</a>
								</div>
								<div className="sub-img absolute sm:w-1/2 w-3/5 2xl:-right-[60px] -right-[16px] bottom-0">
									<Image
										src={"/assets/images/slider/bg1-3.png"}
										alt="bg1-1"
										width={1000}
										height={1}
										className="h-full w-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
			</Swiper>
		</div>
	);
};

export default Slider;
