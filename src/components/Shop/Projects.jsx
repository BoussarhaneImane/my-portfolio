import React from 'react';
import { FaLink, FaCodeBranch } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import img1 from './t6.png';
import img2 from './t2.png';
import img3 from './t1.png';
import img4 from './t3.png';
import img5 from './t5.png';
import img6 from './t7.png';
import img7 from './t4.png';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'Developed a modern e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://eco-project-red.vercel.app',
    image: img1
  },
  {
    title: 'Hospital Management System',
    description: 'Built a comprehensive hospital management system to handle patient records, appointments, and more.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://front-hospital-management.vercel.app',
    image: img2
  },
  {
    title: 'Calcul Online',
    description: 'Developed an online calculator application that allows users to perform a variety of calculations, including basic arithmetic, scientific, and financial calculations.',
    technologies: [<SiReact size={25} />, <SiTailwindcss size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />],
    link: 'https://calcul-app-eta.vercel.app',
    image: img3
  },
  {
    title: 'Coffee Shop',
    description: 'Designed and developed a responsive website for a coffee shop, featuring an interactive menu, online ordering system, and customer reviews.',
    technologies: [<SiReact size={25} />, <SiTailwindcss size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />],
    link: 'https://coffeewebsite3.vercel.app',
    image: img4
  },
  {
    title: 'Pharmacie Online',
    description: 'Developed an online pharmacy application that allows users to browse and purchase medications, manage prescriptions, and consult with pharmacists.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://pharma-store-website.vercel.app',
    image: img5
  },
  {
    title: 'Platforme Learn Online',
    description: 'Developed an online learning platform that provides users with access to a variety of courses, interactive lessons, and certification programs.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://biblio-app-ten.vercel.app',
    image: img6
  },
  {
    title: 'Care Women Products',
    description: 'Developed an e-commerce platform focused on women’s healthcare products, offering a wide range of items including skincare, wellness, and hygiene products.',
    technologies: [<SiReact size={25} />, <SiNodedotjs size={25} />, <SiMongodb size={25} />, <SiExpress size={25} />, <SiHtml5 size={25} />, <SiCss3 size={25} />, <SiTailwindcss size={25} />],
    link: 'https://carewebsite2-s56b.vercel.app',
    image: img7,
    centered: true
  }
];

const Projects = () => {
  return (
    <div className="bg-slate-900 text-gray-200 py-12 px-4 sm:px-6 md:px-12">
      <div data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true" className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600">My Projects</h2>
        <p className="mt-4 text-base sm:text-lg">Here are some of the projects I’ve worked on:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
          data-aos="zoom-in"
          data-aos-duration="1100"
          data-aos-once="true"
            key={index}
            className={`relative bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300 ${project.centered ? 'col-span-full' : ''}`}
          >
            <div className="text-slate-950 mb-4" style={{ fontSize: '5rem' }}>
              <FaCodeBranch size={35} />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-pink-600">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-3xl mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-pink-600">{tech}</span>
              ))}
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg transition-opacity duration-300 ease-in-out  opacity-60 hover:opacity-80"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-6 py-2 bg-pink-600 text-white font-bold rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
              >
                View Project <FaLink className="inline ml-2 text-gray-200" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
