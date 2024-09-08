import React from 'react';
import Slider from 'react-slick';
import { TypeAnimation } from 'react-type-animation';
import imgprofil from '../IMANEBOU.jpg';
import { PiDownloadSimpleBold } from "react-icons/pi";
const HeroData = [
  {
    id: 1,
    subtitle: "Full-Stack Developer",
    title: "MERN Stack Expert",
    title2: "Creating robust web applications with modern tech.",
  }
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='w-full bg-slate-900'>
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center mt-[-40px]">
        <div className="container pb-2 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Img section */}
                  <div className="order-2 sm:order-1 flex justify-center sm:justify-start">
                    <div
                   
                      className="relative z-10"
                      data-aos="zoom-in"
                      data-aos-duration="1100"
                      data-aos-once="true"
                    >
                    <div 
  className="relative m-6 sm:m-9 h-28 w-28 sm:h-56 sm:w-56 bg-pink-600" 
  id="LOGOT" 
  style={{
    padding: '13rem', 
    borderRadius: '50%', 
    boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.6)'
  }}
>
  <img 
    src={imgprofil}
    alt="Profile" 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-60 w-60 rounded-full "
    style={{
      
    }}
  />
</div>

                    </div>
                  </div>
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-1 sm:order-2 relative z-10">
                    <h1
                      data-aos-duration="1100"
                      data-aos="zoom-in"
                  
                      data-aos-once="true"
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200"
                    >
                      <TypeAnimation
                        sequence={[
                          'Full-Stack Developer',
                          2000,
                          'MERN Stack Expert',
                          2000
                        ]}
                        wrapper="p"
                        repeat={Infinity}
                      />
                    </h1>
                    <h1
                      data-aos="zoom-in"
                      data-aos-duration="1800"
                      data-aos-once="true"
                      className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-600"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className='font-medium text-sm sm:text-base md:text-lg lg:text-xl text-gray-200'
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-down"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <a
                        href="/CVImane_Boussarhane.pdf"
                        download
                        className="inline-flex items-center px-4 sm:px-6 py-2  sm:py-3 bg-pink-600 text-gray-200 font-bold text-xs sm:text-base md:text-lg rounded-3xl shadow-lg hover:bg-pink-700 hover:scale-105 transition duration-300"
                      >
                        Download My CV
                        <PiDownloadSimpleBold className="ml-2 text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
