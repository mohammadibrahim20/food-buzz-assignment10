import React from "react";
import { FaBrain, FaRegThumbsUp, FaUtensils } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    likes,
    number_of_recipes,
  } = chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="m-4 bg-cover h-80 ">
        <LazyLoad height={320} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
          <img src={chef_picture} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body ">
        <div className="ms-3">
          <h2 className="card-title text-black font-bold text-3xl">
            {chef_name}
          </h2>

          <span className="flex text-lg items-center font-medium">
            <FaRegThumbsUp className="mr-2"></FaRegThumbsUp>
            Likes: {likes}
          </span>
          <span className="flex text-lg items-center font-medium">
            <FaUtensils className="mr-2"></FaUtensils> Number of recipes:{" "}
            {number_of_recipes}
          </span>
          <span className="flex text-lg items-center font-medium">
            <FaBrain className="mr-2"></FaBrain> Year of Experience:{" "}
            {years_of_experience}
          </span>
        </div>

        <div className="card-actions justify-center mt-5">
          <Link to={`${id}`} className="text-center my-btn">
            View Recpes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
