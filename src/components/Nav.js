import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <a href="#!" id="logo">
          e-Learning
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  align-items: center;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: "Silkscreen", sans-serif;
  }
  li {
    padding: 10px 15px;
  }
`;

export default Nav;
