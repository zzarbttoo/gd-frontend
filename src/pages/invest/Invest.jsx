import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';

import {
    TabName,
    SelectContainer,
    FilteringContainer,
    MapButton,
    FilteringButton,
    SortingContainer,
    SortBox,
    SortBoxLast,
    HouseContainer,
    HouseImage,
    TextContainer,
    SoonBanner,
    Title,
    Price,
    DateInformation,
    CurrentContainer,
    LeftContainer,
    MoneyLeft,
    Total,
    BarGraph,
    CountContainer,
    People,
    DateInfo,
    IngBanner,
} from "../../styled/invest";
import MapTest from "./mytest";

function Invest(props) {
    const [selectedFilter, setSelectedFilter] = useState("전체");
    const [isMapView, setIsMapView] = useState(false);
    const navigate = useNavigate();

    const handleFilterClick = (filter) => {
        setSelectedFilter((prevFilter) => (prevFilter === filter ? "" : filter));
    };

    const toggleView = () => {
        setIsMapView((prevIsMapView) => !prevIsMapView);
    };
    const handleClick = () => {
        navigate("/invest-detail");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/home/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <TabName>투자하기</TabName>
            <SelectContainer>
                <FilteringContainer>
                    <FilteringButton
                        onClick={() => handleFilterClick('전체')}
                        style={{
                            backgroundColor: selectedFilter === '전체' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '전체' ? '#000' : '#8F93AE',
                            border: selectedFilter === '전체' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        전체
                    </FilteringButton>
                    <FilteringButton
                        onClick={() => handleFilterClick('모집중')}
                        style={{
                            backgroundColor: selectedFilter === '모집중' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '모집중' ? '#000' : '#8F93AE',
                            border: selectedFilter === '모집중' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        모집중
                    </FilteringButton>
                    <FilteringButton
                        onClick={() => handleFilterClick('곧 모집')}
                        style={{
                            backgroundColor: selectedFilter === '곧 모집' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '곧 모집' ? '#000' : '#8F93AE',
                            border: selectedFilter === '곧 모집' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        곧 모집
                    </FilteringButton>
                </FilteringContainer>
                <MapButton onClick={toggleView}>{isMapView ? '목록뷰' : '지도보기'}</MapButton>
            </SelectContainer>
            <SortingContainer>
                <SortBox style={{ color: "black" }}>최신 등록</SortBox>
                <SortBox style={{ color: "gray" }}>오래된 순</SortBox>
                <SortBox style={{ color: "gray" }}>최저 가격</SortBox>
                <SortBoxLast style={{ color: "gray" }}>최고 가격</SortBoxLast>
            </SortingContainer>
            {
                isMapView ?
                    <MapTest />
                    :
                    <HouseContainer onClick={handleClick}>
                        <HouseImage style={{
                            backgroundImage: `url('https://i.ibb.co/j6DT0Mw/image.jpg')`,
                        }}></HouseImage>
                        <TextContainer>
                            {/* 곧모집 - SoonBanner, 모집중 - IngBanner , 디데이 추가 필요*/}
                            {/* <SoonBanner>곧 모집</SoonBanner> */}
                            <IngBanner>모집 중</IngBanner>
                            <Title>서귀포시 성산읍</Title>
                            {/* 곧모집 - price, 모집중 - 현황 */}
                            {/* <Price>2억 7000만 원</Price> */}

                            <CurrentContainer>
                                <LeftContainer>
                                    <MoneyLeft>900만 원 남음</MoneyLeft>
                                    <Total>2억 원</Total>
                                </LeftContainer>
                                <BarGraph fillPercentage={95}></BarGraph>
                                <CountContainer>
                                    <People>101명 참여</People>
                                    <DateInfo>2023.03.05</DateInfo>
                                </CountContainer>
                            </CurrentContainer>
                            {/* <DateInformation>2024 7월 중 오픈</DateInformation> */}
                        </TextContainer>
                    </HouseContainer>
            }
            <NavBar />
        </div >
    );
}

export default Invest;
