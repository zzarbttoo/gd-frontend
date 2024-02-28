import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomedInputPrice } from "../../styled/inputPrice";
import loadingImg from "../../asset/loadingMark.png";

const LoadingInvest = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/complete");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <CustomedInputPrice>
      <p className="loadingTitle">
        <span className="ratioPrice">50000원</span>을 투자 중입니다
      </p>
      <p className="loadingStrong">잠시만 기다려주세요!</p>
      <div className="loadingAni">
        <div className="loadingBar"></div>
      </div>
      <div className="loadingText">건물주 되기 1분전...</div>
      <img src={loadingImg} className="loadingImg" alt="example image" />
    </CustomedInputPrice>
  );
};

export default LoadingInvest;
