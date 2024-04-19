import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div id="home">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src="https://ecoyaan.com/images/carousel-1.png"
              alt=""
              className="w-100 h-50"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "10px",
                left: "0px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h2
                style={{
                  color: "black",
                  textAlign: "left",
                  paddingTop: "7%",
                  paddingLeft: "5%",
                }}
              >
                Buy Less, Buy Better!
              </h2>
              <p
                style={{ color: "black", textAlign: "left", paddingLeft: "5%" }}
              >
                Authentic source of truth for your <br /> sustainability needs.
              </p>
              <Link to="/info">
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  About US
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://ecoyaan.com/images/carousel-2.png"
              alt=""
              className="w-100 h-50"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "10px",
                left: "20px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h2
                style={{
                  color: "black",
                  textAlign: "left",
                  paddingTop: "7%",
                  paddingLeft: "5%",
                }}
              >
                Follow us on Instagram
              </h2>
              <p
                style={{ color: "black", textAlign: "left", paddingLeft: "5%" }}
              >
                For climate news, lifestyle tips, & <br /> updates
              </p>
              <div style={{ textAlign: "left", paddingLeft: "6%" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  Follow US
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://ecoyaan.com/images/carousel-3.png"
              alt=""
              className="w-100 h-50"
            />
            <Carousel.Caption
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <h2
                style={{
                  color: "black",
                  textAlign: "left",
                  paddingTop: "7%",
                  paddingLeft: "5%",
                }}
              >
                Are you a business that truly cares about <br /> sustainability?
              </h2>
              <p
                style={{ color: "black", textAlign: "left", paddingLeft: "5%" }}
              >
                We would love to work with you
              </p>
              <div style={{ textAlign: "left", paddingLeft: "6%" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    border: "none",
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ paddingTop: "8%" }}>
        <section style={{ border: "none" }}>
          <div className="container">
            <div className="card" style={{ border: "none" }}>
              <div className="row">
                <div className="col-md-6" style={{ border: "none" }}>
                  <div className="card-block">
                    <h3 className="card-title" style={{ padding: "5%" }}>
                      joining our community in creating a more sustainable
                      furture for everyone
                    </h3>
                    <p className="card-text" style={{ padding: "5%" }}>
                      At Ecoyaan, we are more than just a platform. Our vision
                      is to build an eco-conscious community for people and
                      products.
                      <br /> <br /> Consider us your partner for all things
                      sustainable. To keep you motivated on the journey, we will
                      provide you with engaging information about climate
                      change, the latest updates on climate policies and
                      lifestyle tips that you can adopt to reduce your impact on
                      the environment.
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{ border: "none" }}>
                  <img
                    src="https://ecoyaan.com/images/Impact.png"
                    alt=""
                    className="popup"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ paddingTop: "8%" }}>
        <section style={{ border: "none" }}>
          <div className="container">
            <div className="card" style={{ border: "none" }}>
              <div className="row">
                <div className="col-md-6" style={{ border: "none" }}>
                  <div className="card-block">
                    <h2 className="card-title" style={{ padding: "5%" }}>
                      Carefully curated Eco-friendly products
                    </h2>
                    <p className="card-text" style={{ padding: "5%" }}>
                      We believe that every purchase you make can have a
                      positive impact on the planet and the future. <br />
                      <br />
                      Soon, we will be connecting you with eco-friendly and
                      sustainable products that are carefully selected based on
                      their environmental and social benefits.
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{ border: "none" }}>
                  <video width="100%" height="100%" controls>
                    <source
                      src="https://ecoyaan.com/images/ProductCuration.mp4"
                      type="video/mp4"
                      className="popup"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ paddingTop: "8%" }}>
        <section style={{ border: "none" }}>
          <div className="container">
            <div className="card" style={{ border: "none" }}>
              <div className="row">
                <div className="col-md-6" style={{ border: "none" }}>
                  <div className="card-block">
                    <h2 className="card-title" style={{ padding: "5%" }}>
                      For businesses that care deeply about sustainability
                    </h2>
                    <p className="card-text" style={{ padding: "5%" }}>
                      Do you run a business that is committed to sustainability
                      in every aspect of your work? <br /> <br />
                      Do you want to showcase your products to an incredible
                      audience of eco-conscious consumers who care? <br />{" "}
                      <br />
                      If yes, then you are the perfect fit for our platform. Our
                      community appreciates and supports businesses that are
                      transparent, ethical, and innovative in their approach to
                      sustainability. Contact us today:
                    </p>
                    <div style={{ paddingLeft: "5%", paddingBottom: "3%" }}>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ backgroundColor: "green" }}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" style={{ border: "none" }}>
                  <img
                    src="https://ecoyaan.com/images/OurStory4.png"
                    alt=""
                    className="popup"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;