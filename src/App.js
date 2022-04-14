import React, {useState,useEffect }from 'react'
import LeftSideBar from './components/SideBars/LeftSideBar'
import styled from 'styled-components'
import AboutPage from './Pages/AboutPage'
import ResumePage from './Pages/ResumePage'
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage'
import BlogPage from './Pages/BlogPage'
import {Routes,Route} from 'react-router-dom';
// import { IconButton } from '@material-ui/core'
import HomePageNew from './Pages/HomePageNew'
import RightSideBar from './components/SideBars/RightSideBar'
import './App.css';
const App = () =>
{
  const [ navToggle, setNavToggle ] = useState( false );


  return (
    <>
    
      <LeftSideBar />
      
      <div className="ham-burger-menu">
        <div onClick={()=>{setNavToggle(!navToggle)}}>
          <div className={navToggle?'toggler active shift':'toggler'}></div>
        </div>
      </div>
      <MainContentStyled>
        {navToggle&&<RightSideBar navToggle={navToggle} setNavToggle={setNavToggle}/>}

        <Routes>
          {/* <Route exact path="/">
            <HomePageNew />
          </Route> */}
          <Route path='/' element={<HomePageNew/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/portfolios' element={<ResumePage/>}/>
          <Route path='/blogs' element={<BlogPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>

          
       </Routes>
      </MainContentStyled>
     
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  transition: all 2s ease-in-out;
  
  @media screen and (max-width: 1250px) {
    margin-left: 0;
  }

//   .lines {
//     position: absolute;
//     min-height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: space-evenly;

//     .line-1,
//     .line-2,
//     .line-3,
//     .line-4 {
//       width: 1px;
//       min-height: 100vh;
//       background-color: var(--border-color);
//     }
//   }
// `;



export default App
