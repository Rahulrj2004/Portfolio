import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"


const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "r2004jawalkar@outlook.com";

    const copyToClipboard = () => {
        console.log(email);
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <motion.button onClick={copyToClipboard} className=" relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
            whileHover={{y:-5}}
            whileTap={{scale:1.05}}>            
            <AnimatePresence mode="wait" >
            {copied ? (<motion.p className="flex items-center justify-center gap-2"
                key="copied"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}>
                <img src="assets/copy-done.svg" alt="copied icon" className=" w-5" />Email has been copied !</motion.p>) :
                <motion.p className="flex items-center justify-center gap-2"
                    key="copy"
                    initial={{ opacity: 0}}
                    animate={{ opacity:1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.1}}>
                    <img src="assets/copy.svg" alt="copy icon" className=" w-5" />
                    Copy Email Address
                </motion.p>}
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton



// Here we used Animate presence because as we were using UseState for the state of email button updation
// the animation were not getting applied from the motion class it was not getting detected .... SO to specify we use Animatepresence