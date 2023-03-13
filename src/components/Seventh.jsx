import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import therealdeal from "../assets/images/png/therealdeal.png";
import inman from "../assets/images/png/inman.png";
import CNBC from "../assets/images/png/CNBC.png";
import NYT from "../assets/images/png/NYT.png";
import Fortune from "../assets/images/png/Fortune.png";
import Geekwire from "../assets/images/png/Geekwire.png";
const Seventh = () => {
  return (
    <section className=" bg-white">
      <Container>
        <div className="text-center pt-sm-5">
          <h2 className="f_timenew_roman mt-5 fw_700 fs_4xl color_darkgreen">
            As featured in:
          </h2>
        </div>
        <Row className="py-sm-5 justify-content-center">
          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={inman} alt="inman" />
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={therealdeal} alt="therealdeal" />
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={CNBC} alt="CNBC" />
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={NYT} alt="NYT" />
          </Col>

          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={Fortune} alt="fortune" />
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="pt-3 col-6 m-auto pb-5">
            <img className="w-100" src={Geekwire} alt="Geekwire" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Seventh;
