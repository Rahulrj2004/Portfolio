import { useState } from "react";
import Project from "../Components/Project"
import { myProjects } from "../constants"
import { motion, useMotionValue, useSpring } from "motion/react"

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x,{damping:10 , stiffness:50});
  const springY = useSpring(y,{damping:10 , stiffness:50});
  const handleMouseMove = (e)=>{
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  }
  const [preview , setPreview] = useState(null);
  return (
    <section onMouseMove={handleMouseMove} className=" relative c-space min-h-[500px] mt-20 md:mt-30">
      <h2 className="text-heading">My selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to to-transparent mt-12 h-[1px] w-full"/>
      {myProjects.map((project)=>(<Project key={project.id} {...project} setPreview={setPreview}/>))}
      {preview && (<motion.img src={preview} className=" fixed top-0 left-0 z-50 object-cover h-52 rounded-lg shadow-lg pointer-events-none w-80 hidden md:block"
      style={{x:springX, y:springY}}/>)}
    </section>
  )
}

export default Projects 