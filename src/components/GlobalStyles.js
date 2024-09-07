import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #2a2e35;
    font-family: 'Noto Sans NKo Unjoined', sans-serif;
  }
  button{
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #30bee1;
    color:#fff;
    transition: all 0.25s linear;
        &:hover{
            background-color: #30bee1;
            color: #2a2e35;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 3.5rem;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
                                                
    }
    h3{
        color:#fff;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
                                                
    }
    h4{
        font-weight: bold;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
                                                
    }
    span{
        color:#30bee1;
        font-weight: bold;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
                                                
    }
    a{
        font-size: 1.1rem;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
                                                
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
        font-family: 'Noto Sans NKo Unjoined', sans-serif;
    }
`;

export default GlobalStyle;
