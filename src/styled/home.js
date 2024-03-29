import { styled } from "styled-components";

export const CustomedHome = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background-color: #f8f8fa;

  p {
    margin: 0;
  }

  .bannerImg {
    width: 100%;
    height: 450px;
  }

  .firstCate {
    color: #111;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    \font-weight: bold;
    margin-left: 30px;
    margin-top: 125px;
    display: inline-block;
  }
  .secondCate {
    color: #111;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 47px;
    display: inline-block;
  }
  .firstAll,
  .secondAll {
    font-family: "Pretendard", sans-serif;
    font-size: 12px;
    color: #767676;
    display: inline-block;
    margin-left: 100px;
  }
`;

export const AssetBox = styled.div`
  position: absolute; /* Card에 대한 절대 포지셔닝 */
  top: 425px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 8px 8px 8px 0px #4300d10d;

  .recent {
    font-family: "Pretendard", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #999;
    margin-left: 15px;
    margin-top: 26px;
  }

  .nameAsset {
    color: #181a20;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    font-weight: bold;
  }

  .asset {
    color: #767676;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-left: 15px;

    display: inline-block;
  }
  .price {
    color: #5f75fa;
    display: inline-block;
    font-size: 15px;
  }
  .price > span {
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    margin-left: 80px;
  }
`;

export const CardView = styled.div`
  width: 100%;
  height: 210px;
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
  width: 210px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden; /* 이미지가 부모 요소를 벗어나는 것을 제어 */
  margin-right: 16px;
  display: inline-block;
  background-color: white;
  box-shadow: 8px 8px 8px 0px #4300d10d;

  position: relative;

  .zipImg {
    width: 100%; /* 이미지를 부모 요소에 맞게 조정 */
    height: 100%; /* 이미지를 부모 요소에 맞게 조정 */
    object-fit: cover; /* 이미지를 부모 요소에 맞게 크기 조정 */
  }

  .heartIcon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    position: absolute;
    top: 3px; /* 이미지 상단에서의 위치 조정 */
    right: 3px; /* 이미지 오른쪽에서의 위치 조정 */
  }

  .goal {
    display: inline-flex;
    height: 13px;
    padding: 3px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: #5f75fa;
    color: white;
    font-family: Pretendard;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    display: inline-block;
  }

  .total_price {
    font-family: Pretendard;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    color: #cdced6;
    display: inline-block;
    margin-left: 5px;
  }

  .personIcon {
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .numJoin {
    color: #fff;
    display: inline-block;
    font-family: Pretendard;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 8px;
  }
`;

export const CardContent = styled.div`
  position: absolute; /* Card에 대한 절대 포지셔닝 */
  bottom: 0; /* 아래로부터 상대적으로 배치 */
  left: 0; /* 왼쪽으로부터 상대적으로 배치 */
  width: 190px; /* Card의 너비에 맞추기 */
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
    color: #fff;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    margin-top: 3px;
  }

  .cardDetail {
    color: #fff;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;
