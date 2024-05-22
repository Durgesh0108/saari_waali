import React from "react";

const Page = () => {
  return (
    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 container">
      {[{}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => (
        <div className="" key={index}>
          <div
            
            className="border-2 border-black rounded-tl-[100px] rounded-br-2xl  h-72 "
          >
            <div
              className="rounded-full w-5 h-5 border-black border-2"
              style={{ backgroundColor: `#000` }}
            ></div>
            <p className="text-center">Durgesh</p>
          </div>
          <div>Durgesh</div>
        </div>
      ))}
    </div>
  );
};

export default Page;
