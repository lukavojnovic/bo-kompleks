import React from 'react'
// import image from '../images/bb.jpg'
import logo from '../images/bo-kompleks-logo.png'

function Home() {

    return (
        <div id="home" className=" w-full h-screen bg-gradient-to-r from-purple-500 to-indigo-300">
            <div className="w-2/3 h-auto mx-auto max-w-md pt-32 ">
                <img src={logo}/>
            </div>
        </div>
    );
}

export default Home
