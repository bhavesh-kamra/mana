import React from "react";
import MyNav from "./MyNav";
import downloadBtn from "../assets/images/svg/downloadBtn.svg";
import playBtn from "../assets/images/svg/playBtn.svg";
const Header = () => {
  return (
    <div className=" bg_cream">
      <div className="header_bg_img  ">
        <MyNav />
        <div className="container  position-relative">
          <div className="pb-5 pt-4 ">
            <div className="text-center my-5 py-5">
              <h1 className=" ff_timenew_roman fw_700 fs_5xl mt-5 py-5 color_white">
                The modern way to buy and own a second home
              </h1>
              <button className=" ff_opensans fw_700 fs_xl button_modi my-5 color_white">
                VIEW LISTINGS
              </button>
            </div>
          </div>
          <div className="text-center pb-3 d-none d-lg-block">
            <img className="c_pointer" src={downloadBtn} alt="download-btn" />
          </div>
          <div className="end-0  position-absolute d-none d-lg-block top_70 c_pointer">
            <img src={playBtn} alt="download-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
