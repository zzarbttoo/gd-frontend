import React from "react";
import complete from "../../asset/complete.png";
import { CustomedInputPrice } from "../../styled/inputPrice";
import { useNavigate } from "react-router-dom";
import { CompleteBtn } from "../../styled/currentInvest";

function Complete(props) {
  const navigate = useNavigate();

  const handleArrowIconClick = () => {
    navigate("/invest");
  };

  return (
    <div style={{ backgroundColor: "#5f75fa", height: '100vh', paddingTop: '40px' }}>
      <CustomedInputPrice>
        <div style={{
          height: '20px'
        }}></div>
        <img src={complete} style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          margin: '0 auto',
          marginTop: '20px',
        }} className="completeImg" alt="Example Image" />
      </CustomedInputPrice>
      <div style={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <CompleteBtn onClick={handleArrowIconClick}>
          닫기
        </CompleteBtn>
      </div>
    </div>
  );
}

export default Complete;
