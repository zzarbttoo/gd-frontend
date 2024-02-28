import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomedInputPrice } from "../../styled/inputPrice";
import { BackButton } from "../../styled/investDetail";

function InputPrice(props) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [investAmount, setInvestAmount] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setInvestAmount(inputValue);
  }, [inputValue]);

  const handleNext = () => {
    // 입력된 값이 5천원 이상인지 확인
    if (parseInt(inputValue, 10) < 5000) {
      alert("최소 5천원 이상을 입력해주세요.");
      return; // 입력이 5천원 미만이면 함수 종료
    }
    console.log("Invest amount:", investAmount); // 예시: 입력된 투자 금액을 콘솔에 출력
    // 이곳에 다음 단계로 넘어가는 로직 추가
    navigate("/ratio-price");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <CustomedInputPrice>
      <div style={{ margin: "20px 10px 0px 10px" }}>
        <BackButton onClick={handleGoBack}></BackButton>
      </div>
      <p
        style={{
          fontSize: "24px",
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            fontWeight: "700",
            marginLeft: "20px",
            fontSize: "24px",
          }}
        >
          삼도이동 602-1
        </span>{" "}
        <br />
        <div
          style={{
            fontWeight: "700",
            marginLeft: "20px",
            fontSize: "24px",
          }}
        >
          (제주 아이린아파트 5차)
          <span
            stype={{
              fontWeight: "400",
            }}
          >
            {" "}
            에
          </span>
        </div>
      </p>
      <input
        type="number"
        className="inputNum"
        value={inputValue}
        onChange={handleChange}
        placeholder="얼마를 투자하시겠어요?"
        style={{
          marginTop: "0px",
          width: "300px",
          height: "auto",
          fontSize: "16px",
          padding: "8px 0px 8px 0px",
          marginLeft: "20px",
          fontWeight: "500",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <div className="nextBtn" onClick={handleNext}>
          다음
        </div>
      </div>
    </CustomedInputPrice>
  );
}

export default InputPrice;
