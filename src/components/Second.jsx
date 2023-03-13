import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heartlock from "../assets/images/svg/heartlock.svg";
import own from "../assets/images/svg/own.svg";
import lotus from "../assets/images/svg/lotus.svg";

const Second = () => {
  return (
    <section className="bg_cream">
      <Container>
        <div className="text-center py-5 ">
          <h2 className="ff_timenew_roman mt-5 fw_700 fs_4xl color_darkgreen">
            Find your second home with Mana
          </h2>
          <p>We make it simple</p>
        </div>
        <Row className=" py-sm-5 justify-content-center">
          <Col lg={4} md={6}>
            <div className="d-flex  align-item-center">
              <div>
                <img
                  src={heartlock}
                  className="mt-2 me-3 image"
                  alt="heartlock"
                />
              </div>
              <div>
                <p className=" m-0 ff_timenew_roman  fw_700 fs_2xl color_darkgreen ">
                  Shop
                </p>
                <p className=" m-0 ff_opensans  fw_400 me-5 fs_lg color_darkgreen">
                  Explore our collection of stunning single-family homes in top
                  second home destinations. We'll help you find the perfect fit,
                  and you decide how many shares you'd like to own.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="d-flex mt-3 mt-md-0 align-item-center">
              <div className="">
                <img src={own} className="mt-2 me-3 image" alt="heartlock" />
              </div>
              <div>
                <p className=" m-0 ff_timenew_roman  fw_700 fs_2xl color_darkgreen ">
                  Own
                </p>
                <p className=" m-0 ff_opensans  fw_400 me-5 fs_lg color_darkgreen">
                  We create a property LLC for each home, find and vet
                  co-owners, and handle all the sales details. At closing, the
                  co-owners enjoy 100% ownership of the home – Pacaso does not
                  retain any shares
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="d-flex mt-3 mt-lg-0 align-item-center">
              <div>
                <img src={lotus} className="mt-2 me-3 image" alt="heartlock" />
              </div>
              <div>
                <p className=" m-0 ff_timenew_roman  fw_700 fs_2xl color_darkgreen ">
                  Enjoy
                </p>
                <p
                  className=" m-0 ff_opensans  fw_400 me-4
                           fs_lg color_darkgreen"
                >
                  We take care of furnishings, repairs, utilities and property
                  management – you just show up and relax. Scheduling is easy
                  and equitable with our app and SmartStay™ technology.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <ul className="text-center m-0 ps-0 py-5">
          <li className=" mb-md-5 pb-md-5">
            <a
              href="#"
              className="text-decoration-underline ff_opensans fw_600 fs_lg color_darkgreen "
            >
              GET STARTED
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Second;
