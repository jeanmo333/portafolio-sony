import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1.5}}
      className="flex relative flex-col h-screen text-center 
           md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center">
      <h3 className="absolute  top-24  uppercase tracking-[20px] text-gray-500 text-2xl ml-10">
        About
      </h3>

      <motion.img
        src="https://res.cloudinary.com/dcdr9quag/image/upload/v1667424769/photo2_szgapu.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-[100%] h-56 rounded-lg object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius
          nam, facilis accusamus dolorum beatae, itaque deserunt adipisci rem
          voluptas repellat aperiam alias aspernatur. Sunt quos quaerat quas
          labore!  nam, facilis accusamus dolorum beatae, itaque deserunt adipisci rem
          voluptas repellat aperiam alias aspernatur. Sunt quos quaerat quas
          labore!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
