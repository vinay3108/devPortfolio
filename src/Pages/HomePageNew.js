import React from "react";
import styled from "styled-components";
import HomePageImage from "../components/Home/HomePageImage.js";
import HomeProjectSection from "../components/Home/HomeProjectSection";
const HomePageNew = ( { history } ) =>
{
   
    return (
      <HomePageNewStyled>
        <HomePageContainer>
          <HomePageImage />
          <HomeProjectSection/>
        </HomePageContainer>
      </HomePageNewStyled>
    );
}

const HomePageNewStyled = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* border: 1px solid red; */
  /* flex-flow: row-reverse; */

`;

const HomePageContainer = styled.div`
  width: 90%;
  margin-left: 1rem;
  margin-top: 3rem;

`;
export default HomePageNew;
