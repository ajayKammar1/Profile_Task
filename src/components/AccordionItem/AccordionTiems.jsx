import React from "react";
import AccordionItem from "./AccordionItem";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

const AccordionTiems = () => {
  return (
    <div>
      <AccordionItem Title={"About Us"}>
        <div className="prose max-w-none">
          <p className="text-lg mb-6 text-justify">
            Hi there! I'm a passionate and experienced MERN Stack Developer
            currently working at
            <strong className="text-blue-600 "> Wefix</strong>. I specialize in
            building dynamic, scalable, and robust web applications using the
            latest technologies in the MERN stack: MongoDB, Express.js, React,
            and Node.js.
          </p>
          <p className="text-lg mb-6 text-justify">
            I have a strong background in full-stack development, with a focus
            on building interactive front-end interfaces using React and
            managing powerful back-end services with Node.js and Express. My
            expertise also extends to handling databases with MongoDB, ensuring
            the efficient storage and retrieval of data.
          </p>
        </div>
      </AccordionItem>
      <AccordionItem Title={"Skills"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2 flex items-center">
              <FaBriefcase className="mr-2" size={20} />
              Frontend Development
            </h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>TanStack Query </li>
              <li>Redux Tool Kit</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2 flex items-center">
              <FaGraduationCap className="mr-2" size={20} />
              Backend Development
            </h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem Title={"Additional Interests"}>
        <p className="text-lg mb-4">
          In the past two years, I've completed over 50 projects, focusing on
          IoT and software development. These projects span a range of
          technologies, providing me with hands-on experience and a deep
          understanding of both hardware and software integration. Below are
          some key areas I’ve worked on:
        </p>
        <ul className="list-disc list-inside pl-6">
          <li>Arduino-based smart systems and automation projects.</li>
          <li>
            ESP32/ESP8266/ESP32-CAM for IoT applications and cloud integration.
          </li>
          <li>
            Connecting ESP32 with React/React Native using HTTP/WebSocket.
          </li>

          <li>
            Wireless protocols such as HTTP, and WebSocket for IoT
            communication.
          </li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default AccordionTiems;
