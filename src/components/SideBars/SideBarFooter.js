import React from 'react'
import styled from 'styled-components'
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
import * as Ai from 'react-icons/ai';


const SidebarFooter = () => {
    return (
      <SidebarFooterStyled>
        <a target="_blank" href="https://www.linkedin.com/in/vinaykr3108">
          <Ai.AiFillLinkedin />
        </a>
        <a target="_blank" href="https://www.github.com/vinay3108">
          <Ai.AiFillGithub />
        </a>
        <a target="_blank" href="https://www.twitter.com/vinaykr3108">
          <Ai.AiFillTwitterSquare />
        </a>
      </SidebarFooterStyled>
    );
}
const SidebarFooterStyled = styled.div`
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--sidebar-profile-color);
  svg{
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      &:hover{
          cursor: pointer;
      }
  }
`;
export default SidebarFooter
