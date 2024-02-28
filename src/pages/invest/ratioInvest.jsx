import React from "react";
import NavBar from "../../components/NavBar";
import { CustomedInputPrice } from "../../styled/inputPrice";

import arrowIcon from "../../asset/arrow.png";

function RatioInvest(props) {
  return (
    <CustomedInputPrice>
      <img src={arrowIcon} className="arrowIcon" alt="Example Image" />
      <p className="ratioTitle">
        <span className="ratioAddr">제주시 애월읍 33 빈집8483</span>에
      </p>
      <p className="ratioTitle">총 2억 5000만원 중</p>
      <p className="ratioTitle">
        <span className="ratioPrice">50,000원</span>을 투자할까요?
      </p>
      <div className="investBtn">투자하기</div>
      <NavBar />
    </CustomedInputPrice>
  );
}

export default RatioInvest;
