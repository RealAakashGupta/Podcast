// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Container = styled.div`
  display: flex
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="/signin/signup" element={<SignUp />} />
                  <Route path="podcast">
                    <Route path=":id" element={< Podcast/>} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
