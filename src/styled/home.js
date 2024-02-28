import { styled } from "styled-components";

export const CustomedHome = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;

  p {
    margin: 0;
  }

  .bannerImg {
    width: 100%;
    height: 470px;
  }

  .firstCate {
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
    color: #111;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 80px;
    display: inline-block;
  }
  .secondCate {
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
    color: #111;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 20px;
    display: inline-block;
  }
  .firstAll,
  .secondAll {
    font-family: "Pretendard", sans-serif;
    font-size: 12px;
    color: #111;
    display: inline-block;
    margin-left: 100px;
  }
`;

export const AssetBox = styled.div`
  position: absolute; /* Card에 대한 절대 포지셔닝 */
  top: 430px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 100px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 8px 8px 8px 0px #4300d10d;

  .recent {
    font-family: "Pretendard", sans-serif;
    font-weight: 40;
    font-size: 12px;
    color: #999;
    margin-left: 30px;
    margin-top: 30px;
  }

  .asset {
    font-family: "Pretendard", sans-serif;
    font-size: 16px;
    color: #000;
    margin-left: 30px;
    display: inline-block;
    margin-top: 10px;
  }

  .price {
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
    color: #5e74f9;
    margin-left: 10px;
    font-weight: bold;
    display: inline-block;
    margin-left: 100px;
  }
`;

export const CardView = styled.div`
  width: 100%;
  height: 180px;
  margin-left: 20px;
  margin-top: 15px;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  p {
    margin: 0;
  }
`;

export const Card = styled.div`
  width: 160px;
  height: 170px;
  border-radius: 10px;

  margin-right: 16px;
  display: inline-block;
  background-color: white;
  box-shadow: 8px 8px 8px 0px #4300d10d;

  position: relative;

  img {
    width: 100%; /* 이미지가 카드의 가로폭을 채우도록 설정 */
    height: 100%; /* 이미지의 세로 비율을 유지하면서 가로폭에 맞춤 */
    border-radius: 12px 12px 0 0; /* 이미지도 카드의 모서리를 둥글게 */
  }
`;

export const CardContent = styled.div`
  position: absolute; /* Card에 대한 절대 포지셔닝 */
  bottom: 0; /* 아래로부터 상대적으로 배치 */
  left: 0; /* 왼쪽으로부터 상대적으로 배치 */
  width: 100%; /* Card의 너비에 맞추기 */
  padding: 10px; /* 여백 추가 */
  text-align: left;
  margin: 0;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.48) 41.52%,
    rgba(0, 0, 0, 0.6) 96.9%
  );

  .cardTitle {
    font-family: "Pretendard", sans-serif;
    font-weight: 500;
    line-height: 22px;
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }

  .cardDetail {
    font-family: "Pretendard", sans-serif;
    font-weight: 400;
    line-height: 8px;
    font-size: 8px;
    color: #fff;
    margin-left: 10px;
  }
`;
