import React from "react";
import homeIntro from "../images/reading.avif";

// import styled
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

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

export default AboutSection;
