import React from 'react'
import styled from 'styled-components'
import { InnerLayout} from '../../Styles/Layout'
import Title from '../SideBars/Title'
import SmallTitle from '../SideBars/SmallTitle';
// import { School } from '@material-ui/icons';
import * as Ai from 'react-icons/ai';
import ResumeItem from './ResumeItem';
const Resume = () => {
    return (
      <ResumeStyled>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="small-title u-margin-top">
            <SmallTitle icon={<Ai.AiOutlineBook />} title={"Education"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={`2018-2022`}
              title={
                "NSUT West Campus formely name Ch.Braham  Prakash Govt. Engineering College"
              }
              subTitle={"B.Tech"}
              text={"8.0 CGPA Till 6th Semeseter"}
            />
            <ResumeItem
              year={`2015-2017`}
              title={
                "Sarvodaya Vidyalaya, Jorbagh"
              }
              subTitle={"XII"}
              text={"73%"}
            />
            <ResumeItem
              year={`2015`}
              title={
                "Ratan Jee Modern School"
              }
              subTitle={"X"}
              text={"8.6 CGPA"}
            />
            
            
            
            
          </div>
          {/* <div className="small-title u-margin-top">
            <SmallTitle icon={<School />} />
          </div> */}
        </InnerLayout>
      </ResumeStyled>
    );
}
const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 1px solid var(--border-color);
        padding-left: 20px;
    }
   
`
export default Resume
