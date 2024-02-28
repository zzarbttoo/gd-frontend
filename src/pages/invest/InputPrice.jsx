import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { CustomedInputPrice } from "../../styled/inputPrice";

import arrowIcon from "../../asset/arrow.png";

function InputPrice(props) {
  const [inputValue, setInputValue] = useState("");
  const [investAmount, setInvestAmount] = useState(""); // 추가된 부분

  const handleChange = (e) => {
    const value = e.target.value;
    // 숫자가 아닌 경우에는 빈 문자열로 대체
    const newValue = value.replace(/\D/g, "");
    setInputValue(newValue);
  };

  useEffect(() => {
    setInvestAmount(inputValue); // 입력된 값으로 investAmount 업데이트
  }, [inputValue]);

  const handleNext = () => {
    // 다음 버튼 클릭 시 실행할 함수
    console.log("Invest amount:", investAmount); // 예시: 입력된 투자 금액을 콘솔에 출력
    // 이곳에 다음 단계로 넘어가는 로직 추가
  };

  return (
    <CustomedInputPrice>
      <img src={arrowIcon} className="arrowIcon" alt="Example Image" />
      <p className="addressTitle">제주시 애월읍 33 빈집 8483 에</p>
      <div className="line"></div>
      <input
        type="text"
        className="inputNum"
        value={inputValue}
        onChange={handleChange}
        placeholder="얼마를 투자하시겠어요?"
      />
      <p className="notice">최소 5천원부터 가능해요</p>
      <div className="nextBtn" onClick={handleNext}>
        다음
      </div>{" "}
      {/* 다음 버튼에 클릭 핸들러 추가 */}
      <NavBar />
    </CustomedInputPrice>
  );
}

export default InputPrice;
