import React from "react";

const TechCard = ({ imgLink, title }) => {
  return (
    <div className="flex items-center justify-center flex-col w-22 md:w-56 ">
      <img className="w-14 " src={imgLink} alt={title} />
      <p className="font-semibold flex w">{title}</p>
    </div>
  );
};

export default TechCard;
