import React from "react";
import benefitsPic from "../images/benefitpic.webp";

function BenefitsSection() {
  return (
    <div className="benefits">
      <div className="description">
        <h2>High quality learning system</h2>
        <div className="benefit">
          <h3>Online Platform</h3>
          <h3>High Experienced and talented Mentors</h3>
          <h3>Fast Learning System</h3>
          <h3>Offline School for children</h3>
        </div>
      </div>
      <img src={benefitsPic} alt="High quality" />
    </div>
  );
}

export default BenefitsSection;
