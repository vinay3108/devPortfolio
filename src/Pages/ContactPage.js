import React from 'react'
import { InnerLayout, MainLayout } from '../Styles/Layout'
import styled from 'styled-components';
import Title from '../components/SideBars/Title';
import PrimaryButton from '../components/Utility/PrimaryButton';
import {FiPhone} from 'react-icons/fi';
import {MdEmail} from 'react-icons/md';
import {ImLocation} from 'react-icons/im'
import ContactItem from '../components/ContactItem';

const ContactPage = () => {
    return (
        
        <MainLayout>
            <ContactPageStyled>
                <Title title={ "Contact" } span={ "Contact" } />
                <InnerLayout className={ "contact-section" }>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form action="" className="form">
                            <div className="form-field">

                                <label htmlFor="name" id="name">Enter Your Name*</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-field">

                                <label htmlFor="email" id="email">Enter Your Email*</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form-field">

                                <label htmlFor="subject" id="subject">Enter Your Subject*</label>
                                <input type="text" name="subject" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter Message</label>
                                <textarea name="text-area" id="text-area" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={ "Send Email"}/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem icon={ <FiPhone/> }
                            title={ "Phone" }
                            contact1={"+919891428199"}
                             />
                        <ContactItem icon={ <MdEmail/> }
                            title={ "Email" }
                            contact1={"vinaykr3108@gmail.com"}
                            />
                        <ContactItem icon={ <ImLocation/> }
                            title={ "Address" }
                            contact1={"Badarpur New Delhi"}
                            />
                    </div>
                </InnerLayout>
                
                </ContactPageStyled>
        </MainLayout>
    )
}
const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      background-color: var(--background-color-grey);
      @media all and(max-width:500px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media all and(max-width:500px) {
        width: 70%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 2rem;
          padding: 0.5rem 15px;
          width: 100%;
          color: inherit;
        }

        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
      margin-right: 1rem;
      .right-content {
        margin-top: 2rem;
      }
    }
    @media screen and (max-width: 900px) {
      margin-right: 2rem;
    }
  }
`;
export default ContactPage
