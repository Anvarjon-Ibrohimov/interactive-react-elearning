import React from "react";

import styled from "styled-components";
import { About } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Can I learn programming from 0 on your platform?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            fuga veritatis? Explicabo recusandae natus dolorum!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How much I need to pay per months?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            accusantium, facilis sint fugit ratione, amet corporis quidem
            dolorem, quos eaque delectus repellat doloremque maiores aliquam
            porro facere quam molestias cupiditate.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What kind of groups are there in your school?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            reprehenderit.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Is there any age range?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            cupiditate?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
  }
`;

export default FaqSection;
