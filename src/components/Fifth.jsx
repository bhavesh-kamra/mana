import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import firstdp from "../assets/images/svg/mandp.svg";
import seconddp from "../assets/images/svg/girldp.svg";
import thirddp from "../assets/images/svg/sunglass.svg";
import leftarrow from "../assets/images/svg/left.svg";
import rightarrow from "../assets/images/svg/right.svg";
const Fifth = () => {
  return (
    <section className=" py-md-5">
      <Container className="position-relative">
        <p className="fw_700 fs_4xl color_darkgreen ff_timenew_roman text-center">
          Owner perspectives
        </p>
        <Row className="py-3 justify-content-center">
          <Col xsm={12} sm={6} lg={4}>
            <div className="border_rgba p-3">
              <div className="d-flex align-items-center ">
                <img src={firstdp} alt="firstdp" />
                <div className="ms-3">
                  <p className="fw_600 mb-0 fs_lg color_darkgreen ff_opensans">
                    John Doe
                  </p>
                  <p className="fw_400 fs_lg color_darkgreen ff_opensans mb-0">
                    Mauris pretium,USA{" "}
                  </p>
                </div>
              </div>
              <p className="fw_400 fs_lg color_darkgreen ff_opensans mt-3">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”{" "}
              </p>
            </div>
          </Col>
          <Col xsm={12} sm={6} lg={4} className="mt-5 mt-sm-0">
            <div className="border_rgba p-3">
              <div className="d-flex align-items-center ">
                <img src={seconddp} alt="firstdp" />
                <div className="ms-3">
                  <p className="fw_600 mb-0 fs_lg color_darkgreen ff_opensans">
                    John Doe
                  </p>
                  <p className="fw_400 fs_lg color_darkgreen ff_opensans mb-0">
                    Mauris pretium,USA{" "}
                  </p>
                </div>
              </div>
              <p className="fw_400 fs_lg color_darkgreen ff_opensans mt-3">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”{" "}
              </p>
            </div>
          </Col>
          <Col xsm={12} sm={6} lg={4} className="mt-5 mt-sm-4 mt-lg-0">
            <div className="border_rgba p-3">
              <div className="d-flex align-items-center ">
                <img src={thirddp} alt="firstdp" />
                <div className="ms-3">
                  <p className="fw_600 mb-0 fs_lg color_darkgreen ff_opensans">
                    John Doe
                  </p>
                  <p className="fw_400 fs_lg color_darkgreen ff_opensans mb-0">
                    Mauris pretium,USA{" "}
                  </p>
                </div>
              </div>
              <p className="fw_400 fs_lg color_darkgreen ff_opensans mt-3">
                “Integer odio est, efficitur nec nibh quis, euismod ultricies
                diam. Quisque accumsan libero vitae massa consequat consequat.
                Sed eu tincidunt lacus, in”{" "}
              </p>
            </div>
          </Col>
        </Row>
        <img
          src={leftarrow}
          alt="leftarrow"
          className=" position-absolute max_w_15  leftarrow_pos d-none d-xxl-block"
        />
        <img
          src={rightarrow}
          alt="rightarrow"
          className=" position-absolute max_w_15  rightarrow_pos d-none d-xxl-block"
        />
      </Container>
    </section>
  );
};

export default Fifth;