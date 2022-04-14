import React from 'react'
import styled from 'styled-components'
import resume1 from '../../Images/resume.jpg';
const SideBarProfile = () => {
    return (
      <SideBarProfileStyled>
        <div className="profile-img">
          <img src={resume1} alt="" />
          <div className="profile-ring">
            <div className="profile-bell"></div>
          </div>
        </div>
        <h3>Vinay Kumar</h3>
        <p>Full Stack Developer</p>
      </SideBarProfileStyled>
    );
}
const SideBarProfileStyled = styled.div`
  background-color: var(--sidebar-profile-color);
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* opacity: 0.7; */
  h3 {
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
    color: var(--white-color);
    &:hover {
      color: var(--primary-color);
      text-shadow: 1px 1px 1px var(--primary-color);
      cursor: pointer;
    }
  }
  p {
    font-size: 0.7rem;
    color: var(--white-color);
    opacity: 0.5;
  }
  /* outline: none; */
  .profile-img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    /* border: 1px solid red; */
    margin-bottom: 1rem;
    position: relative;
    
    img {
        cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .profile-ring {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      transform-origin: center;
      animation: ring 1s infinite;
      position: absolute;
      transition: all 0.4s ease-in-out;
      top:70%;
      right:-5%;
    }
    .profile-bell {
      height: 1rem;
      width: 1rem;
      background-color: yellow;
      border-radius: 50%;
      position: absolute;
      top:0%;
      right: -5%;
      /* animation: bell 10s infinite; */
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      &::after{
            content: "I am avialable for hire";
            height: 1.2rem;
            width:3rem;
            background: var(--background-dark-color);
            font-size: 0.4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align:center;
            top:0;
            right:-3.5rem;
            position: absolute;
            opacity: 0;
            transition: all 0.4s ease-in-out;
      }
      &:hover::after{
        opacity: 1;
      }
    }
   
    
    @keyframes ring {
      0% {
        height: 1rem;
        width: 1rem;
        box-shadow: 0px 0px 2px yellow;
      }
      25% {
        height: 1.01rem;
        width: 1.01rem;
        box-shadow: 0px 0px 4px yellow;
      }
      50% {
        height: 1.02rem;
        width: 1.02rem;
        box-shadow: 0px 0px 6px yellow;
        
      }
      75% {
        height: 1.01rem;
        width: 1.01rem;
        box-shadow: 2px 2px 4px yellow;
      }
      100% {
        height: 1rem;
        width: 1rem;
        box-shadow: 1px 1px 2px yellow;
      }
    }
  }
`;
export default SideBarProfile
