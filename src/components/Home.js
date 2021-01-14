import React from 'react'
// import image from '../images/bb.jpg'
import logo from '../images/bo-kompleks-logo.png'

function Home() {

    return (
        <div id="home" className=" w-full h-screen">
            {/* <div className="absolute h-auto w-auto lg:mt-56 lg:ml-56 text-center text-white border-white border-4 p-4 ">
                <p className="text-6xl sm:text-4xl">BO</p>
                <p className="text-4xl sm:text-3xl">Kompleks</p>
                <hr className="border-gray-300 object-center mx-3" />
                <p className="text-2xl sm:text-1xl">Zagreb-Borovje</p>
                <p className="text-2xl sm:text-1xl">Stanovaje s karakterom</p>
            </div> */}
            <div className="w-2/3 h-auto mx-auto max-w-md pt-32">
                <img src={logo}/>
            </div>


            {/* <img className="object-cover object-center w-full h-screen opacity-50" src={image} alt="Slika rendera zgrade" /> */}

        </div>
    );
}

export default Home
