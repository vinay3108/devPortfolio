import React from 'react'
import styled from 'styled-components'
import { SubHeading } from '../../Styles/Layout'

const SideSocialLinks = () => {
    return (
      <SideSocialLinksStyled>
        <SubHeading>
          <ul>
            <li>
              <a target="_blank" href="mailto:vinaykr3108@gmail.com">
                <div className="headings">
                  <h3>Email</h3>
                  <p>vinaykr3108</p>
                </div>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.linkedin.com/in/vinaykr3108/">
                <div className="headings">
                  <h3>Linkedln</h3>
                  <p>vinaykr3108</p>
                </div>
              </a>
            </li>

            <li>
              <a target="_blank" href="https://leetcode.com/vinaykr3108/">
                <div className="headings">
                  <h3>Leetcode</h3>
                  <p>vinaykr3108</p>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://auth.geeksforgeeks.org/user/vinaykr3108/practice/">
                <div className="headings">
                  <h3>GFG</h3>
                  <p>vinaykr3108</p>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.github.com/vinay3108">
                <div className="headings">
                  <h3>Github</h3>
                  <p>vinay3108</p>
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=918745916568">
                <div className="headings">
                  <h3>Contact No.</h3>
                  <p>+918745916568</p>
                </div>
              </a>
            </li>
          </ul>
        </SubHeading>
      </SideSocialLinksStyled>
    );
}
const SideSocialLinksStyled = styled.div`
ul{
    /* margin-top:1rem; */
    display: flex;
    flex-direction: column;
    /* padding: 0 1rem; */
    /* border:1px solid green; */
}
ul li{
    /* border:1px solid red; */
    width:100%;
    h3{
        font-size: 1rem;
        color:var(--white-color);
    }
    p{
        font-size: 0.7rem;
        color:var(--white-color);
        opacity: 0.5;
    }
}
.headings{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
export default SideSocialLinks
