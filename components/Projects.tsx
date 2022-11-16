import React from 'react'

type Props = {}

const Projects = (props: Props) => {

    const projects = [1,2,3,4,5]
  return (
    <div className='h-screen relative text-center flex flex-col overflow-hidden
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute  top-24  uppercase tracking-[10px] text-gray-500 text-2xl  '>
            projects
        </h3> 

        <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 '>
            {/* project */}
             {
                projects.map((project,i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                                   items-center justify-center p-20 md:p-44 h-screen'>
                        <img src= "https://res.cloudinary.com/dcdr9quag/image/upload/v1667424752/photo1_uakhdy.jpg"
                        className='h-[200px] w-[30%] object-cover'
                        alt="" />

                        <div className='space-y-10 px-0 max-w-6xl '>
                            <h4 className='text-4xl text-center'>project {i+1} of {projects.length} dolor sit amet.</h4>
                        </div>
                        
                    </div>
                   
                ))
             }
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects