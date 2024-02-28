import React from 'react';
import NavBar from '../../components/NavBar';
import { TabName } from '../../styled/invest';

function Mypage(props) {
    return (
        <div>
            <TabName>내 프로필</TabName>
            <NavBar />
        </div>
    );
}

export default Mypage;