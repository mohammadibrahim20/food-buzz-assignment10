import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import FoodCard from "../../FoodCard/FoodCard";
import FoodCoures from "../../FoodCourse/FoodCoures";
import Join from "../../Join/Join";
import ChefCard from "./ChefCard";

const Chef = () => {
  const data = useLoaderData();

    

  return (
    <div className="bg-secondary-new pb-3 px-3">
      {/* <Banner></Banner> */}
      <Carousel></Carousel>
      <div className="container-make">
        <h2 className="mt-16 text-3xl md:text-6xl font-extrabold ">Popular Chef</h2>
        <div className="divider mb-10"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
      <FoodCard></FoodCard>
      <Join></Join>
      <FoodCoures></FoodCoures>
    </div>
  );
};

export default Chef;
