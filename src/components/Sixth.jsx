import React from "react";
import { Container } from "react-bootstrap";
import leaf from "../assets/images/png/leaf.png"
import leaf2 from "../assets/images/png/leaf2.png";
const Sixth = () => {
  return (
    <section className="bg_cream position-relative">
      <img
        className="position-absolute leaf_position d-none d-xxl-block"
        src={leaf}
        alt="leaf"
      />
      <img
        className="position-absolute bottom-0 end-0  d-none d-xxl-block"
        src={leaf2}
        alt="leaf"
      />
      <Container>
        <div className="text-center py-5">
          <h2 className="ff_timenew_roman pt-5 fw_700 fs_4xl color_darkgreen">
            Don't miss out
          </h2>
          <p className="ff_opensans max_width_530 pb-5 m-auto fw_400 fs_lg color_darkgreen">
            The best homes sell fast. See the latest listings, inspiring second
            homes and buying tips.
          </p>
          <input
            type="email"
            placeholder="ENTER  EMAIL"
            className="input_modi fw_600 mt-5 ff_opensans fs_lg color_darkgreen "
          />
          <div>
            <div className="max_width_530 m-auto my-5 ">
              <p className="ff_opensans  text-center text-md-start fw_500 fs_lg color_darkgreen ">
                Select one of the following:
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div className="d-flex">
                  <input type="radio" id="buyer" name="selection" />
                  <label htmlFor="buyer">
                    <p className="ff_opensans fw_500 fs_lg color_darkgreen mb-0 ms-3">
                      I am a buyer
                    </p>
                  </label>
                </div>
                <div className="d-flex ms-4">
                  <input type="radio" id="seller" name="selection" />
                  <label htmlFor="seller">
                    <p className="ff_opensans fw_500 fs_lg color_darkgreen mb-0 ms-3">
                      I am a seller
                    </p>
                  </label>
                </div>
                <div className="d-flex ms-4">
                  <input type="radio" id="broker" name="selection" />
                                  <label htmlFor="broker">
                                      <p className="ff_opensans fw_500 fs_lg color_darkgreen mb-0 ms-3">
                      I'm an agent or broker
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <button className="ff_opensans fw_700 fs_xl button_modi mt-5 mb-3 color_white">
              SUBSCRIBE
            </button>
            <p className=" max_width_530 m-auto ff_opensans fw_400 fs_sm color_darkgreen">
              I give mana permission to contact me & agree to the
              <span className="fw_600">terms</span>.This site is protected by
              reCAPTCHA and the Google
              <span className="fw_600">privacy policy & terms of service.</span>
            </p>
            <p className=" ff_opensans fw_400 fs_lg pt-3 color_darkgreen">
              Want to chat?
              <span className="fw_600 text-decoration-underline c_pointer">
                {" "}
                Contact us.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sixth;
                