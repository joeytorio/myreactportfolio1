import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Foodordering from "../assets/picturenumber 1.png";
import PorfolioWebsite from "../assets/picturenumber 2.png";
import Table from "../assets/picture number 3.png";
import { motion } from "framer-motion";


const Work = () => {
  
  const work = [
    {
      projectName: "Food Ordering",
      description:
        "A non-functional food ordering website a simple activity in ITE 308",
      sourceCode: "https://github.com/joeytorio",
      localSrc: `${Foodordering}`,
      instagram: "https://www.instagram.com/tor_iodumpy/",
      facebook: "https://www.facebook.com/Joeeey.Torio/",
      twitter: "https://twitter.com/Jttt1_",
      githubColor: "#24292e", 
      instagramColor: "#E1306C", 
      facebookColor: "#1877F2", 
      twitterColor: "#1DA1F2",
    },
    {
      projectName: "Portoflio Website",
      description:
        "A simple Porfolio website our acitivity in ITE 307 the color is this website portfolio is blue cause i like blue, The blue color symbolize peace.",
      sourceCode: "https://github.com/joeytorio",
      localSrc: `${PorfolioWebsite}`,
      instagram: "https://www.instagram.com/tor_iodumpy/",
      facebook: "https://www.facebook.com/Joeeey.Torio/",
      twitter: "https://twitter.com/Jttt1_",
      githubColor: "#24292e", 
      instagramColor: "#E1306C", 
      facebookColor: "#1877F2", 
      twitterColor: "#1DA1F2",
    },
    {
      projectName: "Table",
      description:
        "This activity is a table that contains information about anything you want to put our acitivty in ITE 308.",
      sourceCode: "https://github.com/joeytorio",
      localSrc: `${Table}`,
      instagram: "https://www.instagram.com/tor_iodumpy/",
      facebook: "https://www.facebook.com/Joeeey.Torio/",
      twitter: "https://twitter.com/Jttt1_",
      githubColor: "#24292e", 
      instagramColor: "#E1306C", 
      facebookColor: "#1877F2", 
      twitterColor: "#1DA1F2",
    },
  ];

  return (
    <div
      id="work"
      className="overflow-hidden transition ease-in-out w-full max-h-fit flex justify-center bg-white dark:bg-[#242424] dark:text-white"
    >
      <div className="flex flex-col p-6 gap-6 justify-center items-center text-center">
      <div className="text-center text-white-600 darkshadow:text-white-300 mx-auto mt-10 mb-16">
      <h1 className="text-4xl font-semibold mb-4">My Works and Projects</h1>
      <p>
        My simple works and project in this semister.
      </p>
    </div>
        <div className="flex flex-col items-center gap-10">
          {work.map(
            (
              {
                projectName,
                description,
                sourceCode,
                localSrc,
                instagram,
                facebook,
                twitter,
                githubColor,
                instagramColor,
                facebookColor,
                twitterColor,
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-md flex flex-col lg:flex-row text-center lg:text-start items-center gap-3 shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-blue-500"
                >
                  <img src={localSrc} alt="/" className="w-full md:max-w-2xl" />
                  <div className="flex flex-col md:max-w-sm gap-6 overflow-hidden p-2">
                    <h6 className="text-blue-500 font-semibold text-2xl">
                      {projectName}
                    </h6>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                      {description}
                    </p>

                    
                    <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                      <a href={sourceCode} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="github-icon"
                          style={{ color: githubColor }}
                        >
                          <BiLogoGithub size={30} />
                        </motion.div>
                      </a>
                      <a href={instagram} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="instagram-icon"
                          style={{ color: instagramColor }}
                        >
                          <FaInstagram size={30} />
                        </motion.div>
                      </a>
                      <a href={facebook} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="facebook-icon"
                          style={{ color: facebookColor }}
                        >
                          <FaFacebook size={30} />
                        </motion.div>
                      </a>
                      <a href={twitter} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="twitter-icon"
                          style={{ color: twitterColor }}
                        >
                          <FaTwitter size={30} />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;