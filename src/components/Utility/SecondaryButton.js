import React from "react";
import styled from "styled-components";
const SecondaryButton = ({ title }) => {
    return <SecondaryButtonStyled>
        { title }
    </SecondaryButtonStyled>;
};
const SecondaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    top: 95%;
    left: 0%;
    height: 5%;
    width: 0%;
    background-color: white;
    transition: all 0.4s ease-in-out;
  }
  &:hover::after{
    width: 100%;
  }
`;
export default SecondaryButton;
