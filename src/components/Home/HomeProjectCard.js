import React from 'react'
import styled from 'styled-components'

const HomeProjectCard = () => {
  return (
    <HomeProjectCardStyled>
      hello
      hello
      hello
      hello
      hello
      hello
    </HomeProjectCardStyled>
  )
}
const HomeProjectCardStyled = styled.div`
height: 100%;
width: 100%;
padding: 0 1rem;
border: 1px solid green;
&::before{
  content: "";

}
&:hover{
  font-size: 2rem;
  cursor: pointer;
}
`;
export default HomeProjectCard
