import React from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const SkillCard = ({ icon, title, desc }) => {
  return (
    <div className="space-y-3 border flex items-center   w-92 md:w-[300px] xxl:w-[370px] p-5 shadow-sm">
      <p className="  text-xl font-semibold items-center gap-2 flex">
        {icon}
        {title}
      </p>
      {/* <p className="text-white-300 tracking-wider text-sm">{desc}</p> */}
    </div>
  );
};

export default SkillCard;
