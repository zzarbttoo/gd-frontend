import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

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
  DDay,
} from "../../styled/invest";
import MapTest from "./mytest";

function Invest(props) {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [isMapView, setIsMapView] = useState(false);
  const [homeList, setHomeList] = useState([]);
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
        const response = await fetch("/api/home/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHomeList(data.homeList.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
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
            onClick={() => handleFilterClick("전체")}
            style={{
              backgroundColor:
                selectedFilter === "전체" ? "#F0F0F5" : "#E8E8EE",
              color: selectedFilter === "전체" ? "#5F75FA" : "#858899",
              border: selectedFilter === "전체" ? "1px solid #5F75FA" : "0",
            }}
          >
            전체
          </FilteringButton>
          <FilteringButton
            onClick={() => handleFilterClick("모집중")}
            style={{
              backgroundColor:
                selectedFilter === "모집중" ? "#F0F0F5" : "#E8E8EE",
              color: selectedFilter === "모집중" ? "#5F75FA" : "#858899",
              border: selectedFilter === "모집중" ? "1px solid #5F75FA" : "0",
            }}
          >
            모집중
          </FilteringButton>
          <FilteringButton
            onClick={() => handleFilterClick("곧 모집")}
            style={{
              backgroundColor:
                selectedFilter === "곧 모집" ? "#F0F0F5" : "#E8E8EE",
              color: selectedFilter === "곧 모집" ? "#5F75FA" : "#858899",
              border: selectedFilter === "곧 모집" ? "1px solid #5F75FA" : "0",
            }}
          >
            곧 모집
          </FilteringButton>
        </FilteringContainer>
        <MapButton
          className={isMapView ? "listView" : "mapView"}
          onClick={toggleView}
        >
          {isMapView ? "지도보기" : "목록보기"}
        </MapButton>
      </SelectContainer>
      <SortingContainer>
        <SortBox style={{ color: "black" }}>마감 순</SortBox>
        <SortBox style={{ color: "gray" }}>오래된 순</SortBox>
        <SortBox style={{ color: "gray" }}>최저 가격</SortBox>
        <SortBoxLast style={{ color: "gray" }}>최고 가격</SortBoxLast>
      </SortingContainer>
      {isMapView ? (
        <MapTest />
      ) : (
        homeList.reverse().map((home, index) => (
          <HouseContainer onClick={handleClick} key={index}>
            <HouseImage
              style={{
                backgroundImage: `url('data:image/jpeg;base64,${home.before_image_base64}')`,
              }}
            ></HouseImage>
            <TextContainer>
              {home.is_funding_done === true ? (
                <SoonBanner>곧 모집</SoonBanner>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                  }}
                >
                  <IngBanner>모집 중</IngBanner>
                  <DDay>D-{home.funding_last_date}</DDay>
                </div>
              )}
              <Title>{home.address}</Title>
              {home.is_funding_done === true ? (
                <div>
                  <Price>{home.sale_price} (백만원)</Price>
                  <DateInformation>2024 7월 중 오픈</DateInformation>
                </div>
              ) : (
                <CurrentContainer>
                  <LeftContainer>
                    <MoneyLeft>900만 원 남음</MoneyLeft>
                    <Total>{home.sale_price} (백만원)</Total>
                  </LeftContainer>
                  <BarGraph fillPercentage={Number(home.width)}></BarGraph>
                  <CountContainer>
                    <People>{home.num_of_people}명 참여</People>
                    <DateInfo>{home.funding_done_date.split("T")[0]}</DateInfo>
                  </CountContainer>
                </CurrentContainer>
              )}
            </TextContainer>
          </HouseContainer>
        ))
      )}
      <NavBar />
    </div>
  );
}

export default Invest;
