import React from 'react';
import styled from 'styled-components';
import { tempDetails, generalDetails, iconUrl, month } from '../../config/weatherConfigs';
import { getKeyFromString, getWeekDay } from '../../utils/utils';
import Image from 'next/image';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 320px;
  margin: 20px;
  width: 220px;
  padding: 10px;
`

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DateText = styled.div`
font-size: 14px;
`

const Day = styled.div`
font-size: 18px;
flex: 1;
`

const Temp = styled.div`
font-size: 30px;
flex: 1;
`

const Sky = styled.div`
font-size: 16px;
flex: 0.5;
`

const ImageWrapper = styled.div`
  height: 7rem;
  width: 7rem;
  position: relative;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-wrap: wrap;
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const DetailTitle = styled.div`
  font-size: 12px;
`

const DetailValue = styled.div`
  font-size: 18px;

`

const WeatherCard = ({ day }) => {
  let date = new Date(day.dt * 1000)
  const weekday = getWeekDay(date)

  return (
    <Wrapper>
      <DayWrapper>
        <Day>{weekday}</Day>
        <DateText>{date.getDate()} {month[date.getMonth()]}</DateText>
      </DayWrapper>
      <ImageWrapper>
        <Image
          src={iconUrl + `${day?.weather[0]?.icon}.png`}
          alt='icon'
          layout='fill'
          quality={100}
        />
      </ImageWrapper>
      <Sky>{day.weather[0].main}</Sky>
      <Temp>{Math.round(day.temp.day)}ºC</Temp>
      <DetailsWrapper>
        {
          tempDetails.map(detail => (
            <DetailWrapper key={detail.name}>
              <DetailTitle>{detail.name}</DetailTitle>
              <DetailValue>{Math.round(day.temp[detail.code])}{detail.unit}</DetailValue>
            </DetailWrapper>
          ))
        }
        {
          generalDetails.map(detail => (
            <DetailWrapper key={detail.name}>
              <DetailTitle>{detail.name}</DetailTitle>
              <DetailValue>{Math.round(day[detail.code])}{detail.unit}</DetailValue>
            </DetailWrapper>
          ))
        }
      </DetailsWrapper>
    </Wrapper>);
};

export default WeatherCard;
