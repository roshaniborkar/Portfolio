import React from "react";
import Skills from "./Skills";
import GFG from "../assets/gfg.svg";
import Leetcode from "../assets/leetcode.svg";
import CardItem from "./CardItem";
import TimeLine from "./TimeLine";
import "./Card.css";
import educationIcon from "../assets/education.png";
import starIcon from "../assets/star.png";

function About() {
  const timelineData = [
    {
      date: "Mar 2024 - Present",
      title: "Web Development Intern",
      subtitle: "Next24tech, Remote",
      description:
        "Learned about web development technologies like HTML, CSS, JavaScript, Bootstrap, jQuery, MySQL, and completed interesting projects",
      icon: starIcon,
    },    
    {
      date: "Aug 2022 - Nov 2022",
      title: "Web Development Intern",
      subtitle: "WorinWell, Remote",
      description:
        "Learned about web development technologies like HTML, CSS, JavaScript. ",
      icon: starIcon,
    },
    {
      date: "Feb 2021 – Nov 2021",
      title: "TAPP trainee",
      subtitle: "Bharat Electronics Limited (BEL), On-site",
      description: "Worked on real-world projects on radio display",
      icon: starIcon,
    },

  ];

  const educationData = [
    {
      date: "2024",
      title: "New Horizon College Of Engineering",
      subtitle: "B.E. in Computer Science, Bangalore",
      description: "",
      icon: educationIcon,
    },
    {
      date: "2020",
      title: "Govt. Polytechnic ",
      subtitle: "Diploma in Computer Science, Joida",
      description: "",
      icon: educationIcon,
    },
    {
      date: "2017",
      title: "Shree Shivaji Girls High School",
      subtitle: "Class - X, Karwar",
      description: "",
      icon: educationIcon,
    },
  ];

  return (
    <div id="about">
      <br />
      <br />
      <br />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            <span className="bg-black">About me</span>
          </h2>
          <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
            <span className="bg-black">
              I am a passionate Full-stack enthusiast, a Programmer, and a
              Developer, driven by a desire to make a positive impact on
              society. My expertise lies in creating real-world projects that
              deliver seamless user experiences through frontend and backend
              development. I find joy in using technology to help and benefit
              people, and I am dedicated to contributing my skills to meaningful
              projects. My goal is to leverage my programming abilities to
              address societal challenges, providing practical solutions and
              making a difference in people's lives.
            </span>
          </p>
        </div>
      </div>
      <section>
        <div className="container mx-auto pt-24 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Experience</span>
            </h2>
            <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out my Experience.</span>
            </p>
          </div>
        </div>
        <TimeLine timelineData={timelineData} />
      </section>
      <section id="projects">
        <div className="container mx-auto pt-32 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Projects</span>
            </h2>
            <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out My Coool Projects.</span>
            </p>
          </div>
        </div>
        <CardItem />
      </section>
      <section>
        <div className="container mx-auto pt-24 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Education</span>
            </h2>
            <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">My Education Details</span>
            </p>
          </div>
        </div>
        <TimeLine timelineData={educationData} />
      </section>
      <section>
        <div className="container mx-auto pt-32 pb-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              <span className="bg-black">Coding Profiles</span>
            </h2>
            <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
              <span className="bg-black">Check Out My Coding Profiles.</span>
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center gap-40 mt-24 mx-4">
            <div className="w-[190px] p-4 card">
              <div className="p-6 rounded-lg flex justify-center items-center flex-col">
                <a
                  href="https://auth.geeksforgeeks.org/user/roshani_borkar"
                  className="text-white text-center"
                  target="_blank"
                >
                  <img
                    className="w-32 h-32 object-cover object-center"
                    src={GFG}
                    alt="GeeksforGeeks"
                  />
                  <h2 className="text-lg font-medium mt-4">GeeksforGeeks</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default About;
