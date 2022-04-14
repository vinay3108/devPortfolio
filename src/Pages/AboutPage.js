import React from 'react'
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/SideBars/ServicesSection';
import Title from '../components/SideBars/Title';
import { MainLayout } from '../Styles/Layout';
const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={ 'About me ' } span={ 'About me ' } />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewSection/> */}
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;
export default AboutPage
