import React from "react";
import "./styles/About.css";
import img1 from "../../image/A1.png";
import img2 from "../../image/A2.png";
import img3 from "../../image/A3.png";
import img4 from "../../image/A4.png";
import img5 from "../../image/A5.png";
import img6 from "../../image/A6.png";
import img7 from "../../image/A7.png";

const About = () => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("datavalue");
      var x = (e.clientX * moving_value) / 250;
      var y = (e.clientY * moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }
  return (
    <div className="about">
      <div className="split left">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quidem placeat facere excepturi ipsa cum quod, consequuntur blanditiis
          perferendis saepe enim ab cumque ipsam molestiae eum! Voluptatibus
          voluptate illo expedita alias atque praesentium temporibus
          exercitationem molestias dolore assumenda consequatur, facilis
          sapiente, veniam ad nostrum incidunt, sunt possimus nam? Libero, at.
        </p>
      </div>
      <div className="split right container1">
        <img
          src={img1}
          className="object"
          datavalue="-2"
          alt=""
        />
        <img
          src={img2}
          className="object"
          datavalue="2"
          loading="lazy"
          alt=""
        />
        <img
          src={img3}
          className="object"
          datavalue="5"
          alt=""
        />
        <img
          src={img4}
          className="object"
          datavalue="-5"
          loading="lazy"
          alt=""
        />
        <img
          src={img5}
          className="object"
          datavalue="4"
          alt=""
        />
        <img
          src={img6}
          className="object"
          datavalue="6"
          loading="lazy"
          alt=""
        />
        <img
          src={img7}
          className="object"
          datavalue="3"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
