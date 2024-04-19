import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div style={{ paddingTop: "1%", backgroundColor: "#CDD0D3" }}>
      <footer className="footer">
        <div style={{ textAlign: "center", paddingBottom: "3%" }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
            <IoIosArrowUp />
            Back to top
          </a>
        </div>
        <div className="container container-fluid">
          <div className="row footer__links">
            <div className="col footer__col">
              <ul
                className="footer__items clean-list"
                style={{ listStyleType: "none" }}
              >
                <h5 className="">Company</h5>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href=""
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link-item"
                    href=""
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Sell on Ecoyaan
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className=""
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer__col">
              <ul
                className="footer__items clean-list"
                style={{ listStyleType: "none" }}
              >
                <h5 className="">Links</h5>
                <li className="footer__item">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link-item"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link-item"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
            <div className="col footer__col">
              <h5 className="">Follow us</h5>
              <a href="">
                <FaInstagram style={{ color: "#F00938" }} />
              </a>
              &nbsp;&nbsp;
              <a href="">
                <FaLinkedin style={{ color: "blue" }} />
              </a>
              &nbsp;&nbsp;
              <a href="">
                <IoLogoFacebook style={{ color: "blue" }} />
              </a>
            </div>
            <div className="col footer__col">
              <div className="footer__title">
                <h6>
                  Subscribe to receive updates on blogs, future launches and
                  more !
                </h6>
              </div>
              <input type="email" placeholder="Your Email Address" />
              <p style={{ fontSize: "10px" }}>
                By subscribing, you agree to receive notifications
              </p>
              <a href="" style={{ fontSize: "10px" }}>
                Privacy Policy
              </a>
              <div>
                <button
                  style={{
                    textAlign: "center",
                    padding: "3%",
                    backgroundColor: "green",
                    width: "200px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 bg-gray" />
        <div>
          <MDBFooter className="text-center">
            <MDBContainer className="p-4">
              <section className="">
                <MDBRow>
                  <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                    <h6 className="text-uppercase">
                      {" "}
                      <b> Registered Address </b>
                    </h6>

                    <ul className="list-unstyled mb-0">
                      <small>
                        <li>1-N-12T-781/1</li>
                        <li>Sri Krishna Vilasa,</li>
                        <li>Urvastores,</li>
                        <li>Ashoknagar(MR),</li>
                        <li>Mangalore,</li>
                        <li>Dakshina Kannada- 575006,</li>
                        <li>Karnataka, India</li>
                      </small>
                    </ul>
                  </MDBCol>

                  <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                    <h6 className="text-uppercase">
                      <b> Legal Bussiness Name </b>
                    </h6>

                    <ul className="list-unstyled mb-0">
                      <small>
                        <li>Kindkarma E-Retail Private Limited</li>
                        <li>CIN: U47912KA2023PTC182592</li>
                        <li>Telephone: +91 9980490777</li>
                      </small>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </section>
            </MDBContainer>
          </MDBFooter>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
