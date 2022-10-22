import React from "react";
import "./Card.css";
import event from '../../image/event.jpg'


export default function cards2() {
const data = [
  {id: 1, name: "game", img: event, date: "2 Dec"},
  {id: 2, name: "game", img: event, date: "2 Dec"},
  {id: 3, name: "game", img: event, date: "2 Dec"},
  {id: 3, name: "game", img: event, date: "2 Dec"},
  {id: 3, name: "game", img: event, date: "2 Dec"},
  {id: 3, name: "game", img: event, date: "2 Dec"},
  {id: 3, name: "game", img: event, date: "2 Dec"},
]

  return (
    <div className="bodyEvent">
      <div className="containerEvent">
        <div className="headingEvent">
          <h2>Here are all the </h2>
          <h2>Amazing Events </h2>
        </div>

        {data.map((data) => (
          <div className="cardEvent">
            <div className="box">
              <div className="content">
                <img src={data.img} alt="" />
                <h4>{data.date}</h4>
                <a href="/event" className="more">
                  Read more
                </a>
                <a href="/event" className="register">
                  Register
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
