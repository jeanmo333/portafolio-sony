import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-2 
    cursor-pointer ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] 
                   xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/dcdr9quag/image/upload/v1661973699/augzgyem02g0an4nfwcs.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Ceo of Amatec</h4>
        <p className="font-bold text-2xl mt-1">Amatec</p>
        <div className="flex space-x-2 my-3 justify-center items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg"
            alt=""
          />

          <img
            className="w-10 h-10 rounded-full"
            src="https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg"
            alt=""
          />

          <img
            className="w-10 h-10 rounded-full"
            src="https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-3 text-gray-300">started 23-07-2020 - present</p>

        <ul className="list-disc space-y-1  ml-1 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
