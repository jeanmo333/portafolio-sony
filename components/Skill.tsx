import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    direcionLeft?: boolean;
}

const Skill = ({direcionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
         initial={{
          x:  direcionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        src= "https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg"
        className= "rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale"
        />
    </div>
  )
}

export default Skill