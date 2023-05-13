import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative bg-gray-900">
        {/* Background image */}
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://source.unsplash.com/random/1920x1080"
          alt="Background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to <br />{" "}
            <span className="mt-5 text-red-600 ">FoodBuzz</span>
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-300">
            no matter how you cook, Yumma has many the recipes
          </p>
          <a
            href="#"
            className="mt-8 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Explore Recipes
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
