import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shaik Ashfaq</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a highly skilled web developer with over popular frameworks such as React, Node.js, and Express.js and experience with REST APIs and MVC
frameworks.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9177880515</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shaikashfaqs250@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft