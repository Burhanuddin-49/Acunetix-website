import React from "react";
import "./styles/Footer.css";
import aces from "../../image/aces.jpeg";
import csi from "../../image/CSI.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-bg-dark py-4 border-3 border-danger">
        <div className="row">
          <div className="col">
            <h3 className="text-center py-4">ACUNETIX 10.0</h3>
            <div className="container">
              <div className="row">
                <div className="col-md-6 py-3">
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.910758697476!2d73.81383121489428!3d18.62308328734934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b860d63876d1%3A0x9bccd5081468bc36!2sDr.%20D.%20Y.%20Patil%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1665319094709!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 py-3">
                      <div className="card text-bg-dark">
                        <div className="card-body">
                          <h4 className="card-title text-center py-2">ACES</h4>
                          <div className="row">
                            <div className="col-6">
                              <img
                                src={aces}
                                alt=""
                                style={{ height: "112px" }}
                              />
                            </div>
                            <div className="col-6">
                              <a className="link-light d-block py-1" href="#">
                                LinkedIn
                              </a>
                              <a className="link-light d-block py-1" href="#">
                                Facebook
                              </a>
                              <a className="link-light d-block py-1" href="#">
                                Instagram
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 py-3">
                      <div className="card text-bg-dark">
                        <div className="card-body">
                          <h4 className="card-title text-center py-2">CSI</h4>
                          <div className="row">
                            <div className="col-6">
                              <img className="logo-csi" src={csi} alt="" />
                            </div>
                            <div className="col-6">
                              <a className="link-light d-block py-1" href="">
                                LinkedIn
                              </a>
                              <a className="link-light d-block py-1" href="">
                                Facebook
                              </a>
                              <a className="link-light d-block py-1" href="">
                                Instagram
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3" style={{ backgroundColor: "#111" }}>
        ©2022 Team Acunetix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
