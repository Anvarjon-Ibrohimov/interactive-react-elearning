import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// images
import soon from "../images/soon.png";
import ReactJS from "../images/ReactJS.webp";
import javascript from "../images/javascript.png";

function Courses() {
  return (
    <StyledCourses>
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={ReactJS} alt="ReactRedux" />
        </Link>
      </Course>
      <Course>
        <h2>Interactive Javascript</h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={javascript} alt="ReactRedux" />
        </Link>
      </Course>
      <Course>
        <h2>Soon...</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={soon} alt="ReactRedux" />
        </Link>
      </Course>
    </StyledCourses>
  );
}

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  color: #fff;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
