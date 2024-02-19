import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from 'next/image';
import headshot from "../public/Brahm Gicheru Headshot 2.jpeg";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/weather-dashboard.png";
import web2 from "../public/budget-tracker.png";
import web3 from "../public/coding-quiz.png";
import web4 from "../public/workday-scheduler.png";
import web5 from "../public/password-generator.png";
import web7 from "../public/web7.png";
import web8 from "../public/To-Do-List-Application.png";
import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.css';

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { image: web1, title: "Weather Dashboard", description: "Description of Weather Dashboard", url: "https://brahmg1.github.io/weather-dashboard/Develop/index.html" },
    { image: web2, title: "Budget Tracker", description: "Description of Budget Tracker", url: "https://budget-tracker-roan.vercel.app" },
    { image: web8, title: "To Do List Application", description: "Description of To Do List Application", url: "https://to-do-list-brahmg1.vercel.app" },
    { image: web7, title: "CityGirl Brewery Locator", description: "Description of CityGirl Brewery Locator Application", url: "https://brahmg1.github.io/codebreakers/" },  
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      {'<'}
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      {'>'}
    </button>
  );  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // State to toggle the visibility of the project description
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Brahm Gicheru Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-4 md:px-10 lg:px-20 dark:bg-gray-900">

       <section className="min-h-screen">
         <nav className="py-4 md:py-10 mb-4 md:mb-12 flex justify-between">
        <h1  className="text-xl font-burtons dark:text-white">
          Brahm Gicheru
          </h1>
        <ul className="flex items-center">
          <li className="px-10">
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:fill-white"/>
          </li>

          <li className="flex items-center ml-4">
  <div className="text-5xl flex justify-center gap-4 py-3 dark:text-white">
    <a href="https://www.linkedin.com/in/brahm-gicheru-5b75144b/" className="ml-2">
      <AiFillLinkedin />
    </a>
  </div>
</li>

<li className="flex items-center">
  <div className="text-5xl flex justify-center gap-4 py-3 dark:text-white">
    <a href="https://github.com/brahmg1" className="ml-2">
      <AiFillGithub />
    </a>
  </div>
</li>

          {/* <li>
            <a href="#home" className="px-4 dark:text-orange-400 text-orange-400">Home</a>
          </li>
          <li>
            <a href="#about" className="px-4 dark:text-white hover:text-orange-400">About</a>
          </li>
          <li>
            <a href="#portfolio" className="px-4 dark:text-white hover:text-orange-400">Portfolio</a>
          </li> */}
          <li>
            <a className="bg-gradient-to-r from-red-400 to-orange-400 text-black px-4 py-2 rounded-md ml-2 md:ml-8 animate-pulse dark:text-white" href="https://drive.google.com/file/d/18HPh9s5Yf5A5bcCHFFk9TsoBZNRKoGHH/view?usp=sharing">Resume</a>
          </li>
        </ul>
          </nav>

          <div className="text-center p-4 md:p-10">
            <h2 className="text-5xl py-2 text-orange-400 font-medium md:text-6xl" >
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Brahm Gicheru").start();
            }}
          />
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Software Engineer").start();
            }}
            // options={{
            //   loop: true,
            // }}
          />

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={headshot} layout="fill" objectFit="cover"/>
          </div>

            </h3>
            <p className="text-md text-justify py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            Hello, my name is Brahm and I am an experienced coding bootcamp graduate with an extensive background in various programming languages developing applications and websites from square one.  Specialize in JavaScript.  Professional strengths include creative problem-solving, time management, and written and verbal communication.  Detail-oriented mindset from 10+ years of project management experience in Government contracting. <span className="text-orange-400 font-semibold"> Technical Skills: JavaScript, React.js, Node.js, Express.js, HTML, CSS, JSON, MySQL, MongoDB, and APIs. </span> </p>
          </div>
          
        
       </section>
       
       {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-lg font-medium py-2 leading-8 text-gray-800 dark:text-white"> <span className="text-teal-500">Filler </span> Text</p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image className="" src={design} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2"> Creating designs blah....</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2"> Creating designs blah....</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} className="m-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2"> Creating designs blah....</p>
            </div>

          </div>
       </section> */}

       <section className="projects py-10">
         
         <div className="container mx-auto">
           <h3 className="text-5xl pb-5 dark:text-white">Portfolio Projects</h3>
           {/* <p className="text-lg font-medium py-2 leading-8 text-gray-800 dark:text-white">Here is my portfolio..........</p> */}
           
           <div className="carousel">
           <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              
              <div key={index} className="relative" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
                
                <div className="project-image" style={{ 
                  position: "relative",
                  textAlign: "center",
                  overflow: "hidden",
                  }}>

                <Image 
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                style={{
                  width: "50%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }} 
                 />

              {/* Conditional rendering to show/hide the project description */}
              {showDescription && (
                <div className="project-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 1, // Set opacity to 1 when hovering
                  transition: "opacity 0.3s ease"
                }}>
                <h3 className="project-title">{project.title}</h3>
                <p className={styles["project-description"]}>{project.description}</p>
                </div>
              )}
                </div>

                <a href={project.url}>View Project</a>
              </div>
            ))}
          </Slider>
         </div>
         </div>
     


         {/* <div className="basis-1/4 flex-1">
           <a href="https://brahmg1.github.io/codebreakers/" target="_blank">
           <Image src={web7} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">CityGirl Brewery Locator</h3>
           </div>
           
           <div className="basis-1/4 flex-1">
           <a href="https://brahmg1.github.io/weather-dashboard/Develop/index.html" target="_blank">
           <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">Weather Dashboard</h3>
           </div>

           <div className="basis-1/4 flex-1">
           <a href="https://infinite-reef-10985.herokuapp.com/" target="_blank">
           <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">Budget Tracker</h3>
           </div>

           <div className="basis-1/4 flex-1">
           <a href="https://brahmg1.github.io/code-quiz/Develop/index.html" target="_blank">
           <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">Coding Quiz</h3>
           </div>

           <div className="basis-1/4 flex-1">
           <a href="https://brahmg1.github.io/super-disco/Develop/index.html" target="_blank">
           <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">Work Day Scheduler</h3>
           </div>

           <div className="basis-1/4 flex-1">
           <a href="https://brahmg1.github.io/password-generator/Develop/index.html" target="_blank">
           <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                    </a>
                    <h3  className="text-lg font-medium pt-8 pb-2 dark:text-white">Password Generator</h3>
           </div> */}

         

       </section>

       

      </main>

      </div>
      
  )
}

export default HomePage