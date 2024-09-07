import React from "react";
import homeIntro from "../images/reading.avif";

// import styled
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
// import About Motion
import { motion } from "framer-motion";

function AboutSection() {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2 } },
  };
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              Be educated so that
            </motion.h2>
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
