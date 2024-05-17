"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Tabsectionpart2 = () => {
  return (
    <div>
      <div className="tab-features-block filter-product-block md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-center text-center">
            <div className="menu-tab bg-surface rounded-2xl">
              <div className="menu flex items-center gap-2 p-1">
                <div
                  className="indicator absolute top-1 bottom-1 bg-white rounded-full shadow-md duration-300"
                  style={{ width: "171.594px", left: 4 }}
                ></div>
                <div
                  className="tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black active"
                  data-item="best sellers"
                >
                  best sellers
                </div>
                <div
                  className="tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black"
                  data-item="on sale"
                >
                  on sale
                </div>
                <div
                  className="tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black"
                  data-item="new arrivals"
                >
                  new arrivals
                </div>
              </div>
            </div>
          </div>
          <div className="list-product six-product hide-product-sold relative section-swiper-navigation style-outline style-small-border md:mt-10 mt-6">
            <div
              className="swiper-button-prev2 sm:left-10 left-6"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-d71036c24f1395fe4"
            >
              <i className="ph-bold ph-caret-left text-xl" />
            </div>
            <div className="swiper swiper-list-product h-full relative swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-d71036c24f1395fe4"
                aria-live="polite"
              >
                {/* List six product */}
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
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={18}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={18}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              New
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/18-1.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/18-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Quick Shop
                              </div>
                              <div className="quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px]">
                                <div className="list-size flex items-center justify-center flex-wrap gap-2">
                                  <div
                                    key={0}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    XS
                                  </div>
                                  <div
                                    key={1}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    S
                                  </div>
                                  <div
                                    key={2}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    M
                                  </div>
                                  <div
                                    key={3}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    L
                                  </div>
                                  <div
                                    key={4}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    XL
                                  </div>
                                  <div
                                    key={5}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    2XL
                                  </div>
                                </div>
                                <div className="add-cart-btn button-main w-full text-center rounded-full py-3 mt-4">
                                  Add To cart
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "23%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">46</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">154</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              Raglan Sleeve T-shirt
                            </div>
                            <div className="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={0}
                              >
                                <img
                                  src="./assets/images/product/color/green.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={1}
                              >
                                <img
                                  src="./assets/images/product/color/red.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={2}
                              >
                                <img
                                  src="./assets/images/product/color/yellow.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  yellow
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={3}
                              >
                                <img
                                  src="./assets/images/product/color/purple.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  purple
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $28.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$36.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -22%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="h-full">
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={8}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={8}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              Sale
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/8-1.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/8-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="countdown-time-block py-1.5 flex items-center justify-center">
                              <div className="text-xs font-semibold uppercase text-red">
                                <span className="countdown-day">44</span>
                                <span>D : </span>
                                <span className="countdown-hour">08</span>
                                <span>H : </span>
                                <span className="countdown-minute">02</span>
                                <span>M : </span>
                                <span className="countdown-second">21</span>
                                <span>S</span>
                              </div>
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Add To Cart
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">45</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">55</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              Kimono sleeve top
                            </div>
                            <div className="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                key={0}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#D2EF9A" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                key={1}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#DB4444" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                              <div
                                key={2}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#ECB018" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  yellow
                                </div>
                              </div>
                              <div
                                key={3}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#8684D4" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  purple
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $24.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$32.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -25%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="h-full">
                    <div
                      className="swiper-slide"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={19}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={19}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              Sale
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/19-1.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/19-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="countdown-time-block py-1.5 flex items-center justify-center">
                              <div className="text-xs font-semibold uppercase text-red">
                                <span className="countdown-day">44</span>
                                <span>D : </span>
                                <span className="countdown-hour">08</span>
                                <span>H : </span>
                                <span className="countdown-minute">02</span>
                                <span>M : </span>
                                <span className="countdown-second">21</span>
                                <span>S</span>
                              </div>
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Add To Cart
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "52%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">42</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">38</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              Off-the-Shoulder Blouse
                            </div>
                            <div className="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                key={0}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#D2EF9A" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                key={1}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#DB4444" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                              <div
                                key={2}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#ECB018" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  yellow
                                </div>
                              </div>
                              <div
                                key={3}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#8684D4" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  purple
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $32.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$40.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -20%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="swiper-slide"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={143}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={143}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              Sale
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/16-2.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/16-3.png"
                                alt="img"
                              />
                            </div>
                            <div className="countdown-time-block py-1.5 flex items-center justify-center">
                              <div className="text-xs font-semibold uppercase text-red">
                                <span className="countdown-day">44</span>
                                <span>D : </span>
                                <span className="countdown-hour">08</span>
                                <span>H : </span>
                                <span className="countdown-minute">02</span>
                                <span>M : </span>
                                <span className="countdown-second">21</span>
                                <span>S</span>
                              </div>
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Add To Cart
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "52%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">42</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">38</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              Off-the-Shoulder Blouse
                            </div>
                            <div className="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                key={0}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#D2EF9A" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                key={1}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#DB4444" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $32.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$40.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -20%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="swiper-slide"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={22}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={22}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              Sale
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/21-2.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/21-1.png"
                                alt="img"
                              />
                            </div>
                            <div className="countdown-time-block py-1.5 flex items-center justify-center">
                              <div className="text-xs font-semibold uppercase text-red">
                                <span className="countdown-day">44</span>
                                <span>D : </span>
                                <span className="countdown-hour">08</span>
                                <span>H : </span>
                                <span className="countdown-minute">02</span>
                                <span>M : </span>
                                <span className="countdown-second">21</span>
                                <span>S</span>
                              </div>
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Add To Cart
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "41%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">41</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">59</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              T-shirt Pockets
                            </div>
                            <div className="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                key={0}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#D2EF9A" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                key={1}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#DB4444" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                              <div
                                key={2}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#ECB018" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  yellow
                                </div>
                              </div>
                              <div
                                key={3}
                                className="color-item w-8 h-8 rounded-full duration-300 relative"
                                style={{ backgroundColor: "#8684D4" }}
                              >
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  purple
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $24.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$29.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -17%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="swiper-slide"
                      style={{ width: 300, marginRight: 30 }}
                    >
                      <div className="product-item grid-type" data-item={13}>
                        <div
                          className="product-main cursor-pointer block"
                          data-item={13}
                        >
                          <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                              New
                            </div>
                            <div className="list-action-right absolute top-3 right-3 max-lg:hidden">
                              <div className="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Add To Wishlist
                                </div>
                                <i className="ph ph-heart text-lg" />
                              </div>
                              <div className="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                                <div className="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                                  Compare Product
                                </div>
                                <i className="ph ph-arrow-counter-clockwise text-lg compare-icon" />
                                <i className="ph ph-check-circle text-lg checked-icon" />
                              </div>
                            </div>
                            <div className="product-img w-full h-full aspect-[3/4]">
                              <img
                                key={0}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/13-1.png"
                                alt="img"
                              />
                              <img
                                key={1}
                                className="w-full h-full object-cover duration-700"
                                src="./assets/images/product/fashion/13-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                              <div className="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                                Quick View
                              </div>
                              <div className="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Quick Shop
                              </div>
                              <div className="quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px]">
                                <div className="list-size flex items-center justify-center flex-wrap gap-2">
                                  <div
                                    key={0}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    S
                                  </div>
                                  <div
                                    key={1}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    L
                                  </div>
                                  <div
                                    key={2}
                                    className="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line"
                                  >
                                    XL
                                  </div>
                                </div>
                                <div className="add-cart-btn button-main w-full text-center rounded-full py-3 mt-4">
                                  Add To cart
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-infor mt-4 lg:mb-7">
                            <div className="product-sold sm:pb-4 pb-2">
                              <div className="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                                <div
                                  className="progress-sold bg-red absolute left-0 top-0 h-full"
                                  style={{ width: "39%" }}
                                ></div>
                              </div>
                              <div className="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Sold:
                                  </span>
                                  <span className="max-sm:text-xs">39</span>
                                </div>
                                <div className="text-button-uppercase">
                                  <span className="text-secondary2 max-sm:text-xs">
                                    Available:
                                  </span>
                                  <span className="max-sm:text-xs">61</span>
                                </div>
                              </div>
                            </div>
                            <div className="product-name text-title duration-300">
                              mesh shirt
                            </div>
                            <div className="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={0}
                              >
                                <img
                                  src="./assets/images/product/color/green.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  green
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={1}
                              >
                                <img
                                  src="./assets/images/product/color/red.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  red
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={2}
                              >
                                <img
                                  src="./assets/images/product/color/yellow.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  yellow
                                </div>
                              </div>
                              <div
                                className="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key={3}
                              >
                                <img
                                  src="./assets/images/product/color/purple.png"
                                  alt="color"
                                  className="rounded-xl w-full h-full object-cover"
                                />
                                <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                  purple
                                </div>
                              </div>
                            </div>
                            <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                              <div className="product-price text-title">
                                $35.00
                              </div>
                              <div className="product-origin-price caption1 text-secondary2">
                                <del>$45.00</del>
                              </div>
                              <div className="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                                -22%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
            <div
              className="swiper-button-next2 sm:right-10 right-6"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-d71036c24f1395fe4"
            >
              <i className="ph-bold ph-caret-right text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabsectionpart2;
