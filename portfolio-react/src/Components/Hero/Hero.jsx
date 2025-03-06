import React from "react";

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
      <style>
        {`.hero {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
}
 .line-1 {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-align: center;
}


.anim-typewriter {
  animation: typewriter 3s steps(30) 1s 1 normal both;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.hero img {
  margin-top: 25px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
}
.hero h1 {
  text-align: center;
  
  font-size: 60px;
  font-weight: 600;
}
.hero h1 span {
  background: linear-gradient(270deg, #df8908 10%, #b415ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  width: 50%;
  text-align: center;
  font-size: 22px;
  line-height: 40px;
}
.hero-action {
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 50px;
}
.hero-connect {
  padding: 25px 45px;
  border-radius: 50px;
  background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
  cursor: pointer;
}
.hero-resume {
  padding: 25px 75px;
  border-radius: 50px;
  border: 2px solid #fff;
  cursor: pointer;
}

.hero-connect:hover {
  border: 2px solid white;
}
.hero-resume:hover {
  border-color: #b415ff;
}
@media (max-width: 768px) {
  .hero img {
    margin-top: 120px;
    width: 260px;
  }
  .hero h1 {
    margin-top: 50px;
    width: 90%;
    font-size: 50px;
  }
  .hero p {
    width: 60%;
    font-size: 18px;
    line-height: 32px;
    margin: 10px 0ox;
  }
  .hero-action {
    gap: 16px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  .hero-connect {
    padding: 20px 30px;
    border-radius: 40px;
  }
  .hero-resume {
    padding: 20px 50px;
    border-radius: 40px;
  }
}
`}
      </style>
      <img src={profile_img} alt="" />
      <h1 className="">
        <span>I'm Nishant Neupane,</span>{" "}
        <span className="anim-typewriter line-1">MERN Stack Developer</span>
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
