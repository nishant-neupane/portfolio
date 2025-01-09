import React from "react";
// import "./Footer.css";
import footer_logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <style>
        {`.footer {
  margin: 40px 170px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
}
.footer-top-left p {
  font-size: 18px;
  max-width: 400px;
}
.footer-top-right {
  display: flex;
  align-items: center;
  gap: 35px;
}
.footer-email-input {
  display: flex;
  gap: 30px;
  padding: 15px 30px;
  border-radius: 50px;
  background: #32323b;
  padding-right: 80px;
}
.footer-email-input input {
  outline: none;
  border: none;
  background: transparent;
  color: #a0a0a0;
  font-size: 15px;
}
.footer-subscribe {
  font-size: 18px;
  padding: 20px 50px;
  border-radius: 50px;
  background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
  cursor: pointer;
  transition: 0.3s;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}

.footer-bottom-right {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
}
.footer-email-input:hover {
  border: 2px solid white;
}
.footer-subscribe:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

@media (max-width: 768px) {
  .footer {
    margin: 50px 70px;
  }
  .footer-top {
    flex-direction: column;
    gap: 50px;
  }
  .footer-bottom {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
  }
}
`}
      </style>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am IT student passionate about problem-solving and innovation.
            Proficient in JavaScript (MERN), with hands-on experience developing
            management systems that enhance efficiency and user satisfaction.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Nishant Neupane. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
