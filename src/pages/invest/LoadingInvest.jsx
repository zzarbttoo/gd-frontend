import React from "react";
import NavBar from "../../components/NavBar";
import { CustomedInputPrice } from "../../styled/inputPrice";
import loadingImg from "../../asset/loadingMark.png";

function LoadingInvest(props) {
  return (
    <CustomedInputPrice>
      <p className="loadingTitle">
        <span className="ratioPrice">50,000원</span>을 투자 중입니다
      </p>
      <p className="loadingStrong">잠시만 기다려주세요!</p>
      <div className="loadingAni">
        <div className="loadingBar"></div>
      </div>
      <div className="loadingText">건물주 되기 1분전...</div>
      <img src={loadingImg} className="loadingImg" alt="example image" />
    </CustomedInputPrice>
  );
}

export default LoadingInvest;
