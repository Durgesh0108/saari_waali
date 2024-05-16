import Image from "next/image";
import React from "react";

import Swimwear from "@/public/assets/images/collection/swimwear.png";
import top from "@/public/assets/images/collection/top.png";
// import Swimwear from "@/public/assets/images/collection/swimwear.png";

export default function CollectionBlack() {
  return (
    <div className="collection-block md:pt-20 pt-10 mb-8">
      <div className="container">
        <div className="heading3 text-center">Explore Collections</div>
      </div>
      <div className="list-collection relative section-swiper-navigation md:mt-10 mt-6 sm:px-5 px-4">
        <div className="swiper-button-prev lg:left-10 left-6" />
        <div className="swiper swiper-collection h-full relative">
          <div className="swiper-wrapper border-2 border-black w-full grid grid-cols-4">
            <div className="swiper-slide">
              <a
                href="shop-breadcrumb1.html"
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="bg-img">
                  <Image src={Swimwear} alt="swimwear" />
                  {/* <img
                    src="assets/images/collection/swimwear.png"
                    alt="swimwear"
                  /> */}
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  swimwear
                </div>
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="shop-breadcrumb1.html"
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="bg-img">
                  <Image src={top} alt="top" />
                  {/* <img src="assets/images/collection/top.png" alt="top" /> */}
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  top
                </div>
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="shop-breadcrumb1.html"
                className="collection-item block relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="bg-img">
                  <img src="assets/images/collection/sets.png" alt="sets" />
                </div>
                <div className="collection-name heading5 text-center sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] md:py-3 py-1.5 bg-white rounded-xl duration-500">
                  sets
                </div>
              </a>
            </div>
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
          </div>
        </div>
        <div className="swiper-button-next lg:right-10 right-6" />
      </div>
    </div>
  );
}
