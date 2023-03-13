import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import home from "../assets/images/png/home.png";
import playBtn2 from "../assets/images/svg/playbtn2.svg";
import Flower from "../assets/images/png/flowerposition.png";
const Fourth = () => {
  return (
    <section className="bg_cream position-relative">
      <img
        src={Flower}
        className="position-absolute end-0 top_10 d-none d-xl-block"
        alt="flower"
      />
      <Container className=" py-md-5">
        <Row className=" py-md-5 my-5">
          <Col lg="6" sm="10" className="m-auto position-relative">
            <img className="w-100" src={home} alt="home" />
            <img
              src={playBtn2}
              className="position-absolute z-3 playbtn_position c_pointer"
              alt="playbtn"
            />
          </Col>
          <Col lg="6" className="ps-md-5">
            <div className="ps-lg-5 text-center text-lg-start">
              <h2 className="ff_timenew_roman mt-5 fw_700 fs_4xl color_darkgreen">
                Own the joy
              </h2>
              <p className="ff_opensans max_width_470 fw_400 fs_lg color_darkgreen">
                Start enriching your life today, not "someday." We're here to
                help you experience the joy of second home ownership. With Mana,
                you own a spectacular second home for 1/8 of the cost, while
                avoiding the hassles of traditional ownership.
              </p>
              <ul className="m-0 p-0 ">
                <li>
                  <a
                    href="#"
                    className=" ff_opensans fw_600 fs_lg text-decoration-underline color_darkgreen"
                  >
                    GET STARTED
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center py-5 flex-column-reverse flex-lg-row">
          <Col xsm={12} lg={5}>
            <div className="text-center text-lg-start mt-5 mt-lg-0">
              <p className="fw_700 fs_4xl color_darkgreen ff_timenew_roman">
                Forget timeshares
              </p>
              <p className="fw_400 fs_lg color_darkgreen ff_opensans max_width_470">
                With Mana, you own a home, not just a block of time. You can
                book stays throughout the year, not annually. And resale? It's
                fast and streamlined, and you set the price.
              </p>
              <ul className="m-0 p-0">
                <li>
                  <a
                    href="#"
                    className="ff_opensans text-decoration-underline fw_600 fs_lg color_darkgreen mt-5 "
                  >
                    GET STARTED
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xsm={12} lg={7} className="overflow_scroll">
            <table className="w-100 text-center">
              <tr className="w-100">
                <td
                  className="ff_opensans fw_600 fs_lg color_white bg_darkgreen py-4  "
                  colSpan={2}
                >
                  MANA HOME
                </td>
                <td className="ff_opensans fw_600 fs_lg color_white bg_lightgreen py-4 ">
                  RESORT TIMESHARE
                </td>
              </tr>
              <tr className="bg-white white_tr_boder">
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  PROPERTY TYPE
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Single-family residence
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Hotel/Condo
                </td>
              </tr>
              {/* 2nd row  */}
              <tr className="yellow_tr_boder">
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  TRUE OWNERSHIP
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Yes, real property
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  No, right-to-use time
                </td>
              </tr>
              {/* 3rd row  */}
              <tr className="white_tr_boder bg-white">
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  USAGE
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Ongoing access
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Fixed week(s)
                </td>
              </tr>
              {/* 4rth row  */}
              <tr className="yellow_tr_boder">
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  RESALE APPROACH
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Market pricing; sell on your terms
                </td>
                <td className="ff_opensans fw_400 fs_lg color_darkgreen">
                  Set pricing; sell with resort
                </td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Fourth;