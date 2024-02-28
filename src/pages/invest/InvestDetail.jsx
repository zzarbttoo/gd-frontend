import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackContainer, BackButton, DetailContainer, AIButtoon, SelectContainer, Point, Detail, ButtonContainer, LikeButton, InvestButton } from '../../styled/investDetail';
import Graph from '../../asset/Group 169.png';
import Cart from '../../asset/shopping-cart.png';

function InvestDetail(props) {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('point'); // Default selected tab is 'point'

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <BackContainer>
                <BackButton onClick={handleGoBack}></BackButton>
            </BackContainer>
            <DetailContainer>
                서귀포시 성산읍
                <img src={Graph} alt='graph' />
                <AIButtoon>AI 리모델링 미리보기</AIButtoon>
            </DetailContainer>
            <SelectContainer>
                <Point onClick={() => handleTabClick('point')} style={{ borderBottom: selectedTab === 'point' ? '3px solid #4F80E2' : '#A9ABB8' , color: selectedTab === 'point' ? '#4F80E2' : '#A9ABB8'}}>투자 포인트</Point>
                <Detail onClick={() => handleTabClick('detail')} style={{ borderBottom: selectedTab === 'detail' ? '3px solid #4F80E2' : '#A9ABB8', color: selectedTab === 'detail' ? '#4F80E2' : '#A9ABB8'}}>상세 정보</Detail>
            </SelectContainer>
            {selectedTab === 'point' && (
                <div>
                    투자 해야 되는 이유이유이유
                </div>
            )}
            {selectedTab === 'detail' && (
                <div>
                    상세 정보 여기에 지도 띄워주면 됩니다!!
                </div>
            )}
            <ButtonContainer>
                <LikeButton>
                    <img src={Cart} alt='cart' />
                </LikeButton>
                <InvestButton>투자 하기</InvestButton>
            </ButtonContainer>
        </div>
    );
}

export default InvestDetail;
