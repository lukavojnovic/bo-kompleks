import React from 'react'
import vector from '../icons/Vector.svg'
import Fade from 'react-reveal/Fade';

const About = (props) => {
    return(
        <div className="sm:h-auto lg:h-screen bg-white bo-pt-nav" id="about">
        <Fade bottom>
        <div className="justify-evenly flex flex-row">
            <div className="mt-2">
                <p className="text-center text-xl sm:text-3xl md:text-4xl font-bold bo-red-color">2021</p>
                <p className="text-center md:text-xl font-medium sm:mt-0 md:mt-2">Godina izgradnje</p>
            </div>
            <div className="mt-2">
                <p className="text-center text-xl sm:text-3xl md:text-4xl font-bold bo-red-color">7</p>
                <p className="text-center md:text-xl font-medium sm:mt-0 md:mt-2">Katova</p>
            </div>
            <div className="mt-2">
                <p className="text-center text-xl sm:text-3xl md:text-4xl font-bold bo-red-color">2</p>
                <p className="text-center md:text-xl font-medium sm:mt-0 md:mt-2">Zgrade</p>
            </div>
            <div className="mt-2">
                <p className="text-center text-xl sm:text-3xl md:text-4xl font-bold bo-red-color">10000</p>
                <p className="text-center md:text-xl font-medium sm:mt-0 md:mt-2">m2 prostora</p>
            </div>
        </div>
        </Fade>
        <Fade bottom>
            <p className="text-center text-3xl font-semibold mt-16">O Nama</p>
        </Fade>
        <div className="mt-6 w-4/5 sm:w-3/4 mx-auto">
            <Fade bottom> 
                <p className=" mx-auto text-xl md:text-base text-justify text-gray-900  ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Fade >
            <Fade bottom>
                <a href="#location"><img className="mx-auto mt-8 w-16 h-16 hover:opacity-75" src={vector} /></a>
            </Fade>
            <Fade bottom>
                <p className="text-center mt-6 text-gray-900 text-lg">Zagreb</p>
                <p className="text-center text-gray-900 text-lg mb-4 sm:mb-4 md:mb-3 lg:mb-2">Bukevjanska ulica 12, Borovje, 10000 Zagreb, HR</p>
            </Fade>
        </div>
    </div>
    );
}

export default About;