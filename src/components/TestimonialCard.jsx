import React from "react";
import Avatar from "@mui/material/Avatar";

const TestimonialCard = () => {
  return (
    <div className="bg-white h-52 w-11/12 p-5 flex flex-col m-auto border-4 shadow-2xl shadow-blue-300 ">
      {/* starts */}
      <p className="text-sm tracking-wider font-semibold text-black flex-1 text-wrap break-words py-1 ">
        criptioondiptiondescriptscriptiondescriptiondescriptioncriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptioncriptiondescr
      </p>
      <div className="flex flex-row items-center gap-2 tracking-wider align-bottom ">
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Remy Sharp"
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        />
        <div>
          <p className="text-sm font-semibold text-black">Baker</p>
          <p className="text-sm  text-black">freelance react dev</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
