import React, { useEffect } from "react";
import Typed from "typed.js";
import Roshani from "../assets/Roshani.jpg";
import { MdRemoveRedEye } from "react-icons/md";

function Home() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "Programmer",
        "Software Developer",
      ],
      loop: true,
      typeSpeed: 65,
      backSpeed: 40,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const resumeUrl =
    "https://drive.google.com/file/d/1TtD_CLWRkTpulsjJ7tOIeg3aYgVAkP-G/view?usp=drive_link";

  const openResumeInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="home">
      <br />
      <br />
      <br />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white bg-black">
            Hi there 👋,
          </h1>
          <p className="max-w-2xl mb-6 font-semibold lg:mb-8 md:text-lg lg:text-xl text-white bg-black">
            I am Roshani. People know me as a{" "}
            <span className="typing text-indigo-500 italic"></span>.
          </p>
          <p className="bg-black lg:max-w-2xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl text-gray-300 font-semibold">
            Welcome to my portfolio! I'm delighted to have you here. I invite
            you to explore my real-world projects, showcasing seamless user
            experiences crafted through frontend and backend development. Join
            me on this journey of creativity and innovation!
          </p>
          <button
            className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-indigo-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000000] font-bold"
            onClick={openResumeInNewTab}
          >
            <span className="mr-2 mt-[1px]">
              <MdRemoveRedEye />
            </span>
            Resume
          </button>
        </div>
        <div className="lg:mt-0 lg:col-span-5 flex min-[300px]:mt-5 min-[300px]:items-center min-[300px]:justify-center">
          <img src={Roshani} alt="image" className="h-96 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Home;
