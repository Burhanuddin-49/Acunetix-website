import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/EventCatalog.css";
import event from "../../image/event.jpg";

const EventCatalog = () => {
  return (
    <div className="EventCatalog">
      <div className="split2 left2">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={event} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={event} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={event} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="split2 right2">
        <h1>Event Catalog</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          iste voluptatum aperiam rem accusamus nesciunt at. Repellendus
          laudantium, qui quaerat unde temporibus atque autem dolor dolorum,
          harum eos laborum maiores minus amet dignissimos voluptatum quod!
          Voluptatibus molestiae, vel facere atque excepturi voluptatum
          laudantium architecto iure earum! Consequuntur quisquam eos omnis?
        </p>
        <Button style={{ backgroundColor: "black", color: "white" }}>
          <Link to="/event">Events</Link>
        </Button>
        {/* <Link to="/event">
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Events
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default EventCatalog;
