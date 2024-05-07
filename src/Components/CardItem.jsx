import React from "react";
import Card from "./Card";

const projects = [
  {
    pictureSrc:
      "https://github.com/roshaniborkar/kidsZone/blob/main/images/Screenshot%202024-04-29%20123104.png?raw=true",
    title: "Kids Zone",
    description:
      "Kids Zone is a basic gaming and learning website designed for children. The website provides a safe and fun environment for kids to learn while they play. With a variety of games and activities, Kids Zone aims to make learning enjoyable for children. The website offers a wide range of activities, including educational games. as well as pictures with audio so it will help children develop skills and knowledge.",
    readMoreLink: "https://github.com/roshaniborkar/kidsZone",
    demoLink: "https://roshaniborkar.github.io/kidsZone/",
  },
  {
    pictureSrc:
      "https://i.imgur.com/u7jHr1l.png",
    title: "COLLEGE-VACCINE-REGISTRATION-RECORD",
    description:
      "The project is implemented using doubly linked lists to store the student’s vaccination data in the form of files. There is use of files also in this project. Doubly linked list uses self-referential structure.",
    readMoreLink: "https://github.com/roshaniborkar/COLLEGE-VACCINE-REGISTRATION-RECORD",
    
  },
  {
    pictureSrc: "https://img.lovepik.com/free-png/20220126/lovepik-girl-cooking-png-image_401764830_wh1200.png",
    title: "CareForU",
    description:
      "This dynamic Android app, crafted with Java, and SQlite, Used for forecommending home remedies based on diseases.",
    readMoreLink: "https://github.com/roshaniborkar/CareForYou",
  },
  {
    pictureSrc:
      "https://github.com/roshaniborkar/My-Portfolio/blob/main/src/assets/Screenshot%202024-05-07%20192041.png?raw=true",
    title: "Personal Portfolio",
    description:
      "Explore my portfolio website crafted using React, Vite, and Tailwind CSS, where I proudly present a collection of my work. This platform not only showcases my projects but also highlights my diverse skill set, providing a comprehensive view of my capabilities.",
    readMoreLink: "https://github.com/manik-18/Personal-Portfolio",
    demoLink: "",
  },
 
];

function CardItem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 justify-items-center ">
      {projects.map((project, index) => (
        <div key={index}>
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}

export default CardItem;
