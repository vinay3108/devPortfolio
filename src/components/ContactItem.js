import React from 'react'
import styled from 'styled-components';
const ContactItem = ({icon,title,contact1}) => {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{ title }</h6>
                <p>{ contact1 }</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  margin-bottom: 1rem;
  .left-content {
    margin-right: 1rem;
    padding: 1rem;
    border: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    svg {
      font-size: 1.4rem;
    }
  }
  .left-content:hover {
    cursor: pointer;
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.4rem;
    }
    &:hover {
      cursor: pointer;
      h6 {
        color: var(--primary-color);
      }
    }
    p {
      padding: 0.1rem;
    }
  }
  /* align-items: center; */
`;
export default ContactItem
