import React from 'react'
import styled from 'styled-components';
import resume from '../Images/about.gif'
import PrimaryButton from './Utility/PrimaryButton';
const ImageSection = () => {

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="Resume" />
            </div>
            <div className="right-content">
              
                    <h4>I am <span> Vinay Kumar</span></h4>
              
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur ratione rem praesentium quod dicta ipsam pariatur, non est optio ea! Libero, illo soluta! Harum ipsa alias saepe cum fugiat!
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                        
                    </div>
                    <div className="info">
                        <p>: Vinay Kumar</p>
                        <p>: 22</p>
                        <p>: India</p>
                        <p>: English,Hindi</p>
                        <p>: Fresher</p>
                        <p>: Software Devlopment</p>
                        
                    </div>
                </div>
                <PrimaryButton title={ "Download Cv "}/>
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    width: 100%;
    height: 40vh;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    .left-content {
      height: 40vh;
      width: 50%;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 950px) {
    .left-content {
      height: 40vh;
      width: 60%;
      margin-bottom: 2rem;
    }
  }
`;
export default ImageSection
