import styled from "styled-components";

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin: 8px;
    margin-left: 20px;
`;

export const Toggle = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${props => props.selected ? 'rgba(80, 148, 250, 0.24)' : 'rgba(133, 136, 153, 0.08)'};
    color: ${props => props.selected ? '#5F75FA' : '#525463'};
    border-radius: 8px;
`;

export const CompleteBtn = styled.div`
    background-color: #F0F0F5;
    width: 90%;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    bottom: 1%;
    padding: 13px;
    border-radius: 12px;
    margin: 0 auto;
`;