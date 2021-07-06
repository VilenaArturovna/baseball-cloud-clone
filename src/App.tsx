import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Profile} from "./components/Profile/Profile";
import styled from "styled-components";

function App() {
    return (
        <AppBlock>
            <Header/>
            <Profile/>
        </AppBlock>
    );
}

export default App;

const AppBlock = styled.div`
  height: 100%;
`
