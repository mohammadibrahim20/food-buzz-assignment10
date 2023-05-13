import React, { useEffect, useState } from "react";
import SingleFood from "./SingleFood";

const FoodCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://food-buzz-server.vercel.app/chines")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

 
  return (
    <div>
      <div className="container-make">
        <h2 className="mt-16 text-3xl md:text-6xl font-extrabold ">Most Popular Recipes</h2>
        <div className="divider mb-10"></div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data?.meals?.slice(0,8).map((singleCard) => (
            <SingleFood key={singleCard.idMeal} data={singleCard}></SingleFood>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
