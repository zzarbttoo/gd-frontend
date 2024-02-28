import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackContainer, BackButton, DetailContainer, AIButtoon, SelectContainer, Point, Detail, ButtonContainer, LikeButton, InvestButton } from '../../styled/investDetail';
import Graph from '../../asset/Group 169.png';
import Cart from '../../asset/shopping-cart.png';
import Details from '../../asset/Group 221.png';
import Map from '../../asset/Group 222.png';

function InvestDetail(props) {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('point'); // Default selected tab is 'point'

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const clickHandler = () => {
        navigate('/input-price');
    }
    return (
        <div>
            <BackContainer>
                <BackButton onClick={handleGoBack}></BackButton>
            </BackContainer>
            <DetailContainer>
                삼도이동 602-1(제주 아이린아파트 5차)
                <img src={Graph} alt='graph' />
                <AIButtoon>AI 리모델링 미리보기</AIButtoon>
            </DetailContainer>
            <SelectContainer>
                <Point onClick={() => handleTabClick('point')} style={{ borderBottom: selectedTab === 'point' ? '3px solid #4F80E2' : '#A9ABB8' , color: selectedTab === 'point' ? '#4F80E2' : '#A9ABB8'}}>투자 포인트</Point>
                <Detail onClick={() => handleTabClick('detail')} style={{ borderBottom: selectedTab === 'detail' ? '3px solid #4F80E2' : '#A9ABB8', color: selectedTab === 'detail' ? '#4F80E2' : '#A9ABB8'}}>상세 정보</Detail>
            </SelectContainer>
            {selectedTab === 'point' && (
                <img src={Details} alt='detail' style={{
                    width : '100%',
                    marginTop: '20px',
                    height: 'auto'
                }} />
            )}
            {selectedTab === 'detail' && (
                <img src={Map} alt="map" style={{
                    width: '100%',
                    paddingTop: '10px',
                }} />
            )}
            <ButtonContainer>
                <LikeButton>
                    <img src={Cart} alt='cart' />
                </LikeButton>
                <InvestButton onClick={clickHandler}>투자 하기</InvestButton>
            </ButtonContainer>
        </div>
    );
}

export default InvestDetail;
