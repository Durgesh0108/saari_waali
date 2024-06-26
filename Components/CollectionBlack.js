"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Swimwear from "@/public/assets/images/collection/swimwear.png";
import top from "@/public/assets/images/collection/top.png";
// import Swimwear from "@/public/assets/images/collection/swimwear.png";

const data = {
	slides: [
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "assets/images/collection/swimwear.png",
			altText: "swimwear",
			collectionName: "swimwear",
		},
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "assets/images/collection/top.png",
			altText: "top",
			collectionName: "top",
		},
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "assets/images/collection/sets.png",
			altText: "sets",
			collectionName: "sets",
		},
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "assets/images/collection/outerwear.png",
			altText: "outerwear",
			collectionName: "outerwear",
		},
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "assets/images/collection/underwear.png",
			altText: "underwear",
			collectionName: "underwear",
		},
		{
			href: "shop-breadcrumb1.html",
			imgSrc: "/assets/images/collection/t-shirt.png",
			altText: "t-shirt",
			collectionName: "t-shirt",
		},
	],
};

export default function CollectionBlack() {
	return (
		<div className="collection-block md:pt-20 pt-10 mb-8">
			<div className="container">
				<div className="heading3 text-center">Explore Collections</div>
			</div>
			<div className="list-collection relative section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
				<div className="swiper-button-prev lg:left-10 left-6" />
				<Swiper
					slidesPerView={4}
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
					modules={[Autoplay]}
					className="w-full h-full"
				>
					<SwiperSlide className="h-full ">
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									{/* <Image src={Swimwear} alt="swimwear" /> */}
									<img
										src="assets/images/collection/swimwear.png"
										alt="swimwear"
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									swimwear
								</div>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide className="h-full">
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									{/* <Image src={top} alt="top" /> */}
									<img
										src="assets/images/collection/top.png"
										alt="top"
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									top
								</div>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide className="h-full">
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									<img
										src="assets/images/collection/sets.png"
										alt="sets"
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									sets
								</div>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									<img
										src="assets/images/collection/outerwear.png"
										alt="outerwear"
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									outerwear
								</div>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									<img
										src="assets/images/collection/underwear.png"
										alt="underwear"
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									underwear
								</div>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-slide">
							<a
								href="shop-breadcrumb1.html"
								className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
							>
								<div className="bg-img">
									<Image
										src="/assets/images/collection/t-shirt.png"
										alt="t-shirt"
										width={1000}
										height={1}
									/>
								</div>
								<div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
									t-shirt
								</div>
							</a>
						</div>
					</SwiperSlide>
				</Swiper>

				<div className="swiper-button-next lg:right-10 right-6" />
			</div>
		</div>
	);
}
