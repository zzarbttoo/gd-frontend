import React from 'react';
import NavBar from '../../components/NavBar';
import { TabName } from '../../styled/invest';

function CurrentInvest(props) {
    return (
        <div>
            <TabName>투자 현황</TabName>
            <NavBar />
        </div>
    );
}

export default CurrentInvest;