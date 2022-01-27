import React from 'react';
import styled from 'styled-components';
import { cities } from '../../config/citiesConfigs';
import CityCard from './CityCard';

const Wrapper = styled.div`
    display:flex;
    
`
const CityCards = ({currentCity, onClick}) => {

  return (
    <Wrapper>
    {
        cities.map(city => (
            <CityCard isSelected={currentCity === city} onClick={onClick} key={city.name} city={city}/>
        ))
    }
    </Wrapper>
  )
};

export default CityCards;
