import styled from "styled-components";

export const TabName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 20.5px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 27px 17px;
  align-items: center;
`;

export const FilteringButton = styled.button`
  margin-right: 6px;
  height: 30px;
  padding: 3px 8px;
  border-radius: 8px;
`;

export const FilteringContainer = styled.div``;

export const MapButton = styled.button`
  width: 73px; /* 'weight'가 아니라 'width'로 수정 */
  height: 30px;
  padding: 3px 8px;
  border-radius: 8px;
  color: #767676;
  border: solid 1px #e8e8ee;

  &.mapView {
    color: #767676;
    border: solid 1px #e8e8ee;
  }
  &.listView {
    color: #5f75fa;
    border: 0;
    background-color: #d0e0fa;
  }
`;

export const SortingContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  font-size: 14px;
`;

export const SortBox = styled.div`
  padding: 2px 7px;
  border-right: 1px solid gray;
  font-size: 14px;
`;

export const SortBoxLast = styled.div`
  padding: 2px 7px;
  font-size: 14px;
`;

export const HouseContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 20px;
  margin: 4px 17px;
  box-shadow: 4px 4px 8px 0px rgba(67, 0, 209, 0.1);
  border-radius: 10px;
`;

export const HouseImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  margin-left: 24px;
  width: 175px;
`;

export const SoonBanner = styled.div`
  color: #767676;
  padding: 3px 8px;
  font-size: 12px;
  line-height: 24px;
  background-color: #cdced6;
  width: fit-content;
  border-radius: 8px;
`;

export const Title = styled.div`
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 2px;
`;

export const Price = styled.div`
  line-height: 24px;
  font-size: 12px;
  color: #767676;
`;

export const DateInformation = styled.div`
  line-height: 24px;
  margin-top: 6px;
  color: #5f75fa;
  font-weight: 500;
  font-size: 14px;
`;

export const CurrentContainer = styled.div`
  margin-top: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoneyLeft = styled.div`
  font-size: 12px;
  color: #5f75fa;
`;

export const Total = styled.div`
  font-size: 8px;
  color: #767676;
`;
export const BarGraph = styled.div`
  width: 100%;
  height: 7px;
  background-color: #d9d9d9;
  position: relative;
  border-radius: 20px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #5f75fa;
    border-radius: 20px;
    width: ${(props) =>
      props.fillPercentage || "0"}%; /* Set the fill percentage */
  }
`;
export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #858899;
  font-size: 8px;
  margin-top: 4px;
  gap: 5px;
`;
export const People = styled.div``;
export const DateInfo = styled.div``;

export const IngBanner = styled.div`
  color: #767676;
  padding: 3px 8px;
  font-size: 12px;
  line-height: 24px;
  background-color: #f0f0f5;
  width: fit-content;
  border-radius: 8px;
  color: #5f75fa;
`;

export const DDay = styled.div`
  color: #767676;
  padding: 3px 8px;
  font-size: 12px;
  line-height: 24px;
  background-color: #5f75fa;
  width: fit-content;
  border-radius: 8px;
  color: white;
`;
