import React from 'react'
import styled from 'styled-components';
const ProgressBar = ({title,width,text}) => {
    return (
      <ProgressBarStyled>
        <SubHeadingProgress>
          <div className="progress-heading">
            <h6>{title}</h6>
            <p>{text}</p>
          </div>
          <div className="progress-bar">
            <div className="progress">
              <span style={{ width: width }}></span>
            </div>
          </div>
        </SubHeadingProgress>
      </ProgressBarStyled>
    );
}

const ProgressBarStyled = styled.section`

    .progress-heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h6{
            font-size: .8rem;
        }
        p{
            font-size:.6rem;
        }
    }
    .progress-bar{
        display: flex;
        align-items: center;
        .progress{
            position: relative;
            width: 100%;
            height: 0.2rem;
            background-color: var(--border-color);
            border-radius: 3px;
            span{
                background-color: var(--primary-color);
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                border-radius: 3px;
            }
        }
    }
`;
const SubHeadingProgress = styled.div`
padding:.2rem 1rem;
`;
export default ProgressBar
