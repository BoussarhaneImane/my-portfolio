import React from "react";
import { Link } from "react-router-dom"; // Assurez-vous que vous avez installé react-router-dom
import { FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/Services" },
  { title: "Work", path: "/Projects" },
  { title: "Contact", path: "/Contact" },
];

const Footer = () => {
  return (
    <div className="bg-pink-600 text-gray-300 font-medium">
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-3 gap-10 py-2 ">
          {/* Company Details */}
          <div className="py-8 px-4">
            <div className="flex items-center mb-4" id='logo'>
              <Link to="/" className="flex items-center text-gray-200">
                <span className="mr-2 text-xl font-bold text-slate-900">Boussarhane</span>
                <span>
                  <div
                    className="bg-slate-900"
                    style={{ padding: '0.4rem', borderRadius: '50%' }}
                  />
                </span>
              </Link>
            </div>
            <p className="text-sm mb-4">
              Web Developer specializing in Full & MERN Stack
            </p>
            <p className="text-sm mb-4">
              Passionate about creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I strive to deliver high-quality, scalable solutions tailored to your needs.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-slate-900">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="hover:text-gray-300 duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-slate-900">Connect with me:</h1>
              <div>
              <div className=" whitespace-nowrap">
  <p>Make Website Pvt, <br></br>Full & MERN Stack<br></br> Developer</p>
</div>

                <div className="flex items-center gap-3 mb-4">
                </div>
                <div className="flex items-center gap-2 mb-4">
  <FaMobileAlt className="text-3xl hover:text-slate-950 duration-300 cursor-pointer" />
  <p className="text-lg ">+212649009048</p>
</div>

                <div className="flex items-center gap-3 mb-2">
                </div>
                {/* Social Links */}
                <div className="grid grid-cols-3 gap-4">
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-3xl hover:text-slate-950 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <footer className="text-center py-4 text-slate-900 font-medium text-sm">
          &copy; 2024 Full Stack Developer. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;

