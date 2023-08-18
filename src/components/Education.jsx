import React from "react";
import SchoolPhoto1 from "../assets/school 1.png";
import SchoolPhoto2 from "../assets/scool 2.png";
import SchoolPhoto3 from "../assets/school 3.png";
import SchoolPhoto4 from "../assets/nobgit.png";

const Education = () => {
  const educationDetails = [
    {
      school: "Bugallon Integrated School (BIS)",
      yearGraduated: "2014",
      honorsAward: "Achiever 2",
      photo: SchoolPhoto1,
      link: "https://www.facebook.com/p/Bugallon-integrated-school-100057774815139/",
    },
    {
      school: "Saint Andrew Catholic School (SACS)",
      yearGraduated: "2019",
      honorsAward: "None",
      photo: SchoolPhoto2,
      link: "https://www.facebook.com/sacsbugallon/",
    },
    {
      school: "University of Pangasinan (PHINMA)",
      yearGraduated: "2020",
      honorsAward: "With Honors",
      photo: SchoolPhoto3,
      link: "https://up.phinma.edu.ph/",
    },
    {
      school: "University of Pangasinan (PHINMA)",
      yearGraduated: "2023",
      honorsAward: "Currently BSIT-WEBDEV Student in Upang.",
      photo: SchoolPhoto4,
      link: "https://www.facebook.com/phinma.upang.citesc",
    },
  ];

  return (
    <div
      id="education"
      className="overflow-hidden transition ease-in-out w-full h-screen flex flex-col justify-center items-center dark:bg-[#242424] dark:text-white"
    >
      <div className="text-center text-white-600 darkshadow:text-white-300 mx-auto mt-10 mb-16">
        <h1 className="text-4xl font-semibold mb-4">My Education Background</h1>
        <p>
        “Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {educationDetails.map((education, index) => (
          <div
            key={index}
            className="p-2 md:shadow-md hover:shadow-lg transition ease-in-out duration-300 transform hover:scale-105 shadow-gray-300 dark:shadow-blue-500 rounded-md flex flex-col md:flex-row justify-center items-center animate-fade-in"
          >
            <div className="flex flex-col justify-center items-center mx-10">
              <h1 className="text-blue-500 text-2xl uppercase font-semibold mb-3 text-center">
                Educational Background
              </h1>
              <a href={education.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={education.photo}
                  alt={education.school}
                  className="w-40 h-40 rounded-full mb-2 transition-transform transform hover:scale-105"
                />
              </a>
              <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition ease-in-out"
                >
                  <p>{education.school}</p>
                </a>
                <p>{education.yearGraduated}</p>
                <p>{education.honorsAward}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;