import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUserMd } from 'react-icons/fa';
import Button from "../Shared/Button";
import Modal from './Modal';
import ContactForm from './ContactForm';

const Navbar = () => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // Ajout de l'état pour la modale

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchHover = () => {
    setIsSearchHovered(!isSearchHovered);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };

  const handleOrderPopup = () => {
    setIsModalVisible(true); 
  };

  const closeModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <nav 
    className="bg-slate-900 text-gray-200 shadow-md p-3 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" id='logo'>
            <Link to="/" className="flex items-center text-gray-200">
              <span className="mr-0" id="LOGOT">Boussarhane</span>
              <span><div className="mr-0 ml-1 mt-1 bg-pink-600" id="LOGOT" style={{padding:'0.4rem', borderRadius:'10rem'}}></div></span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-10 text-2xl mr-32">
            <Link to="/" className="relative" id="nav-link-home">
              Home
            </Link>
            <Link to="/Services" className="relative " id='nav-link'>
              Services
            </Link>
            <Link to="/Projects" className="relative" id='nav-link'>
              Work
            </Link>

            <Button
              text="Contact"
              bgColor="bg-pink-600"
              textColor="text-white"
              handler={handleOrderPopup} // Ouvrir la modale en cliquant
              customClass="hidden lg:block"
            />
            <div className='mr-0'>
            <Modal isVisible={isModalVisible} onClose={closeModal}>
              <ContactForm />
            </Modal>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggleDropdown} className="text-gray-200 ">
              {isDropdownOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="lg:hidden">
            <div className="ml-12 flex flex-col space-y-6 ">
              <Link to="/" className="text-gray-200" >Home</Link>
              <Link to="/services" className="text-gray-200" >services</Link>
              <Link to='/Projects' className="text-gray-200" >Work</Link>
      
             
              
            <Button
              text="Contact"
              bgColor="bg-pink-600"
              textColor="text-white"
              handler={handleOrderPopup} 
              w="w-28"
            />
            <div className='mr-0'>
            <Modal isVisible={isModalVisible} onClose={closeModal}>
              <ContactForm />
            </Modal>
            </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
