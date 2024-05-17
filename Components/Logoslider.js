import React from "react";

const Logoslider = () => {
  return (
    <div>
      <div className="brand-block md:py-[60px] py-[32px]">
        <div className="container">
          <div className="list-brand">
            <div className="swiper swiper-list-brand">
              <div className="swiper-wrapper grid grid-cols-6">
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/1.png"
                      alt={1}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/2.png"
                      alt={2}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/3.png"
                      alt={3}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/4.png"
                      alt={4}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/5.png"
                      alt={5}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/6.png"
                      alt={6}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item relative flex items-center justify-center h-[36px]">
                    <img
                      src="assets/images/brand/7.png"
                      alt={7}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logoslider;
