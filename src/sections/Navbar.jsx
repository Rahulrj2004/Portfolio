import { useState } from "react"
import {motion} from "motion/react"
import { style } from "motion/react-client";
import { Link  } from "react-scroll";

function Navigation()
{
  const linkprops = (section)=>({
    to: section,
    smooth: true,
    duration: 500,
    offset: -70,
    className: "nav-link cursor-pointer",
  })
  return (
    <ul className="nav-ul">
    <li className="nav-li">
      <Link {...linkprops("home")} >Home</Link>
    </li>
    <li className="nav-li">
      <Link {...linkprops("about")}>About</Link>
    </li>
    <li className="nav-li">
      <Link {...linkprops("work")}>Work</Link>
    </li>
    <li className="nav-li">
      <Link {...linkprops("contact")}>Contact</Link>
    </li>
  </ul>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
        <div className=" mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a href="/" className=" text-xl font-black transition-colors text-neutral-400 hover:text-white">Rahul R.j</a>
                <button onClick={()=>setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className=" w-6 h-6" />
                </button>
                <nav className="hidden sm:flex">
                  <Navigation />
                </nav>
            </div>
        </div>
       { isOpen && ( <motion.div className=" block overflow-hidden text-center sm:hidden"
        initial={{opacity:0, x:-10}}
        animate={{opacity:1 , x:0}}
        style={{maxHeight:"100vh"}}
        transition={{duration:1}}>
          <nav className=" pb-5">
            <Navigation />
          </nav>
        </motion.div>)}
    </div>
  )
}

export default Navbar