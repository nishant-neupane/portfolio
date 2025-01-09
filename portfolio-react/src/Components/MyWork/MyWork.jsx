import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <style>
        {`.mywork {
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin: 30px 170px;
}
.mywork-title {
  position: relative;
}
.mywork-title h1 {
  padding: 0px 30px;
  font-size: 60px;
  font-weight: 500;
}
.mywork-title img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.mywork-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
.mywork-container img {
  box-sizing: border-box;
  height: 200px;
  width: 300px;
  transition: 0.4s;
  cursor: pointer;
}
.mywork-container img:hover {
  transform: scale(1.4);
  border-radius: 10px;
  transition: 0.3s;
}
.mywork-showmore {
  display: flex;
  gap: 15px;
  border-radius: 50px;
  border: 2px solid white;
  padding: 30px 60px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 80px;
  transition: 0.6s;
  cursor: pointer;
}
.mywork-showmore:hover {
  gap: 50px;
  transition: 0.6s;
}
@media (max-width: 768px) {
  .mywork {
    align-items: start;
    gap: 20px;
    margin: 20px 70px;
  }
  .mywork-title h1 {
    padding: 0;
    font-size: 50px;
    font-weight: 500;
  }
  .mywork-title img {
    width: 130px;
    margin-right: -20px;
  }
  .mywork-container {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .mywork-container img {
    width: 100%;
    height: 100%;
  }
  .mywork-showmore {
    padding: 20px 40px;
    font-size: 18px;
    margin: 50px auto;
    cursor: pointer;
  }
}

        `}
      </style>
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((Work, index) => {
          return <img key={index} src={Work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
