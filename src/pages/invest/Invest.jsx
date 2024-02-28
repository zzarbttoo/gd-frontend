import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { TabName, SelectContainer, FilteringContainer, MapButton, FilteringButton } from '../../styled/invest';

function Invest(props) {
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [isMapView, setIsMapView] = useState(false);

    const handleFilterClick = (filter) => {
        setSelectedFilter(prevFilter => prevFilter === filter ? '' : filter);
    };

    const toggleView = () => {
        setIsMapView(prevIsMapView => !prevIsMapView);
    };

    return (
        <div>
            <TabName>투자하기</TabName>
            <SelectContainer>
                <FilteringContainer>
                    <FilteringButton 
                        onClick={() => handleFilterClick('전체')} 
                        style={{
                            backgroundColor: selectedFilter === '전체' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '전체' ? '#000' : '#8F93AE',
                            border: selectedFilter === '전체' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        전체
                    </FilteringButton>
                    <FilteringButton 
                        onClick={() => handleFilterClick('모집중')} 
                        style={{
                            backgroundColor: selectedFilter === '모집중' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '모집중' ? '#000' : '#8F93AE',
                            border: selectedFilter === '모집중' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        모집중
                    </FilteringButton>
                    <FilteringButton 
                        onClick={() => handleFilterClick('곧 모집')} 
                        style={{
                            backgroundColor: selectedFilter === '곧 모집' ? '#F0F0F5' : '#E8E8EE',
                            color: selectedFilter === '곧 모집' ? '#000' : '#8F93AE',
                            border: selectedFilter === '곧 모집' ? '1px solid #000' : '1px solid #ccc'
                        }}>
                        곧 모집
                    </FilteringButton>
                </FilteringContainer>
                <MapButton onClick={toggleView}>{isMapView ? '목록뷰' : '지도보기'}</MapButton>
            </SelectContainer>
            <NavBar />
        </div>
    );
}

export default Invest;
