import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomedNavBar } from '../styled/bottomNav';

import homeGray from '../asset/home-gray.png';
import homeBlue from '../asset/home-blue.png';
import investGray from '../asset/category-gray.png';
import investBlue from '../asset/invest-blue.png';
import currentGray from '../asset/ram-gray.png';
import currentBlue from '../asset/current-blue.png';
import profileGray from '../asset/profile-gray.png';
import profileBlue from '../asset/profile-blue.png';

function NavBar(props) {
    const location = useLocation();

    const getIcon = (path) => {
        switch (path) {
            case '/':
                return location.pathname === '/' ? homeBlue : homeGray;
            case '/invest':
                return location.pathname === '/invest' ? investBlue : investGray;
            case '/current-invest':
                return location.pathname === '/current-invest' ? currentBlue : currentGray;
            case '/mypage':
                return location.pathname === '/mypage' ? profileBlue : profileGray;
            default:
                return homeGray; // Fallback icon
        }
    };

    const getTextStyle = (path) => {
        return {
            color: location.pathname === path ? 'blue' : 'gray',
            fontSize: '8px',
            marginTop: '5.5px'
        };
    };

    return (
        <CustomedNavBar>
            <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={getIcon('/')} alt="Home" style={{ width: '20px', height: '20px' }} />
                    <div style={getTextStyle('/')}>홈</div>
                </Link>
                <Link to="/invest" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={getIcon('/invest')} alt="Invest" style={{ width: '20px', height: '20px' }} />
                    <div style={getTextStyle('/invest')}>투자하기</div>
                </Link>
                <Link to="/current-invest" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={getIcon('/current-invest')} alt="Current Invest" style={{ width: '20px', height: '20px' }} />
                    <div style={getTextStyle('/current-invest')}>투자현황</div>
                </Link>
                <Link to="/mypage" style={{ textDecoration: 'none', fontSize: '14px', color: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={getIcon('/mypage')} alt="My Page" style={{ width: '20px', height: '20px' }} />
                    <div style={getTextStyle('/mypage')}>프로필</div>
                </Link>
            </nav>
        </CustomedNavBar>
    );
}

export default NavBar;
