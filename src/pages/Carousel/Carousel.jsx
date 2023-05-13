import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative bg-gray-900">
            {/* Background image */}
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?w=1380&t=st=1683092430~exp=1683093030~hmac=b87ec82e4cc675a70685d6354eca3289847978bc9124d9ed25a890b677a684b2"
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
              <Link to="/blog" className="btn btn-error mt-8">
                Explore Blog
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-gray-900">
            {/* Background image */}
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1683092583~exp=1683093183~hmac=137c12aa9ebae5b181b65f9041bdad15dc3fbf944acfa92c4ee7030f709098f5"
              alt="Background"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

            {/* Content */}
            <div className="relative  container mx-auto px-4 py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl">
                Steamed Fried Baked Boiled <br />{" "}
                <span className="mt-5 text-red-600 ">FoodBuzz</span>
              </h1>
              <p className="mt-4 max-w-3xl text-xl text-gray-300">
                One thousand flavors in one place.
              </p>

              <Link to="/blog" className="btn btn-error mt-8">
                Explore Blog
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-gray-900">
            {/* Background image */}
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/egg-noodle-with-red-roasted-pork-wonton-table_1150-13419.jpg?w=1380&t=st=1683092488~exp=1683093088~hmac=48aaf53735180104239549b26c54d5c6cf7f2b0e1f641a9bb7f7ad5dd565436d"
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
              <Link to="/blog" className="btn btn-error mt-8">
                Explore Blog
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-gray-900">
            {/* Background image */}
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/top-view-asian-dish-with-copy-space_23-2148694381.jpg?w=1380&t=st=1683092514~exp=1683093114~hmac=bc2d3e0f5e843d65cd0a1b0c1a822e6fffd3c854e26eb8ff8e13bc456db5fffd"
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
              <Link to="/blog" className="btn btn-error mt-8">
                Explore Blog
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
