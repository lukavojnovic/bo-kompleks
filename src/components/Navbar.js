import {useState} from "react";
import {useHistory} from "react-router";

const Navbar = () => {
    const history = useHistory();

    const [button, setButton] = useState("hamburger hamburger--collapse");
    const [show, setShow] = useState("flex-grow items-center hidden");

    const onClick = () => {
        if (button === "hamburger hamburger--collapse") {
            setButton("hamburger hamburger--collapse is-active");
            setShow("flex-grow items-center");
        } else {
            setButton("hamburger hamburger--collapse");
            setShow("flex-grow items-center hidden");
        }
    }

    return (
        <nav
            className="sm:block lg:flex fixed items-center justify-between flex-wrap bo-dark p-3 w-full z-40 shadow-lg">
            <div className="">
                <a href="">
                    <div className="text-white text-center mr-20 w-16">
                        <span className="block font-semibold text-xl ">BO</span>
                        <hr className="border-gray-300 w-full"/>
                        <span className="block font-light text-sm">Kompleks</span>
                    </div>
                </a>
            </div>
            <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block">
                <div className="text-md font-light lg:flex-grow">
                    <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 bo-nav-link">
                        O nama
                    </a>
                    <a href="#project" className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 bo-nav-link">
                        O projektu
                    </a>
                    <a href="#location" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 bo-nav-link">
                        Lokacija
                    </a>
                    <a href="#buildings" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 bo-nav-link">
                        Ponuda stanova
                    </a>
                    {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 bo-nav-link">
                                Galerija
                            </a> */}
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 bo-nav-link">
                        Kontakt
                    </a>

                    {localStorage.getItem("user") && <>
                        <button onClick={() => history.push("/admin")}
                                className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-3 py-1 ml-auto bg-white hover:bg-gray-300 text-black rounded-lg">
                            Administracija
                        </button>
                        {/* <button
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-3 py-1 ml-auto bg-white text-black rounded-sm">
                            {localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).username : ""}
                        </button> */}
                        <button
                            onClick={() => {
                                localStorage.removeItem("user")
                                window.location.reload();
                            }
                            }
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-3 py-1 ml-auto bg-white hover:bg-gray-300 text-black rounded-lg">
                            Odjavi se
                        </button>
                    </>
                    }

                </div>
            </div>
            <div id="showMe" className={show} onClick={onClick}>
                <div className="grid grid-cols-1 text-md font-light ">
                    <a href="#about" className=" mt-6 text-white hover:text-gray-300 mr-auto py-3 bo-nav-link">
                        O nama
                    </a>
                    <a href="#project" className=" mt-6  text-white hover:text-gray-300 mr-auto py-3 bo-nav-link">
                        O projektu
                    </a>
                    <a href="#location" className=" mt-6  text-white hover:text-gray-300 mr-auto py-3 bo-nav-link">
                        Lokacija
                    </a>
                    <a href="#buildings" className=" mt-6 text-white hover:text-gray-300 mr-auto py-3 bo-nav-link">
                        Ponuda stanova
                    </a>
                    {/* <a href="#responsive-header" className=" mt-4 text-white hover:text-gray-300 mr-4 bo-nav-link">
                                Galerija
                            </a> */}
                    <a href="#contact" className=" mt-6 text-white hover:text-gray-300 mr-auto py-3 bo-nav-link">
                        Kontakt
                    </a>
                    {localStorage.getItem("user") && <>
                        <button onClick={() => history.push("/admin")}
                                className="block mt-4 lg:inline-block lg:mt-0 px-3 py-1 mr-auto bg-white text-black hover:bg-gray-300 rounded-lg">
                            Administracija
                        </button>
                        {/* <button
                            className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-3 py-1 ml-auto bg-white text-black rounded-sm">
                            {localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).username : ""}
                        </button> */}
                        <button
                            onClick={() => {
                                localStorage.removeItem("user")
                                window.location.reload();
                            }
                            }
                            className="block mt-4 lg:inline-block lg:mt-0 mr-auto px-3 py-1  bg-white text-black hover:bg-gray-300 rounded-lg">
                            Odjavi se
                        </button>
                    </>
                    }
                </div>
            </div>
            <div className="lg:hidden absolute bo-top-50 right-0 mr-2">
                <button id="collapseButton" className={button} onClick={onClick}
                        type="button">
                        <span className="hamburger-box ">
                            <span className="hamburger-inner"></span>
                        </span>
                </button>
            </div>
        </nav>
    );

}

export default Navbar;
