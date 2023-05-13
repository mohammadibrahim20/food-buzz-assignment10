import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const FoodCoures = () => {
  return (
    <div className="grid md:grid-cols-2 mt-10 md:my-32 container-make">
      <div className="">
        <h4 className="text-lg font-semibold text-red-500">BENEFITS</h4>
        <h2 className="font-semibold text-2xl md:text-5xl ">
          Become a Contributor <br /> and enjoy program <br /> benefits
        </h2>
        <p className="pr-12 mt-2 text-lg">
          China has the most popular culinary heritage in the world. The history
          of their cuisine dates back to about 1000 years with varied cooking
          styles, techniques and ingredients that have evolved over time.
        </p>
        <div>
          <div className="flex items-center mt-0 py-0">
            <div className="text-center rounded-full p-5  w-12 h-12 ml-5 bg-amber-200 flex items-center justify-center ">
              <span>
                <FaCheckCircle className="text-yellow-500 text-xl"></FaCheckCircle>
              </span>
            </div>
            <div className="m-5 md:pr-28">
              <h2 className="text-2xl font-medium">Extra Money</h2>
              <p>
                Odio blandit convallis aliquet nibh potenti auctor primis neque
                efficitur commodo porttitor
              </p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="text-center rounded-full p-5 w-12 h-12 ml-5 bg-amber-200 flex items-center justify-center ">
              <span>
                <FaCheckCircle className="text-yellow-500 text-xl"></FaCheckCircle>
              </span>
            </div>
            <div className="ml-5 md:pr-28">
              <h2 className="text-2xl font-medium">Extra Money</h2>
              <p>
                Odio blandit convallis aliquet nibh potenti auctor primis neque
                efficitur commodo porttitor
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-center rounded-full p-5 w-12 h-12 ml-5 bg-amber-200 flex items-center justify-center ">
              <span>
                <FaCheckCircle className="text-yellow-500 text-xl"></FaCheckCircle>
              </span>
            </div>
            <div className="m-5 md:pr-28">
              <h2 className="text-2xl font-medium">Extra Money</h2>
              <p>
                Odio blandit convallis aliquet nibh potenti auctor primis neque
                efficitur commodo porttitor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <figure className="p-10 md:p-0">
          <img
            src="https://point.moxcreative.com/yumma/wp-content/uploads/sites/2/2022/04/happy-young-couple-cooking-together-in-the-kitchen-at-home.jpg"
            alt=""
            className="rounded-l-2xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default FoodCoures;
