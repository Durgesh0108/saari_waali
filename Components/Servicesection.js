import { BadgeCheck, Package2, PhoneCall, Truck } from "lucide-react";
import React from "react";

const Servicesection = () => {
  return (
    <div>
      <div className="benefit-block md:pt-20 pt-10">
        <div className="container">
          <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
            <div className="benefit-item flex flex-col items-center justify-center">
              <PhoneCall className="h-10 w-10" />
              <div className="heading6 text-center mt-5">
                24/7 Customer Service
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                Were here to help you with any questions or concerns you have,
                24/7.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <Package2 className="h-10 w-10"  />
              <div className="heading6 text-center mt-5">14-Day Money Back</div>
              <div className="caption1 text-secondary text-center mt-3">
                If youre not satisfied with your purchase, simply return it
                within 14 days for a refund.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <BadgeCheck className="h-10 w-10" />
              <div className="heading6 text-center mt-5">Our Guarantee</div>
              <div className="caption1 text-secondary text-center mt-3">
                {" "}
                We stand behind our products and services and guarantee your
                satisfaction.
              </div>
            </div>
            <div className="benefit-item flex flex-col items-center justify-center">
              <Truck className="h-10 w-10" />
              <div className="heading6 text-center mt-5">
                Shipping worldwide
              </div>
              <div className="caption1 text-secondary text-center mt-3">
                We ship our products worldwide, making them accessible to
                customers everywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesection;
