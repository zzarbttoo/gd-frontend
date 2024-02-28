
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { TabName } from '../../styled/invest';
import HowMuch from '../../asset/Group 172.png';
import Frame1 from '../../asset/frame1.png';
import Frame2 from '../../asset/frame2.png';
import Frame3 from '../../asset/frame3.png';
import Frame4 from '../../asset/frame4.png';
import { ToggleContainer, Toggle } from '../../styled/currentInvest';

function CurrentInvest(props) {
    const [selectedToggle, setSelectedToggle] = useState('거래현황');

    return (
        <div>
            <TabName>투자 현황</TabName>
            <img src={HowMuch} alt="Image" style={{ width: "100%", marginTop: "20px" }} />
            <ToggleContainer>
                <Toggle
                    selected={selectedToggle === '거래현황'}
                    onClick={() => setSelectedToggle('거래현황')}
                >
                    거래 현황
                </Toggle>
                <Toggle
                    selected={selectedToggle === '수익현황'}
                    onClick={() => setSelectedToggle('수익현황')}
                >
                    수익 현황
                </Toggle>
            </ToggleContainer>
            {selectedToggle === '거래현황' && (
                <>
                    <img src={Frame1} alt="Image" style={{ width: "100%" }} />
                    <img src={Frame2} alt="Image" style={{ width: "100%" }} />
                    <img src={Frame3} alt="Image" style={{ width: "100%" }} />
                </>
            )}
            {selectedToggle === '수익현황' && (
                <>
                    <img src={Frame4} alt="Image" style={{ width: "100%", marginTop: "0px" }} />
                </>
            )}

            <NavBar />
        </div>
    );
}

export default CurrentInvest;
