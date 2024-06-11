import React from "react";
import Avatar from "@mui/material/Avatar";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white min-h-72 w-11/12 p-5 flex flex-col m-auto border-4 shadow-2xl shadow-blue-300 ">
      {/* starts */}
      <p className="text-sm tracking-wider font-semibold text-black flex-1 text-wrap break-words py-1 ">
        {item.comment}
      </p>
      <p className="text-neutral-300  text-xs self-end ">{item.source}</p>
      <div className="flex flex-row items-center gap-2 tracking-wider align-bottom ">
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Remy Sharp"
          src={item.imgUrl}
        />
        <div>
          <p className="text-sm font-semibold text-black">{item.name}</p>
          <p className="text-sm  text-black">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
