import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowRightCircle } from "react-icons/hi2";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const [click, setClick] = useState(true);

  console.log(recipe)
  const { cooking_method, ingredients, rating, recipe_name, strMealThumb } = recipe;

    const handleFavBtn = ()=>{
        setClick(false)
        toast.success("Item added Favorite List!");

    }



  return (
    <div className="card bg-base-100 shadow-xl">
        
      <figure>
        <img
          src={strMealThumb}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold text-indigo-600">{recipe_name}</h2>
        <div className="flex justify-between ">
          <span className="flex items-center">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            {rating} Rating
          </span>
          
            <button onClick={handleFavBtn} disabled={!click} className="btn btn-outline btn-success">
            <FaStar  className="mr-2"></FaStar>
            Add to Favorites
          </button>
         
        </div>
        <span className="text-justify">
          <strong>Cooking Method :</strong> {cooking_method?.slice(0, 250)}.....
          <Link className="text-blue-600">SeeMore</Link>
        </span>
        <h6 className="font-bold text-lg">Ingredients:</h6>
        <ul>
          {ingredients.slice(0, 5).map((i) => (
            <li className="flex items-center">
              <HiArrowRightCircle></HiArrowRightCircle> {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
