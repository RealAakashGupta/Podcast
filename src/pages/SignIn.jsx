import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 500px;
color:  ${({theme}) => theme.text};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color:  ${({theme}) => theme.bgLighter};
border: 1px solid ${({theme}) => theme.hr};
padding: 20px 50px;
gap: 10px;
`
const Title = styled.h1`
    font-size:23px;
    margin: 0px ;
`;

const SubHeading = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin: 0px ;
`;

const Input = styled.input`
    border: 1px solid ${({theme}) => theme.hr};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    color: ${({theme}) => theme.text};
    width: 100%;
`;

const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.navbar};
    color: ${({theme}) => theme.text};
`;


const SignIn = () => {
  return (
    <Container><Wrapper>
        <Title> Sign In</Title>
        <SubHeading> to continue to ListenUp </SubHeading> 
        <Input placeholder='username'/>
        <Input type='password' placeholder='password'/> 
        <Button>Sign In</Button> 
        <Title>OR</Title>
        <SubHeading>Create an Account</SubHeading> 
        <Input placeholder='username'/>
        <Input placeholder='email'/>
        <Input type='password' placeholder='password'/> 
        <Button>Sign Up</Button>
    </Wrapper></Container>
  )
}

export default SignIn