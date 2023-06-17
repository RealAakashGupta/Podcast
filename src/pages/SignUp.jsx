import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.hr};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 23px;
  margin: 0px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin: 0px;
`;

const SmallHeading = styled.h2`
  font-size: 13px;
  font-weight: 300;
  margin: 20px 0px 0px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.hr};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text};
`;

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <SubHeading>Join ListenUp today</SubHeading>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>

        <SmallHeading>Already have an account?</SmallHeading>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <Button>Sign In</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
