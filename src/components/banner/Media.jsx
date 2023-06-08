import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { SiMongodb, SiReact, SiExpress } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/shaik_ashuuuu/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <BsInstagram />
            </span>
          </a>
          <a href="https://github.com/ashu3814" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/ashfaq-shaik-672885240" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
              <SiMongodb />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
              <SiExpress />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <SiReact />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
              <DiNodejs />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
