import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CityCards from '../../City/CityCards';
import { cities } from '../../../config/citiesConfigs';
import { useSWRQuery } from '../../../api/api';
import WeatherCards from '../../Weather/WeatherCards';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    height: 100%;
    display: flex;
`
const HomeLayout = () => {

  const [city, setCity] = useState(cities[0])

  const handleCityClick = (city) => {
    setCity(city)
  }

  const { data } = useSWRQuery(city.code);

  return <Wrapper>
    <CityCards currentCity={city} onClick={handleCityClick} />
    <WeatherCards weather={data} />
  </Wrapper>;
};

export default HomeLayout;
