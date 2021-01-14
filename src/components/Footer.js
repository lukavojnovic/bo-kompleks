import React from 'react';
import phoneIcon from '../icons/phone.svg';
import pinIcon from '../icons/map-pin.svg';
import mailIcon from '../icons/mail.svg';
import briefcase from '../icons/briefcase.svg';


function Footer(){
    return(
        <div className="w-full mx-auto h-auto bo-dark text-gray-200 pt-8 pb-8">
            <div className="flex justify-center mb-8 text-xl font-semibold">
                <p>BO Kompleks</p>
            </div>
            <div className="flex justify-center">
                <img className="ml-3 mr-3" src={briefcase} />
                <p>BO Kompleks d.o.o</p>
            </div>
            <div className="flex justify-center mt-2 ">
                <img className="ml-3 mr-3" src={phoneIcon} />
                <p>+385 91 888 444</p>
            </div>
            <div className="flex mt-2 justify-center">
                <img className="ml-3 mr-3" src={mailIcon} />
                <p>info@bo.com.hr</p>
            </div>
            <div className="flex mt-2 justify-center">
                <img className="ml-3 mr-3" src={pinIcon} />
                <p>Bukevjanska ulica 12, Borovje, 10000 Zagreb, HR</p>
            </div> 
        </div>
    );
}

export default Footer;