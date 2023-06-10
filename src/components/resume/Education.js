import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Full-stack Development"
            subTitle="Nxtwave Disruptive Technologies (Present)"
            result=""
            des="Completed Industry Ready Certification in Full-stack Development from Nxtwave Disruptive Technologies, acquiring practical skills for the technology industry."
          />
          <ResumeCard
            title="Bachelor of Technology (B Tech)"
            subTitle="JNTUA COLLEGE OF ENGINEERING(2017 - 2021)"
            result="8.19/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of construction."
          />
          <ResumeCard
            title="Pre-University education program in MPC"
            subTitle="NARAYANA JR COLLEGE, TIRUPATI (2015 - 2017)"
            result="96 %"
            des="Completed the Pre-University education program specializing in Mathematics, Physics, and Chemistry with outstanding performance."
          />
          <ResumeCard
            title="Secondary School Of Certificate"
            subTitle="SRI DATTA HIGH SCHOOL, KADIRI (2014 - 2015)"
            result="9.5/10"
            des="Achieved an outstanding CGPA of 9.5 in the Secondary School Certificate (SSC) examination."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education
