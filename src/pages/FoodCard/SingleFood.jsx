import React from "react";

const SingleFood = ({ data }) => {
  const { strMealThumb, strMeal } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={strMealThumb}
          alt="Shoes"
          className="rounded-2xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{strMeal}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
