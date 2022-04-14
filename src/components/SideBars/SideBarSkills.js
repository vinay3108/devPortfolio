import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const SideBarSkills = () => {
    return (
      <SideBarSkillsStyled>
        <ProgressBar title={"HTML5"} width={"80%"} text={"80%"} />
        <ProgressBar title={"CSS3"} width={"75%"} text={"75%"} />
        <ProgressBar title={"JAVASCRIPT"} width={"70%"} text={"70%"} />
        <ProgressBar title={"C"} width={"85%"} text={"85%"} />
        <ProgressBar title={"CPP"} width={"90%"} text={"90%"} />
        <ProgressBar title={"CPP"} width={"90%"} text={"90%"} />
        <ProgressBar title={"CPP"} width={"90%"} text={"90%"} />
        <ProgressBar title={"CPP"} width={"90%"} text={"90%"} />
      </SideBarSkillsStyled>
    );
}
const SideBarSkillsStyled = styled.div`

`;
export default SideBarSkills
