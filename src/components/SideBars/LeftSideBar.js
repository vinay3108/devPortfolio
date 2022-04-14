import React from 'react'
import styled from 'styled-components'
import LeftNavigation from './LeftNavigation.js'

const LeftSideBar = () => {
    return (
        <LeftSidebarStyled>
            <LeftNavigation/>
        </LeftSidebarStyled>
    )
}
const LeftSidebarStyled = styled.div`
  width: 16.3rem;
  /* height: 100vh; */
  position: fixed;
  top:0;
  left: 0;
  background-color: var(--sidebar-dark-color);
  transition: all 0.4s ease-in-out;
  z-index: 45;
  @media screen and (max-width: 1250px) {
    transform: translateX(-100%);
  }
`;
export default LeftSideBar
