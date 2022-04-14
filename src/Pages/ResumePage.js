import React from 'react'
import Resume from '../components/Resume/Resume'
import Skills from '../components/SideBars/Skills'
import {  MainLayout } from '../Styles/Layout'

const ResumePage = () => {
    return (
        <MainLayout>
            <Skills />
            <Resume/>
        </MainLayout>
    )
}

export default ResumePage
