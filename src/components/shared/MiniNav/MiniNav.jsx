import React from "react";

const MiniNav = ({text}) => {
  return (
    <header className="bg-secondary-new h-60 mb-20">
      <h2 className="text-center text-6xl pt-20 ">{text}</h2>
    </header>
  );
};

export default MiniNav;
