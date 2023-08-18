import React from "react";
import Personal from "../assets/mypicture.jpg";
import { AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn } from "../App";
import { GiMusicalNotes } from "react-icons/gi";


const LandingPage = () => {
  const [ref, inView] = useInView();

  return (
    <div
      id="home"
      className="overflow-hidden transition ease-in-out w-full max-h-fit md:h-screen py-16 px-4 flex flex-row items-center bg-white dark:bg-[#242424] dark:text-white"
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-reverse p-2 md:mt-[-80px]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <div className="animate-profile__animate order-first w-[250px] h-[250px] mx-auto my-4 border-white md:w-[350px] md:h-[350px] dark:border-[#242424] overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-full h-full object-cover"
              src={Personal}
              alt="/"
            />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center">
            <div className="text-6xl font-semibold flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start items-center gap-1 text-center">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="gradient-text"
              >
                Joey P. Torio Jr.
              </motion.h1>
            </div>
            <div className="flex justify-center lg:justify-start items-center text-gray-600 dark:text-gray-300  gap-6 mt-4">
              <h1 className="text-lg font-semibold">A Web Developer</h1>
            </div>

            <p className="py-7 text-lg text-gray-600 dark:text-gray-300 text-center lg:text-start">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative inline-block"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="block"
                >
                  Lets make our dream into reality. Eveything happens for a reason if not now when. Blue symbolize of peacefully and greatfully. I am eager to learn new things cause new things show the better version of yourelf.
                </motion.span>
                <motion.span
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: -20, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: 1.5 }}
                  className="absolute top-0 left-0"
                >
                  &nbsp;.&nbsp;.&nbsp;.
                </motion.span>
              </motion.span>
            </p>
            <div className="flex flex-row gap-4 mb-9 justify-center lg:justify-start items-center">
              <a href="https://github.com/joeytorio" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:scale-125 text-gray-800 dark:text-gray-200 transition ease-in-out"
                >
                  <AiFillGithub size={40} />
                </motion.div>
              </a>
              <a href="https://www.instagram.com/tor_iodumpy/" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:scale-125 text-[#E1306C] dark:text-[#E1306C] transition ease-in-out"
                >
                  <AiFillInstagram size={40} />
                </motion.div>
              </a>
              <a href="https://www.facebook.com/Joeeey.Torio/" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:scale-125 text-[#1877F2] dark:text-[#1877F2] transition ease-in-out"
                >
                  <AiFillFacebook size={40} />
                </motion.div>
              </a>
              <a href="https://twitter.com/Jttt1_" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:scale-125 text-[#1DA1F2] dark:text-[#1DA1F2] transition ease-in-out"
                >
                  <AiFillTwitterSquare size={40} />
                </motion.div>
              </a>
              <a href="https://www.youtube.com/watch?v=f6YDKF0LVWw&list=RD1QYBiNRu1ok&index=5" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:scale-125 text-[#FF0000] dark:text-[#FF0000] transition ease-in-out"
                >
                  <GiMusicalNotes size={40} />
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
