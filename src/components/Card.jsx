import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 290px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 95%;
  height: 170px;
  background-color: #999;
`;

const Details = styled.div`
  display = flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div`

`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  margin: 9px 0px;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  
`;

const Card = () => {
  return (
    <Link to="/podcast/test" style={{textDecoration:"none"}}>
    <Container><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQj5EcguYZuCRq57KNddk-ednw_PjYWOyVQ&usqp=CAU'/>
    <Details>
    <ChannelImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8tQbVwD-HqBIsnk82HAAjq36qMxNdvcosQ&usqp=CAU'/>
    <Texts>
      <Title>Test Podcast</Title>
      <ChannelName>FLIPR</ChannelName>
      <Info>660,908 views ● 1 day ago</Info>
    </Texts>
    </Details>
    </Container>
    </Link>
  )
}

export default Card