import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <style>
        {`
          .about {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 60px;
            margin: 60px 170px;
          }
          .about-title {
            position: relative;
          }
          .about-title h1 {
            padding: 0px 30px;
            font-size: 69px;
            font-weight: 600;
          }
          .about-title img {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          .about-sections {
            display: flex;
            gap: 60px;
          }
          .about-right {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }
          .about-para {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 22px;
            font-weight: 400;
          }
          .about-skills {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .about-skill {
            display: flex;
            align-items: center;
            gap: 50px;
            transition: 0.3s;
          }
          .about-skill p {
            min-width: 150px;
            font-size: 20px;
            font-family: 400;
          }
          .about-skill hr {
            outline: none;
            border: none;
            width: 50%;
            height: 8px;
            border-radius: 50px;
            background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
          }
          .about-achievements {
            display: flex;
            width: 100%;
            justify-content: space-around;
            margin-bottom: 60px;
          }
          .about-achievement {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            transition: 0.5s;
          }
          .about-achievement h1 {
            font-size: 50px;
            font-weight: 700;
            background: linear-gradient(264deg, #df8908 50.41%, #b415ff 65.28%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-achievement p {
            font-size: 20px;
            font-weight: 400;
          }
          .about-skill:hover {
            transform: scale(1.05);
            transition: 0.3s;
          }
          .about-achievement:hover {
            transform: scale(1.05);
            transition: 0.3s;
          }

          @media (max-width: 768px) {
            .about {
              gap: 80px;
              margin: 50px 70px;
            }
            .about-title h1 {
              font-size: 50px;
              padding: 0;
            }
            .about-title img {
              width: 130px;
              right: -20px;
            }
            .about-sections {
              flex-direction: column;
            }
            .about-left {
              display: none;
            }
            .about-para {
              font-size: 18px;
              line-height: 32px;
            }
            .about-skill {
              gap: 20px;
              align-items: center;
            }
            .about-skill p {
              font-size: 20px;
            }
            .about-skill hr {
              height: 6px;
            }
            .about-achievements {
              justify-content: space-between;
            }
            .about-achievement {
              gap: 10px;
            }
            .about-achievement h1 {
              font-size: 34px;
              font-weight: 600;
            }
            .about-achievement p {
              text-align: center;
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="background pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_image}
            alt="profile"
            style={{ height: "350px", width: "300px", objectFit: "cover" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              IT student passionate about problem-solving and innovation.
              Proficient in Java and JavaScript (MERN), with hands-on experience
              developing management systems that enhance efficiency and user
              satisfaction.
            </p>
            <p>
              A fast learner and strong team player with excellent communication
              skills, eager to contribute and grow in the IT industry.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
