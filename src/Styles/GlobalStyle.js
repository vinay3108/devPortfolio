import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

    :root{
        /* --primary-color:#007bff; */
        --primary-color:#FFC107;
        --secondary-color:#6c757d;
        --background-dark-color:#10121a;
        --background-dark-grey:#191d2b;
        --border-color:#2e344e;
        --background-light-color:#f1f1f1;
        --background-light-color-2:rgba(3,127,255,0.3);
        --background-light-color-3:#191d2b
        --white-color:#fff;
        --font-light-color:#a4acc4;
        --font-dark-color-2:#151515;
        --sidebar-dark-color:#191d2b;
        --scrollbar-bg-color:#383838;
        --scrollbar-thump-color:#6b6b6b;
        --scrollbar-track-color:#383838;
        --sidebar-profile-color:#2C2C39;
    }

    .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --sidebar-profile-color:#2C2C39;
    }
    .dark-theme{
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color:#10121a;
        --background-dark-grey:#191d2b;
        --border-color:#2e344e;
        --background-light-color:#f1f1f1;
        --background-light-color-2:rgba(3,127,255,0.3);
        --background-light-color-3:#191d2b
        --white-color:#fff;
        --font-light-color:#a4acc4;
        --font-dark-color-2:#151515;
        --sidebar-dark-color:rgba(36,36,47,0.8);
        --scrollbar-bg-color:#383838;
        --scrollbar-thump-color:#6b6b6b;
        --scrollbar-track-color:#383838;
        --sidebar-profile-color:#2C2C39;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size:1.1rem ;
    }

    body{
        background-color: var(--background-dark-color);
        color:var(--font-light-color);
        line-height: 1.7;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        letter-spacing: .25px;
    }

    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383872;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #6b6b6b;
    }
    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }
    a{
        font-family: inherit;
        color:inherit ;
        font-size: inherit;
        font-size: 1rem;
    }
    h1{
        font-size: 4rem;
        color:var(--white-color);
        span{
            font-size: 4rem;
        }
    }
    span{
        color:var(--primary-color)
    }
    h6{
        color:var(--white-color);
        font-size: 1.2rem;
        padding-bottom:.6rem;
    }


    //Utility Classes
   .u-margin-top{
        margin-top: 4rem;
        margin-bottom: 1rem;
    }

    //Floating Toggler
    
    .light-dark-mode{
    position: fixed;
    right:0;
    top:50%;
    background-color: var(--background-light-color-2);
    
    width: 6rem;
    height:2.5rem;
    z-index:15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.7rem;
      color:var(--white-color);
    }
  }


  //Nav Toggler
   .ham-burger-menu{
      position: absolute;
      right:3%;
      top:2%;
      opacity: 1;
      z-index:15;
  }
  .nav-toggle{
      transform: translateX(0);
      z-index: 25;
  }
   @media screen and (max-width: 1250px) {
     .ham-burger-menu{
     opacity: 1;
  }
  }
  
`;

export default GlobalStyle;