import React from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const SkillCard = () => {
  return (
    <div className="space-y-3 border border-red-500 w-[250px] p-5">
      <p className="text-blue-500 font-semibold flex">
        <SmartphoneIcon />
        <span></span>
        App Devlopment
      </p>
      <p className="text-neutral-300 text-xs px-1">Description</p>
    </div>
  );
};

export default SkillCard;
