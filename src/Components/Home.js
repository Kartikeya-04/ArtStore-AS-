import React from 'react';
import { delay, motion } from 'framer-motion';
import Lottie from 'lottie-react';
import cloud from '../cloud.json';
import land from '../landscape.json';
import mount from '../mount.json';

import './home.css';

function Home() {
  const shakeAnimation = {
    hover: {
      rotate: [-10, 10, -10],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  const shake = {
    hover2: {
      rotate: [10, -15, 10],
      transition: { duration: 1.4, repeat: Infinity },
    },
  };

  return (
    <div className="all2">
      {/* <Navbar /> */}
      <div className=" all flex justify-center items-center h-screen w-screen mt-[-17rem] ">
        {/* <div> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 5 }}
          whileTap={{ scale: [1, 1.5, 5] }}
          className=" text-shadow-lg"
        >
          <h1 className=" head text-6xl font-bold text-shadow-lg hover:text-purple-900 text-shadow-xl">
            Welcome To Art Store
          </h1>
        </motion.div>

        <Lottie className="anim1 " animationData={cloud} loop={true} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-auto w-screen pb-2 mt-[-1rem]">
        <motion.div
          whileTap={{ scale: [1, 1.5] }}
          className="flex justify-center items-center cursor-grabbing"
        >
          <Lottie className=" anim2" animationData={land} loop={true} />
        </motion.div>
        <div className="h-96 mr-[-10] mt-[-10rem]">
          <h3 className="text1 font-semibold flex justify-center items-center">
            <motion.div
              whileHover="hover"
              variants={shakeAnimation}
              className="text11  rounded-3xl p-2 cursor-wait"
            >
              Join us for regularly curated
              <br /> exhibitions and events that bring <br /> the art community
              together. <br /> From solo artist showcases <br /> to themed group
              exhibitions,
              <br /> our calendar is filled with <br /> opportunities to engage
              with <br /> art and connect with like-minded <br /> individuals
              who share a passion for creativity.
            </motion.div>
          </h3>
        </div>
        <div className="text2 text-white pb-2 ">
          <h3 className="font-semibold flex justify-center items-center">
            <motion.div
              whileHover="hover2"
              variants={shake}
              className="text22 rounded-3xl p-6 cursor-wait"
            >
              Plan your visit to Art Store and experience the magic of art
              <br />
              in person. Our gallery provides a <br />
              welcoming environment where you <br /> can wander through
              thoughtfully <br /> designed spaces and lose yourself in the world
              of aesthetics.
              <br /> Check our opening hours and location to make the most of
              your visit.
              <br />
            </motion.div>
          </h3>
        </div>

        <motion.div
          whileTap={{ scale: [1, 1.5] }}
          className="flex justify-center items-center cursor-grabbing"
        >
          <Lottie className="anim3" animationData={mount} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
