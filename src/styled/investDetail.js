import styled from "styled-components";
import jip from "../asset/binzip.png";
import Back from '../asset/Back.png';

export const BackContainer = styled.div`
    width: 100%;
    height: 273px; 
    background-image: url(${jip}); 
    background-size: cover;
    padding-top: 20px;
    margin-bottom: -50px;
`;

export const BackButton = styled.div`
    background-image: url(${Back}); 
    width: 28px;
    height: 28px;
    margin-left: 10px;
`;

export const DetailContainer = styled.div`
    position: relative; 
    top: 0px; 
    height: auto;
    background-color: #F8F8FA;
    border-radius: 24px;
    padding: 20px;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;

    img {
        width: 100%;
        margin-top: 7px;
    }
`;

export const AIButtoon = styled.div`
    background-color: #4F80E2;
    padding: 10px 15px;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    margin-top: 0dvb;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    height: 50px;
    width: 100%;
    text-align: center;
`;

export const Point = styled.div`
    padding: 10px 20px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const Detail = styled.div`
    padding: 10px 20px;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
`;
export const LikeButton = styled.div`
    width: 20px;
    height: 20px;
    padding: 13px;
    background-color: #F7F7FA;
    border-radius: 12px;
    img {
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
`;
export const InvestButton = styled.div`
    background-color: #6C95FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 12px;
    width: 100%;
    font-size: 16px;
`;
