import React from "react";
import { FaBrain, FaRegThumbsUp, FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import MiniNav from "../../../components/shared/MiniNav/MiniNav";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const singleData = useLoaderData();
  const {
    bg_thumbnail,
    bio,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
    recipes,
  } = singleData;
  let count = 0;
  console.log(recipes);

  return (
    <div className="">
      <MiniNav text="Chef Details"></MiniNav>
      <div className="container-make">
        <div className="flex">
          <figure className="mt-8 bg-cover w-7/12 ">
            <img className="rounded-lg" src={bg_thumbnail} alt="thumbnail" />
          </figure>
          <div className=" w-5/12 card-body">
            <figure className="bg-cover pt-0 h-50 w-50">
              <img
                className="h-80 w-100 rounded-xl"
                src={chef_picture}
                alt=""
              />
            </figure>
            <h2 className="card-title text-2xl font-bold">Name: {chef_name}</h2>
            <span>
              {" "}
              <strong>Bio:</strong> {bio}
            </span>
            <div>
              <span className="flex text-lg items-center font-medium">
                <FaRegThumbsUp className="mr-2"></FaRegThumbsUp>
                Likes: {likes}
              </span>
              <span className="flex text-lg items-center font-medium">
                <FaUtensils className="mr-2"></FaUtensils> Number of recipes:
                {number_of_recipes}
              </span>
              <span className="flex text-lg items-center font-medium">
                <FaBrain className="mr-2"></FaBrain> Year of Experience:{" "}
                {years_of_experience}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container-make">
        <h3 className="text-2xl font-bold my-5">
          {" "}
          {chef_name} Popular Recipe:
        </h3>
        <div className="divider mt-0 mb-10"></div>
        <div className="grid grid-cols-3 gap-10">
          {recipes?.map((recipe, index) => (
            <Recipe key={index} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
