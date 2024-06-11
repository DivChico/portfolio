import React from "react";
import Section from "./Section";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <Section id={"contact"}>
      <div className="flex items-center  justify-center ">
        <div className="space-y-5 w-full p-1 ">
          <p className=" text-3xl font-bold flex items-center gap-5 ">
            <EmailIcon fontSize="large" />
            Contact Me
          </p>
          <p className=" text-xs break-words">
            Whether you have a project in mind, a question, or just want to
            connect, I'd love to hear from you! Reach out to me via email or
            through my social media channels, and let's start a conversation.
          </p>
          <form action="" className="flex flex-col space-y-5">
            <div className="py-2 flex flex-row items-center ">
              <label htmlFor="email" className="mr-2">
                Email Address :
              </label>
              <input type="text" name="email" id="email" className="w-72 " />
            </div>
            <div className="py-2 flex flex-row items-center ">
              <label htmlFor="message" className="mr-2">
                Your message :
              </label>
              <textarea
                name="message"
                id="message"
                className="w-72 h-52"
              ></textarea>
            </div>
            <Button sx={{ width: "150px" }} variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
