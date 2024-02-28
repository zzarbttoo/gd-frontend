import { styled } from "styled-components";

export const CustomedInputPrice = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
 

  .arrowIcon {
    width: 10px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 18px;
    margin-left: 25px;
    margin-bottom: 27px;
  }
  .arrowIcon2 {
    width: 10px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 18px;
    margin-left: 25px;
  }

  .addressTitle {
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    font-weight: bold;
    text-align: center;
  }
  .line {
    width: 2px;
    height: 21px;
    background-color: #181a20;
    margin-left: 25px;
    display: inline-block;
    vertical-align: middle;
  }
  .inputNum {
    display: inline-block;
    margin-left: 20px;
    height: 21px;
    border: none; /* border 제거 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    vertical-align: middle;
  }
  .notice {
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: #ff0e0e;
    margin-left: 20px;
  }
  .nextBtn {
    width: 90%;
    height: 50px;
    border-radius: 12px;
    background-color: #5f75fa;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
  .ratioAddr {
    color: #181a20;
    text-align: center;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    font-weight: bold;
  }
  .ratioPrice {
    color: #5f75fa;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }
  .ratioTitle {
    margin: 0;
    color: #767676;
    line-height: 36px;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;

    text-align: center;
  }

  .investBtn {
    width: 90%;
    height: 50px;
    border-radius: 12px;
    background-color: #5f75fa;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }

  .loadingTitle {
    margin: 0;
    color: #767676;
    line-height: 36px;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;

    text-align: center;
    margin-top: 240px;
  }

  .loadingStrong {
    color: #e1e1e8;
    text-align: center;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    font-weight: bold;
  }
  .loadingAni {
    width: 350px;
    height: 40px;
    background-color: #e1e1e8;
    color: white;

    margin-top: 30px;
    margin-left: 24px;

    display: inline-block;
  }

  .loadingBar {
    width: 0;
    height: 40px;
    background-color: #5f75fa;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    animation: fill 60s linear forwards; /* fill 애니메이션을 적용 */
  }

  .loadingText {
    position: absolute; /* Card에 대한 절대 포지셔닝 */
    top: 395px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: white;
  }

  @keyframes fill {
    to {
      width: 100%; /* 1분 동안 100%로 채우기 */
    }
  }

  .loadingImg {
    width: 95.687px;
    height: 85.496px;
    position: absolute;
    animation: moveRight 60s linear forwards;
    left: 0; /* 초기 위치를 설정합니다. */
  }
  @keyframes moveRight {
    from {
      left: -7%; /* 시작 위치 */
    }
    to {
      left: 100%; /* 1분 동안 100%로 이동 */
    }
  }

  .completeImg {
    width: 390px;
  }
`;
