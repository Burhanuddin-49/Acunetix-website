import React from "react";
import "./Card.css";
import event from '../../image/event.jpg'


export default function cards2() {
  return (
    <div className="bodyEvent">
      <div className="containerEvent">
        <div className="headingEvent">
          <h2>Here are all the </h2>
          <h2>Amazing Events </h2>
        </div>

        <div className="cardEvent">
          <div className="box">
            <div className="content">
              <img src={event} alt="" />
              <h4>24 Aug</h4>
              <a href="/event" className="more">
                Read more
              </a>
              <a href="/event" className="register">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
