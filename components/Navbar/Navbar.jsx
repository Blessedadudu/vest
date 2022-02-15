import piggylogo from '/public/assets/piggylogo.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  
  const container = {
    show: {
      transition: {
        staggerChildren: .2,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: -200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.3,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  }
  
  const itemButton = {
    hidden: { opacity: 0, y: -200 },
    show2: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 2.1
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.nav className='navbar flex--2'>
        <motion.div  variants={item}  initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: .7
            }}>
          <Image alt="" src={piggylogo} width={200} height={50}
           />
           {/* <Piggylogo className="piggyLogo"/> */}
        </motion.div>
        <input type="checkbox" className="nav_checkbox" id="navi-toggle"/> 
        <label htmlFor="navi-toggle" className="nav_button">
            <span className="iconz">&nbsp;</span>
        </label>
        <div className='list--button flex--2'>
            <motion.ul initial="hidden"
                animate="show"
                exit="exit"
                variants={container} className='flex--1'>
                <motion.li variants={item}>Save</motion.li>
                <motion.li variants={item}>Invest</motion.li>
                <motion.li variants={item}>Stories</motion.li>
                <motion.li variants={item}>FAQs</motion.li>
            </motion.ul>
            <motion.div
                initial="hidden"
                animate="show2"
                exit="exit"
                className='button--cont flex--2'>
                <motion.button variants={itemButton}>Login</motion.button>
                <motion.button initial={{ opacity: .5, y: -200 }} animate={{ opacity: 1, y: 0 }}
                  transition={{
                  ease: "linear",
                  duration: 1.5
                }}>Sign Up</motion.button>
            </motion.div>
        </div>
    </motion.nav>
  )
}

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar