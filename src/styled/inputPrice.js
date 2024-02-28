import { styled } from "styled-components";

export const CustomedInputPrice = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  .arrowIcon {
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
    width: 342px;
    height: 50px;
    border-radius: 12px;
    background-color: #5f75fa;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 380px;
    margin-left: 24px;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
`;
