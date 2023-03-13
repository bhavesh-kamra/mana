import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import page_logo from "../assets/images/svg/pagelogo.svg";
import applestore from "../assets/images/png/APPLESTORE.png";
import googlepay from "../assets/images/png/googleplay.png";
import insta from "../assets/images/svg/insta.svg";
import linkdin from "../assets/images/svg/linkdin.svg";
import ping from "../assets/images/svg/ping.svg";
import tweeter from "../assets/images/svg/twiter.svg";
import utube from "../assets/images/svg/youtube.svg";
const Footer = () => {
  return (
    <footer className="bg_darkgreen pt-5">
      <Container>
        <Row className="pb-5 ">
          <Col xsm={12} md={6} className="text-center text-md-start">
            <div className="max_w_344 text-center text-">
              <img src={page_logo} alt="page_logo" className="mb-5" />
              <p className="ff_opensans fw_600 fs_sm color_white">
                SIGN UP FOR FULL ACCESS
              </p>
              <p className="ff_opensans fw_400 fs_sm color_white">
                Unlock exclusive features & receive updates
              </p>
              <div className="d-flex bg-white justify-content-between border_r_31 p-1 mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-100 border-0 outline_0 border_r_31 p-3"
                />
                <button className="ff_opensans fw_600 fs_sm color_white bg_darkgreen py-3 px-4 border-0 border_r_31">
                  UNLOCK
                </button>
              </div>
            </div>
          </Col>
          <Col xsm={12} md={6} className="m-auto">
            <Row className="mt-5 justify-content-center">
              <Col xsm={6} md={4} className="col-6">
                <ul className="ps-0 text-center text-md-start">
                  <li className="c_pointer ff_opensans fw_600 fs_sm color_white">
                    OFFERINGS
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-4">
                    Learn
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Listings
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Scheduling
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Financing
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Closing
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Selling
                  </li>
                </ul>
              </Col>
              <Col xsm={6} md={4} className="col-6">
                <ul className="ps-0 text-center text-md-start ">
                  <li className="c_pointer ff_opensans fw_600 fs_sm color_white">
                    ABOUT
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-4">
                    Our story
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Agents
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Careers
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Get the inside story
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Press
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Communities
                  </li>
                </ul>
              </Col>
              <Col xsm={6} md={4} className="col-6 mt-5 mt-md-0">
                <ul className="ps-0 text-center text-md-start">
                  <li className="c_pointer ff_opensans fw_600 fs_sm color_white">
                    SUPPORT
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-4">
                    Resources
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    FAQs
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Privacy
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Candidate Privacy
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Sitemap
                  </li>
                  <li className="c_pointer ff_opensans fw_400 fs_sm color_white mt-3">
                    Contact
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="border_btm_top">
          <Row className="align-items-center py-4 justify-content-between">
            <Col lg={4} sm={6} className="m-auto col-6">
              <div className="d-flex flex-column flex-md-row my-5 my-lg-0">
                <img
                  src={googlepay}
                  alt="googlepay"
                  className="c_pointer w-100"
                />
                <img
                  src={applestore}
                  alt="applestore"
                  className="ms-md-3 w-100 my-3 my-md-0 c_pointer w-100"
                />
              </div>
            </Col>
            <Col lg={7} sm={10} className="m-auto">
              <Row className="justify-content-between align-items-center">
                <Col xsm={2}>
                  <img src={insta} alt="insta" className="c_pointer" />
                </Col>
                <Col xsm={2}>
                  <img src={ping} alt="ping" className="c_pointer" />
                </Col>
                <Col xsm={2}>
                  <img src={linkdin} alt="linkdin" className="c_pointer" />
                </Col>
                <Col xsm={2}>
                  <img src={tweeter} alt="tweeter" className="c_pointer" />
                </Col>
                <Col xsm={2}>
                  <img src={utube} alt="utube" className="c_pointer" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <p className="text-center ff_opensans fw_400 fs_sm color_white py-4 mb-0">
          @copyrightmana2021
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
