import React from 'react';
import WeatherCard from './WeatherCard';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`

const WeatherCards = ({ weather }) => {
  return (
    <Wrapper>
      {
        weather?.list?.map(day => (
          <div key={day.dt}>
            <WeatherCard day={day}/>
          </div>
        ))
      }
    </Wrapper>
  );
};

export default WeatherCards;
