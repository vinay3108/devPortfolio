import React from 'react'
import { InnerLayout } from '../../Styles/Layout'
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import gamedev from '../../Images/game-dev.svg'
import design from '../../Images/design.svg'
import intelligence from '../../Images/intelligence.svg'
const ServicesSection = () => {
    return (
      <InnerLayout>
        <ServicesSectionStyled>
          <Title title={"Services"} span={"Services"} />
          <div className="services">
            <ServiceCard
              image={design}
              title={"Design"}
              paragraph={
                " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
              }
            />
            <div className="mid-card">
              <ServiceCard
                image={gamedev}
                title={"Web Developer"}
                paragraph={
                  " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
                }
              />
            </div>
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                " Lorem  Beatae dolore harum porro corporis vero aliquam delectus odio quod, doloribus impedit placeat."
              }
            />
          </div>
        </ServicesSectionStyled>
      </InnerLayout>
    );
}
const ServicesSectionStyled = styled.section`

  margin-top:4rem;
  .services {
    z-index: -1;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      grid-template-columns: repeat(2, 1fr);
     
    }
    @media screen and (max-width: 950px) {
      flex-direction: column;
      grid-template-columns: repeat(1, 1fr);

     
    }
  }
`;
export default ServicesSection
