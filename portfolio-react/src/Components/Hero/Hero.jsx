import React from "react";
import "../Hero/Hero.css";
import profile_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1pO6-cPlQtxCoMAoA1_gGHlBu3V4umXjt/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Nishant Neupane,</span>MERN Developer
      </h1>
      <p>
        I am IT student passionate about problem-solving and innovation.
        Proficient in JavaScript (MERN), with hands-on experience developing
        management systems that enhance efficiency and user satisfaction.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleDownload}>
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
