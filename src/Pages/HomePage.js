import React from 'react'
import styled from 'styled-components';
import Particle from '../components/Utility/Particle';
import { GitHub,LinkedIn } from '@material-ui/icons';
import {useTypewriter} from 'react-simple-typewriter'
const HomePage = ({history}) =>
{
 
  const {text} = useTypewriter({
    words: ['Full Stack Developer', 'Web Designer'],
    loop: 0,
  })
    return (
      <HomepageStyled>
        <div className="p-particles-js">
          <Particle />
        </div>
        <div className="typography">
          <h1>
            Hii, I am <span>Vinay Kumar</span>
          </h1>
          <p>
            I am <span>{text}</span>
          </p>
          <div className="icons">
            <a
              href="https://github.com/vinay3108/portfolio"
              className="icon i-github"
            >
              <GitHub />
            </a>
            <a href="https://linkedin.com/in/vinaykr3108" className="icon i-linkedln">
              <LinkedIn />
            </a>
          </div>
        </div>
      </HomepageStyled>
    );
}
const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    p{
      font-size: 2rem;
      color:yellow;
      span{
        font-size: inherit;
        font-weight: bolder;
      }
    }
    .icons {
      display: flex;
      justify-content: center;

      .icon {
        display: flex;
        align-items: center;
        border: 2px solid var(--border-color);
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          cursor: pointer;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
    }
  }
`;
export default HomePage
