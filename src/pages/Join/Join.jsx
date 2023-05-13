import React from "react";

const Join = () => {
  return (
    <div className="container-make bg-white rounded-2xl my-6 ps-5 md:ps-20 py-20 md:my-32">
      <div className="flex relative">
        <div className="">
          <h4 className="text-lg font-semibold text-red-500">JOIN US</h4>
          <h2 className="font-semibold text-3xl md:text-5xl ">
            Become a Contributor <br /> and enjoy program <br /> benefits
          </h2>
          <button className="btn btn-error mt-8">JOIN NOW</button>
        </div>
        <figure className="object-cover absolute hidden md:block -bottom-20 right-0 ">
          <img
          className=""
            src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/img_1.png"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};

export default Join;
