import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';
const SideBar = ({navToggle}) => {
    return (
        <>
            <SideBarStyled className={`${navToggle?'nav-toggle':''}`}>
            <Navigation/>

            </SideBarStyled>
        </>
    )
}

const SideBarStyled = styled.div`
  width: 16.3rem;
  height: 100vh;
  position: fixed;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  z-index: 15;
  @media screen and (max-width: 1250px) {
    transform: translateX(-100%);
  }
`;

export default SideBar
