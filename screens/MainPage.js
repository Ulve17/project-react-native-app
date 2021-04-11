import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const FeedContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const CarContainer = styled.View `
  width: 100%;
  height: 100%;
`;

const Image = styled.ImageBackground `
  width: 100%;
  height: 100%;
  resize-mode: cover; 
  position: absolute; 
`; 

const CarTitles = styled.View `
  margin-top: 30%;
  width: 100%;
  align-items: center;
`;

const Title = styled.Text `
  font-size: 40px;
  font-weight: 500;
`;

const SubTitle = styled.Text `
  font-size: 16px; 
  color: #5c5e63;
`; 

const NavButton = styled.View `
  justify-content:space-around;
  padding-top: 400px;
`;

export const MainPage = ({ navigation }) => {
  return (
    <FeedContainer>
      <CarContainer>
        <Image source={require('../assets/images/SolarRoof.jpeg')} />
        <CarTitles>
            <Title>CarsJet</Title>
            <SubTitle>Find a great car for you!</SubTitle>
            <NavButton>
                <Button title="Find a car you like" color='white' onPress={() => navigation.openDrawer()} />
          </NavButton>          
        </CarTitles>
      </CarContainer>      
    </FeedContainer>
  );
};
