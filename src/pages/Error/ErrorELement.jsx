import React from "react";
import { Link } from "react-router-dom";

const ErrorELement = () => {
  return (
    <div>
      <div class="h-screen w-screen bg-base flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div class="max-w-md">
            <div class="text-5xl font-dark font-bold">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p class="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link to="/chef" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              back to homepage
            </Link>
          </div>
          <div class="max-w-lg">
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1683043076~exp=1683043676~hmac=88012845b417e84e4494bdb30e34247b2f724eeb85585855d74b8ea62a0be613" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorELement;
