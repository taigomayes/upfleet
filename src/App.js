import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";

import "./App.css";
import { Fleet } from "./components/Fleet";

const Postings = styled.div`
  width: 100vw;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 800;

  @media (min-width: 800px) {
    margin-top: 75px;

    height: calc(100vh - 75px);
    position: fixed;
    left: 0;
    width: 20vw;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    background: #707070;

    position: fixed;
    top: 75px;
    width: 100vw;
    height: 50px;
  }
`;
const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    width: 60vw;

    margin-top: 75px;
  }

  @media (max-width: 800px) {
    width: 100vw;
    margin-top: 200px;
  }
`;

const Title = styled.div`
  @media (min-width: 800px) {
    width: 100vw;
    font-size: 24px;
    font-weight: 800;
    color: #707070;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    background: ;
    width: 100vw;
    position: absolute;
    height: 75px;
    top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 800;
    color: #707070;
  }
`;

const Profile = styled.div`
  background: white;

  @media (min-width: 800px) {
    height: 100vh;
    position: fixed;
    right: 0;
    width: 20vw;
  }

  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Location = styled.div`
  position: absolute;
`;
const SortBy = styled.div`
  position: absolute;
  right: 125px;
  font-size: 14px;
  cursor: pointer;
z-index: 700;
  @media (min-width: 800px) {
    right: 25%;
  }

  @media (max-width: 800px) {
    right: 50px;
  }
`;

const SortDiv = styled.div`
  position: fixed;
  
  width: 50%;
  background: #707070;
  height: 275px;
  top: 210px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;


  z-index: 700;
  box-shadow: 0 0 10px grey;

  @media(min-width: 800px){
position: fixed;
right: 0;
top: 75px;
width: 20vw;
height: calc(100vh - 75px);
opacity: 80%;

}
`;

const Sort = styled.div`
z-index: 1000;
cursor: pointer;



`

const Screen = styled.div`

@media(max-width: 800px){
  width: 100vw;
  background: white;
  height: 100vh;
  position: fixed;
  z-index: 500;
  top: 75px;
  opacity: 70%;

}

@media(min-width: 800px){
display: none;

}

`
  


function App() {
  const [sort, setSort] = useState(false);

  const toggleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="App">
      <Header />

      <Dashboard>

      <Screen style={{ display: sort ? 'flex' : 'none'}}></Screen>
        <Title>
          <Location>New Fleets</Location>
          <SortBy onClick={toggleSort}>Sort By</SortBy>

          <SortDiv style={{ display: sort ? 'flex' : 'none'}}>
            <Sort onClick={toggleSort}>newest</Sort>
            

          </SortDiv>
        </Title>

        <Fleet />

        <Fleet />

        <Fleet />
      </Dashboard>
      <Navigation>
        <Filter />
      </Navigation>
      <Profile />
    </div>
  );
}

export default App;
