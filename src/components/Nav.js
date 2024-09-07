import React from "react";
import styled from "styled-components";
// link
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
