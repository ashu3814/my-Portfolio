import React from 'react';
import Title from '../layouts/Title';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { projectOne, projectTwo, projectThree ,projectFour ,projectFive, projectSix } from '../../assets/index';

const ProjectsCard = ({ title, des, src, githubLink, websiteLink }) => {
  const handleGithubClick = () => {
    console.log('Navigating to GitHub link');
    window.open(githubLink, '_blank');
  };

  const handleWebsiteClick = () => {
    console.log('Navigating to website link');
    window.open(websiteLink, '_blank');
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                onClick={handleGithubClick}
              >
                <BsGithub />
              </span>
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                onClick={handleWebsiteClick}
              >
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des="ECommerce applications like Amazon, Flipkart where users can login and can see a list of products with search, filters, sort by, etc..  Userid :rahul Password : rahul@2021"
          src={projectOne}
          githubLink="https://github.com/ashu3814/nxtTrends.git"
          websiteLink="https://nxttrendapp147.ccbp.tech/"
        />
        <ProjectsCard
          title="Jobby-app"
          des="Developed Jobby App with responsive routes, API integration, and adherence to design guidelines, utilizing provided resources and assets."
          src={projectTwo}
          githubLink="https://github.com/ashu3814/jobby-app.git"
          websiteLink="https://sireesha-jobby-app.vercel.app/login"
        />
        <ProjectsCard
          title="Covide-Dashboaed"
          des= " Covid19 Dashboard with data fetching, component lifecycle methods, routing, and Recharts library. Utilized Figma mockups, covid19india.org APIs, and technologies like HTML, CSS, JavaScript, React JS"
          src={projectThree}
          githubLink="https://github.com/ashu3814/covide19_dashboard.git"
          websiteLink="https://covidedash147.ccbp.tech/"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Munch"
          des=" Food Store website using HTML, CSS, and Bootstrap. Implemented features such as food item listing, detailed information, offers, and embedded YouTube videos."
          src={projectFour}
          githubLink="https://github.com/project1"
          websiteLink="https://foodmunch147.ccbp.tech/"
        />
        <ProjectsCard
          title="To Do's"
          des="Todo app with CRUD operations using HTML, CSS, JS, and Bootstrap, incorporating task listing, dynamic UI updates, and local storage for data persistence"
          src={projectFive}
          githubLink="https://github.com/ashu3814/todo-app.git"
          websiteLink="https://todoapp147.ccbp.tech/"
        />
        <ProjectsCard
          title="Weather Application"
          des="weather application that allows users to search for weather details of a specific city. It retrieves weather data from the OpenWeatherMap API."
          src={projectSix}
          githubLink="https://github.com/ashu3814/weatherApplication.git"
          websiteLink="https://website3.com"
        />
      </div>
    </section>
  );
};

export default Projects;
