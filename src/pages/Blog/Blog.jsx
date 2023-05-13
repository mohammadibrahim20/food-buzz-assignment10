import React from "react";
import MiniNav from "../../components/shared/MiniNav/MiniNav";
import MyDocument from "../MyDucoment/MyDocument ";
// Create styles

const Blog = () => {
  return (
    <div>
      <MiniNav text="Question and Answer"></MiniNav>

      <div className="container-make grid gap-5 px-5 md:grid-cols-2 ">
        <MyDocument></MyDocument>
        <div>
          <figure>
            <img
              src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?w=826&t=st=1683087780~exp=1683088380~hmac=1fc5c8c8c2bfc96e67edf0b9bba65d929584f3547506ca58e7a84461f8ede74f"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Blog;
// ReactDOM.render(<App />, document.getElementById('root'));
