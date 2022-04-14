import React,{useState} from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { Headings } from '../../Styles/Layout';
import { ProjectData } from '../Projects/ProjectData';
import FilteredButton from './FilteredButton';
const HomeProjectSection = () =>
{
    const [proData,setProData]=useState([]);
    const [filtered,setFiltered]=useState([]);
    const [currField,setCurrField]=useState('All');

    useEffect(()=>{
        setProData(ProjectData);
        setFiltered(ProjectData);
    },[])
    return (
      <Headings>
        <HomeProjectSectionStyled>
          <h2>Projects</h2>
          <ButtonHandler>
            <FilteredButton proData={proData} setFiltered={setFiltered} currField={currField} setCurrField={setCurrField} />
          </ButtonHandler>
          <Container>
          {filtered?.map((item,idx)=>(

            <Wrap >
              <a href={item.link}>
                <img src={item.img} alt="" />
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  >
                  <source
                    src={item.video}
                    type="video/mp4"
                    />
                </video>
              </a>
              </Wrap>
            ))}
            
            { /*<Wrap>
               <a href="https://www.google.com"></a>
              <img src="/images/viewers-pixar.png" alt="" />
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
              </video>
            </Wrap>
            <Wrap>
              <img src="/images/viewers-marvel.png" alt="" />
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              >
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
              </video>
            </Wrap>
            <Wrap>
              <img src="/images/viewers-starwars.png" alt="" />
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              >
                <source
                  src="/videos/1608229455-star-wars.mp4"
                  type="video/mp4"
                />
              </video>
            </Wrap>
            <Wrap>
              <img src="/images/viewers-national.png" alt="" />
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              >
                <source
                  src="/videos/1564676296-national-geographic.mp4"
                  type="video/mp4"
                />
              </video>
            </Wrap> */}
          </Container>
        </HomeProjectSectionStyled>
      </Headings>
    );
  }

const HomeProjectSectionStyled = styled.div`
height:30vh;
width: 100%;
/* background-color: red; */
/* background-color: var(--sidebar-profile-color); */


`;
const ButtonHandler=styled.div`
/* border: 1px solid green; */

button{
  padding: 0.4rem 1rem; 
  border-radius: 4px;
  margin: 0 1rem;
  background: transparent;
  color:#fff;
  outline: none;
  border: 1px solid var(--primary-color);
  transition: all 0.4s ease-in-out;
  &:hover{
    cursor: pointer;
    border: none;
    background-color: var(--primary-color);
  }
}
`


const Container = styled.div`
  /* margin-top: 30px; */
  /* border: 1px solid red; */
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  z-index: 8;
  /* height: 100%; */
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 8;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.5);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
export default HomeProjectSection
