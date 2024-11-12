import React from "react";
import Image from "next/image";
import "../CSS/About.css"; // Import CSS file

const About: React.FC = () => {
  return (
    <section id="about">
      {/* Left Side - Profile Image */}
      <div className="profile-image-container">
        <Image
          src="/home.jpeg"
          alt="Profile Picture"
          width={280}
          height={350}
          className="profile-image"
        />
      </div>

      {/* Right Side - Content */}
      <div className="content-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          Hello, Im a passionate frontend developer with a love for creating
          beautiful and responsive web applications. I specialize in JavaScript,
          TypeScript, React, and Next.js. I always strive to improve my skills
          and stay up-to-date with the latest technologies.
        </p>
        <div>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
