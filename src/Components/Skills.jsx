import React from "react";

function Skills() {
  const skills = [
    {
      alt: "C",
      logo: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
    },
    {
      alt: "Java",
      logo: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    },
    {
      alt: "Python",
      logo: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    },
    {
      alt: "HTML5",
      logo: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      alt: "CSS3",
      logo: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      alt: "JavaScript",
      logo: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      alt: "React",
      logo: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    },
    {
      alt: "MySQL",
      logo: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      alt: "MongoDB",
      logo: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    },
    {
      alt: "Linux",
      logo: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    },
    {
      alt: "GitHub",
      logo: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      alt: "PHP",
      logo: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    },
  
    {
      alt: "Android",
      logo: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
    },
  ];

  return (
    <section>
      <div className="container mx-auto mt-4 pt-24 pb-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            <span className="bg-black">Skills</span>
          </h2>
          <p className="text-gray-300 font-semibold md:text-lg lg:text-xl">
            <span className="bg-black">My Technical Skills</span>
          </p>
        </div>
      </div>
      <div className="max-[540px]:mx-16 mt-8 mx-32 flex flex-wrap justify-center items-center gap-8 bg-black">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div>
              <img src={skill.logo} alt={skill.alt} className={`mb-2 h-10`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
