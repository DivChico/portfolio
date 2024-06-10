import React from "react";
import Section from "./Section";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <section className="py-5">
      <p className="text-neutral-300 text-xs text-center">
        <CopyrightIcon /> DivChico. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
