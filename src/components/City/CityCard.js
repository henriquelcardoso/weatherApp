import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.isSelected && `#e65c5ca4`)};
`;

const CityName = styled.div`
    color: black;
`

const CityCard = ({ isSelected, onClick, city }) => {

    return (
        <Wrapper isSelected={isSelected} onClick={() => onClick(city)}>
            <CityName>{city.name}</CityName>
        </Wrapper>
    )
};

export default CityCard;
