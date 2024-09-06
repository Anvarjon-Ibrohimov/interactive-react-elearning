import React from "react";
import homeIntro from "../images/reading.avif";

// import styled
import styled from "styled-components";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              you <span>can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>
        <p>
          An educated mind can teach many. An educated mind is better than empty
          one.
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="A man reading a book" />
      </Image>
    </About>
  );
}

// styled componets

const About = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 0.15rem;
`;
const Image = styled.div`
  flex: 1;
  padding-left: 1.5rem;
  overflow: hidden;
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
