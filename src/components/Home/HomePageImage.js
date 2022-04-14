import React from 'react'
import styled from 'styled-components'
import headerpic6 from '../../Images/headerpic6.png'
import { useTypewriter } from "react-simple-typewriter";
import SecondaryButton from '../Utility/SecondaryButton'


const HomePageImage = () =>
{
     const { text } = useTypewriter({
       words: ["Web Apps", "Web Interface", "Web Page"],
       loop: 0,
     });
    return (
      <HomePageImageStyled>
        <div className="heading">
          <h2>Discover My Amazing Space </h2>
          <p>
            &lt;
            <span>code</span>&gt; i build
            <span> {text} </span>
            &lt;/
            <span>code</span>&gt;
          </p>
        </div>
        <SecondaryButton title={"Explore Now"} />
      </HomePageImageStyled>
    );
}
const HomePageImageStyled = styled.div`
  height: 49vh;
  width:100%;
  /* border: 1px solid red; */
 
  position: relative;
 

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    background:linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${headerpic6});
    top: 0;
    left: 0;
    z-index: -1;
    /* opacity: 0.4; */
  }
  .heading{
      width:60%;
      /* border:1px solid green; */
      margin-left: 1rem;
      margin-bottom: 1rem;
      h2{
          /* color:var(--white-color); */
          color:white;
          font-size: 3.3rem;
      }
  }
`;

export default HomePageImage
