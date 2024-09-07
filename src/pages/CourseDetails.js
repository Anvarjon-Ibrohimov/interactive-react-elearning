import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CourseState } from "../courseState";
import { div, title } from "framer-motion/client";

function CourseDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  //   useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details>
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="" />
          </Header>
          <Awards>
            {course.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled.div`
  color: #fff;
`;
const Header = styled.div`
  min-height: 80vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    font-size: 40px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;
const StyledAward = styled.div`
  padding: 2rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background-color: #30bee1;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
export default CourseDetails;
