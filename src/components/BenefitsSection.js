import React from "react";
import benefitsPic from "../images/benefitpic.webp";
// styled
import { About, Description, Image } from "../styles";
import styled from "styled-components";

function BenefitsSection() {
  return (
    <Benefits>
      <Description>
        <h2>High quality learning system</h2>
        <div className="benefit">
          <h3>Online Platform</h3>
          <h3>High Experienced and talented Mentors</h3>
          <h3>Fast Learning System</h3>
          <h3>Offline School for children</h3>
        </div>
      </Description>
      <Image>
        <img src={benefitsPic} alt="High quality" />
      </Image>
    </Benefits>
  );
}
// styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
    font-family: "Noto Sans NKo Unjoined", sans-serif;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 90%;
    /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSection;
