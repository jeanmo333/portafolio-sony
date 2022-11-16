import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative flex-col text-center xl:flex-row
                            max-w-[200px] xl:px-10 min-h-screen justify-center
                             xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute  top-24  uppercase tracking-[10px] text-gray-500 text-2xl '>
            Skills
        </h3> 

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Lorem ipsum dolor ipsum .
        </h3>

        <div className='grid grid-cols-4 gap-5'>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
             <Skill/>
        </div>
    </motion.div>
  )
}

export default Skills