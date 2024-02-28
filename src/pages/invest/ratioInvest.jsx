import React from "react";
import Donut from "../../asset/Group 168.png";
import { CustomedInputPrice } from "../../styled/inputPrice";
import { BackButton } from "../../styled/investDetail";
import { useNavigate } from 'react-router-dom';

function RatioInvest(props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const clickHandler = () => {
    navigate('/loading-invest');
  }

  return (
    <CustomedInputPrice>
      <div style={{ margin: '20px 10px 0px 10px' }}>
        <BackButton onClick={handleGoBack}></BackButton>
      </div>
      <div style={{ height: '20px' }} />
      <p className="ratioTitle">
        <span className="ratioAddr">제주시 성산읍 빈집8483 </span>에
      </p>
      <p className="ratioTitle">총 2억 5000 만 원 중</p>
      <p className="ratioTitle">
        <span className="ratioPrice">50,000 원</span>을 투자하시겠어요?
      </p>

      <div onClick={clickHandler} style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
      }}>
        <div className="investBtn">투자하기</div>
      </div>

      <img style={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        width: '300px',
        height: '300px',
        marginTop: '30px',
      }} src={Donut} alt='donut' />
      <div style={{
        position: 'absolute',
        top: '330px',
        left: '42%',
        fontSize: '24px',
        fontWeight: '700',
        color: '#5F75FA'
      }}>0.02%</div>

    </CustomedInputPrice>
  );
}

export default RatioInvest;
