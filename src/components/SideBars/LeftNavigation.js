import React from 'react'
import styled from 'styled-components'
import SideBarProfile from './SideBarProfile';
import SideSocialLinks from './SideSocialLinks';
import SideBarSkills from "./SideBarSkills.js";
import SideBarFooter from "./SideBarFooter.js";

const LeftNavigation = () => {
    return (
      <LeftNavigationStyled>
        <SideBarProfile />
        <SideBarData>
          <SideSocialLinks />
                <SideBarSkills />
            </SideBarData>
            <SideBarFooter/>
      </LeftNavigationStyled>
    );
}
const LeftNavigationStyled = styled.div`
  height: 100%;
  width: 100%;
`;
const SideBarData = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 60vh;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default LeftNavigation
