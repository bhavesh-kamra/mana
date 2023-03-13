import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import drawingroom from "../assets/images/png/drawingroom.png";

const Third = () => {
  return (
    <section className="bg_white overflow-hidden">
      <Container>
        <div className="text-center py-5">
          <h2 className="ff_timenew_roman mt-5 fw_700 fs_4xl color_darkgreen">
            Featured homes
          </h2>
          <p className=" m-0 ff_opensans  fw_400  fs_lg color_darkgreen">
            Browse our curated selection of wow-worthy listings – homes in the
            most desirable locations.
          </p>
        </div>
      </Container>
      <Row className=" align-items-center pb-5 justify-content-center ">
        <Col lg="6" sm="10" className="m-auto mb-5">
          <img className="w-100 " src={drawingroom} alt="drawingroom" />
        </Col>
        <Col lg="6" className="ps-sm-5 pt-5 pt-lg-0 mb-5">
          <div className="ps-lg-5 text-center text-lg-start">
            <p className="ff_opensans fw_500 fs_lg color_darkgreen">
              CORONA DEL MAR, CA
            </p>
            <h3 className="ff_timenew_roman  pb-3 fw_700 fs_3xl color_darkgreen">
              Ocean Boulevard
            </h3>
            <p className="ff_opensans fw_500 my-2 fs_lg color_darkgreen">
              $ 1,263,000 . 1/8 OWNERSHIP
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start pt-3">
              <p className="ff_opensans fw_500 fs_lg color_darkgreen">
                4 Beds{" "}
              </p>
              <p className="ff_opensans fw_500 fs_lg color_darkgreen line_after_before mx-2 px-2">
                4.5 Baths{" "}
              </p>
              <p className="ff_opensans fw_500 fs_lg color_darkgreen">
                3,143 sq ft
              </p>
            </div>
            <p className="ff_opensans fw_500 fs_lg mt-3 color_darkgreen max_width_600">
              Phasellus condimentum purus nec lacus finibus egestas. Donec a
              ipsum massa. Pellentesque convallis id erat ut tempor. Integer
              interdum purus orci, non luctus velit pulvinar quis
            </p>
            <a
              className=" ff_opensans fw_600 fs_lg color_darkgreen text-decoration-underline"
              href="#"
            >
              DETAILS
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Third;
