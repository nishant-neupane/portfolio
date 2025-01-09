import React, { useState } from "react";
// import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "74f6f26b-7b3f-4e34-84f9-50fe489ca52b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <div id="contact" className="contact">
      <style>
        {`.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 10px 170px;
}
.contact-title {
  position: relative;
}
.contact-title h1 {
  padding: 0px 30px;
  font-size: 60px;
  font-weight: 500;
}
.contact-title img {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.contact-section {
  display: flex;
  gap: 120px;
}
.contact-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-left h1 {
  font-size: 60px;
  font-weight: 600;
  background: linear-gradient(270deg, #df8908 80%, #b415ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact-left p {
  max-width: 550px;
  color: #d8d8d8;
  font-size: 18;
  line-height: 35px;
}
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #d8d8d8;
  font-size: 20px;
}
.contact-detail {
  display: flex;
  align-items: center;
  gap: 15px;
}
.contact-right {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
}
.contact-right label {
  color: #d8d8d8;
  font-size: 20px;
  font-weight: 400;
}
.contact-right input {
  border: none;
  width: 600;
  height: 60px;
  padding-left: 20px;
  border-radius: 4px;
  background: #32323c;
  color: #a0a0a0;
  font-size: 18px;
}
.contact-right textarea {
  width: 600px;
  border: none;
  padding: 25px;
  border-radius: 4px;
  background: #32323c;
  color: #a0a0a0;
  font-family: Outfit;
  font-size: 18px;
}
.contact-submit {
  border: none;
  color: white;
  border-radius: 50px;
  background: linear-gradient(264deg, #df8908 -5.09%, #b415ff 106.28%);
  font-size: 20px;
  padding: 20px 60px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 0.3s;
}
.contact-submit:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
.result-message {
  margin-top: 10px;
  font-size: 20px;
  background: linear-gradient(270deg, #df8908 80%, #b415ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .contact {
    align-items: start;
    gap: 20px;
    margin: 20px 70px;
  }
  .contact-title h1 {
    padding: 0;
    font-size: 50px;
    font-weight: 500;
  }
  .contact-title img {
    width: 130px;
    margin-right: -20px;
  }
  .contact-section {
    flex-direction: column;
  }
  .contact-left h1 {
    font-size: 54px;
  }
  .contact-left p {
    font-size: 18px;
  }
  .contact-detail {
    gap: 20px;
  }
  .contact-detail img {
    width: 25px;
  }
  .contact-right label {
    font-size: 20px;
  }
  .contact-right input {
    width: 100%;
    font-size: 20px;
  }
  .contact-right textarea {
    width: 95%;
    font-size: 20px;
  }
  .contact-submit {
    font-size: 20px;
    padding: 15px 40px;
  }
}
`}
      </style>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available for project work. A developer with a strong
            skill set is ready to take on new challenges and contribute
            effectively to upcoming opportunities.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>nishantneupane488@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+977 9840033587</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bhaktapur, Nepal</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          {result ? null : (
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          )}
          {result && <div className="result-message">{result}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
