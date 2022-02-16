import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import cardImg from '/assets/cardImg.svg'


const Body = () => {
  return (
    <div className='body flex--1'>
        <div className='section--1'>
            <h1>112k December Challenge</h1>
            <p className='first--p'>Join other 35+ other users on the 112k December Challenge.</p>
            <button>Join Challenge</button>
            <div className='h4--p flex--4'>
                <div>
                    <h4>Individual Target</h4>
                    <p>#112,000</p>
                </div>
                <div>
                    <h4>Deposit Frequency</h4>
                    <p>#7,000/Weekly</p>
                </div>
                <div>
                    <h4>End Date</h4>
                    <p>December, 23rd</p>
                </div>
                <div>
                    <h4>Members</h4>
                    <p>35 Members</p>
                </div>
            </div>
        </div>
        <motion.div className='img' initial={{ opacity: 0, y: 100, x: 100, scale: .5 }} animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  transition={{
                  ease: "linear",
                  duration: 1.5
                }}>
            <div className="img--main">
                <Image src="/cardImg.svg" alt='' width={800} height={800} priority unoptimized={true}/> 
            </div>
           {/* <CardImg className="img--main"/> */}
        </motion.div>
    </div>
  )
}

export default Body