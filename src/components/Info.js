import React from "react";
import { GiHummingbird } from "react-icons/gi";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Info = () => {
  return (
    <div>
      <div id="info" style={{ paddingTop: "8%", backgroundColor: "#D6EFFE" }}>
        <section style={{ border: "none" }}>
          <div className="container">
            <div
              className="card"
              style={{ border: "none", backgroundColor: "#D6EFFE" }}
            >
              <div className="row">
                <div className="col-md-6" style={{ border: "none" }}>
                  <div className="card-block">
                    <h3 className="card-title" style={{ padding: "5%" }}>
                      <b> About Ecoyaan</b>
                    </h3>
                    <p className="card-text" style={{ padding: "5%" }}>
                      At Ecoyaan, we are more than just a platform. Our goal is
                      to build a community of eco-conscious people who share a
                      common vision and passion for a more sustainable world.{" "}
                      <br /> <br />
                      We recognize that sustainability is a journey (as the
                      Sanskrit word “yaan” suggests). To keep you motivated on
                      this journey, on our platform and our social media pages,
                      you can find: <br />
                      <GiHummingbird style={{ color: "green" }} /> &nbsp;&nbsp;
                      Tips and tricks to adopt a more eco-friendly and low-waste
                      lifestyle <br />
                      <GiHummingbird style={{ color: "green" }} /> &nbsp;&nbsp;
                      Videos, posts, and quizzes on climate change and
                      sustainability <br />
                      <GiHummingbird style={{ color: "green" }} /> &nbsp;&nbsp;
                      Events and pledges that invite you to adopt a more
                      sustainable lifestyle <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-6" style={{ border: "none" }}>
                  <img
                    src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
                    alt=""
                    className="about_info"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ paddingTop: "8%", backgroundColor: "#FCF4F5" }}>
        <div className="container">
          <h3 style={{ paddingBottom: "2%" }}>
            <b>Our Values</b>
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "540px", backgroundColor: "#FCF4F5" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://ecoyaan.com/images/Trust.png"
                      className="popup img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Trust</h5>
                      <p className="card-text">
                        We value the trust of our community. We strive to be
                        transparent and honest in everything we do, from the
                        content we share today to sourcing our products in the
                        future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "540px", backgroundColor: "#FCF4F5" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://ecoyaan.com/images/Authenticity.png"
                      className="popup img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Authenticity</h5>
                      <p className="card-text">
                        We are genuine in our mission to promote sustainability
                        and environmental awareness. An authentic community of
                        eco-conscious people can inspire each other on the
                        journey towards sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "540px", backgroundColor: "#FCF4F5" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://ecoyaan.com/images/Impact.png"
                      className="popup img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Impact</h5>
                      <p className="card-text">
                        We measure our success by our impact on the planet and
                        our community. We aim to empower our sellers and
                        customers to make responsible choices that benefit their
                        well-being and the well-being of others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "540px", backgroundColor: "#FCF4F5" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://ecoyaan.com/images/FunAndEngaging.png"
                      className="popup img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Fun & Engaging</h5>
                      <p className="card-text">
                        Moving towards a sustainable lifestyle and the constant
                        news around climate change can be stressful. We aim to
                        inject fun and creativity into everything we do, from
                        designing our products to providing services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "5%", backgroundColor: "#D6EFFE" }}>
        <div className="container">
          <h3 style={{ paddingBottom: "2%" }}>
            <b>Our Story</b>
          </h3>
        </div>
        <section style={{ border: "none" }}>
          <div className="container">
            <div
              className="card"
              style={{ border: "none", backgroundColor: "#D6EFFE" }}
            >
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                    alt=""
                    className="w-100"
                  />
                  <div className="pt-4">
                    <img
                      src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
                <div className="col-md-9" style={{ border: "none" }}>
                  <div className="card-block">
                    <p className="card-text" style={{ padding: "5%" }}>
                      We started Ecoyaan after watching an episode of “Our
                      Planet II”, where we saw the devastating impact of plastic
                      pollution and climate change on the albatross birds. That
                      moment ignited our mission. <br /> <br />
                      Our research suggests that many Indians understand global
                      warming, yet access to sustainable practices and products
                      remains limited. We also noticed that there is a lack of
                      support for eco-friendly businesses. <br />
                      <br />
                      We created Ecoyaan to connect consumers, businesses, and
                      sustainability experts. We want to make it easy and
                      convenient for people to access eco-friendly products and
                      services, learn and share best practices, and support
                      sustainability initiatives. <br />
                      <br />
                      As founders, we are not perfect, but we are passionate. We
                      believe that every small step matters. Join us and be a
                      part of the Ecoyaan community — together, we’ll make a
                      difference. <br /> <br />
                      Connect with the founders on LinkedIn here:
                      <a href="">
                      Abhishek Rao
                        <FaLinkedin style={{ color: "blue" }} />
                      </a>&nbsp;&nbsp;
                      <a href="">
                      Sarwanjeet Singh
                        <FaLinkedin style={{ color: "blue" }} />
                      </a>
                       
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          paddingTop: "4%",
          backgroundColor: "#FCF4F5",
          paddingLeft: "4%",
          paddingRight: "4%",
        }}
      >
        <MDBContainer>
          <h3>
            <b style={{ textAlign: "left" }}>Meet the Team</b>
          </h3>

          <MDBRow
            fluid
            className="text-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          >
            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/about-us-social-media-team-01.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>SHRUTHI</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    SOCIAL MEDIA
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    Shruthi is in charge of our Instagram. She is a practising
                    Vegan and cares deeply about sustainability. Follow her
                    small business here &nbsp;&nbsp;
                    <FaInstagram style={{ color: "#F00938" }} />
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/about-us-social-media-team-02.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>URMIL</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    SOCIAL MEDIA
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    Urmil creates engaging content for us. She runs her own
                    sustainable apparel store with her sister, advocates for
                    slow fashion. Check out her business <a href=""> here </a>
                    <FaInstagram style={{ color: "#F00938" }} />
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/about-us-product-team-01.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>DIVYA</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    UX DESIGN
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    Divya creates user-friendly and engaging interfaces for our
                    platform. Check out more of her work on{" "}
                    <a href="">Behance</a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/about-us-product-team-02.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>PRASHANITH</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    ENGINEERING
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    Prashanith is our front-end engineer, who brings the UX
                    designs to life
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/about-us-product-team-03.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>SAI ABHILASH</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    ENGINEERING
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    Sai Abhilash is our back-end engineer, who manages and
                    optimises the infrastructure and logic of our platform
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="mb-4">
              <MDBCard
                className="border-0"
                style={{ backgroundColor: "#FCF4F5" }}
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src="https://ecoyaan.com/images/favicon.png"
                    fluid
                    className="popup w-50"
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">
                    <b>???</b>
                  </h5>

                  <h6 style={{ color: "brown", fontFamily: "monospace" }}>
                    TEAM ECOYAAN
                  </h6>

                  <p style={{ fontStretch: "semi-condensed" }}>
                    This spot awaits you. Check out our{" "}
                    <a href="">open positions</a>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Info;
