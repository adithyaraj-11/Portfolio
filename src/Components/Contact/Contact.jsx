import React from "react";
import "./Contact.css";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";

const Contact = () => {
  const linkdirect = () => {
    window.open("https://www.linkedin.com/in/adithyaraj-k/");
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ac050821-3b35-433a-bd30-2b3131687d1a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message has been sent successfully");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className="wrap">
        <div className="leftbox">
          <h1>Reach me at</h1>
          <div className="details">
            <div onClick={linkdirect} className="det" id="lkdn">
              <img src={linkedin} alt="Linkedin" width={30} />
              <p>Adithyaraj K</p>
            </div>
            <div className="det">
              <img src={mail} alt="Mail" width={30} />
              <p>kadithyaraj11@gmail.com</p>
            </div>
            <div className="det">
              <img src={phone} alt="Phone" width={30} />
              <p>+91 70100 53964</p>
            </div>
            <div className="det">
              <img src={location} alt="Location" width={30} />
              <p>Chennai,IN</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rightbox">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here..."
          ></textarea>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
