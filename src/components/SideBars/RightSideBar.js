import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
// import HomeIcon from '@mui/icons-material/Home';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
// import ArticleIcon from '@mui/icons-material/Article';
// import AppsIcon from '@mui/icons-material/Apps';
import * as Ai from 'react-icons/ai';
// import { motion } from 'framer-motion/dist/framer-motion'
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
const RightSideBar = ({navToggle,setNavToggle}) => {

    return (
      <RightSideBarStyled>
              <div layout className='title'>
                <ul onClick={()=>setNavToggle(!navToggle)} className="nav-items">
                      <li className="nav-item">
                        <NavLink to="/" activeClassName="active-class" exact>
                          <div>
                          <Ai.AiOutlineHome/>
                           Home
                           </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/about" activeClassName="active-class" exact>
                          <div>
                         <Ai.AiOutlineUser/>
                          About
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/resume" activeClassName="active-class" exact>
                          <div>
                         <Ai.AiOutlineBook/>
                          Resume
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/portfolios" activeClassName="active-class" exact>
                          <div>
                          <Ai.AiFillProject/>
                          Projects
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/blogs" activeClassName="active-class" exact>
                          <div>
                          <Ai.AiOutlineBook/>
                          Blogs
                          </div>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/contact" activeClassName="active-class" exact>
                          <div>
                          <Ai.AiOutlineContacts/>
                          Contact
                          </div>
                        </NavLink>
                      </li>
                    </ul>
            </div>
        
      </RightSideBarStyled>
    );
}
const RightSideBarStyled = styled.div`
height:100vh;
position: fixed;
width: 10%;
top:0;
right:0;
background-color: var(--sidebar-profile-color);
.container{
    margin-top:0.5rem;
    width:100%;
    display: flex;
    position: absolute;
    top:0;
    left:-50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    svg{
      font-size: 2.2rem;
    }
    &:hover{
      cursor: pointer;
    }
  }


  .title{
        margin-top: 3rem;
        /* transform: rotate(90deg); */
    }
    .til{
      margin-top: 5rem;
    }
  
.nav-items {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
/* text-align: center; */
svg{
  position: relative;
  top:-1px;
  margin-right: 0.7rem;
}

.nav-item div{
  display: flex;
  align-items: center;
  /* border:1px solid red; */
}

.active{
background-color: var(--primary-color);
color:white;
}
li {
display: block;
color:#fff;
/* border: 1px solid green; */
width: 100%;
a {
  display: block;
  padding: 0.45rem 0;
  position: relative;
  z-index: 10;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  font-weight: 500;
  letter-spacing: 1px;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    color: var(--white-color);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 50%;
    background-color: var(--primary-color);
    transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
    opacity: 0.21;
    z-index: -1;
  }
}

a:hover::before {
  width: 100%;
  height: 100%;
}
}
}
  `;
export default RightSideBar
