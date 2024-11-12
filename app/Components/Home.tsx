import React from "react";
import Image from "next/image";
import "../CSS/Home.css"; // Import CSS file

const HomeSection = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="text-container">
          <h1 className="home-heading">
            Hi, I'm <span className="highlight">Ausaf Ahmed</span>
          </h1>
          <p className="home-paragraph">
            I am a passionate frontend developer specialized in building
            responsive and modern web applications. I work with JavaScript,
            TypeScript, React, and Next.js to create seamless user experiences.
          </p>
          <div>
            <button className="download-button">
              Download CV
            </button>
          </div>
        </div>

        <div className="image-container">
          <Image
            src="/home.jpeg"
            alt="Profile Picture"
            width={280}
            height={350}
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
