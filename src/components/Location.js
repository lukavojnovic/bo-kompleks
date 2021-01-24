import React from 'react';
import Fade from 'react-reveal/Fade';

const Location = () => {
    return(
        <div className="h-auto  bg-gray-100 pt-32 pb-12" id="location">
            <Fade bottom>
                <p className="text-center text-3xl font-semibold mb-8 ">Lokacija</p>
            </Fade>
            <div className="lg:flex lg:w-3/4 lg:mx-auto">
            <Fade bottom>
            <iframe id="iframe" title="map" className="mx-auto w-5/6 md:w-3/4 lg:h-5/6 lg:mx-3"  src="https://maps.google.com/maps?q=Velikogorička+ul.,+10000,+Zagreb%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
            </Fade>
            <Fade bottom>
                <div className="text-justify mx-auto w-5/6 md:w-3/4 lg:mx-3 mt-8 lg:mt-0">
                    <p className="text-gray-700 text-xl"> BO kompleks se nalazi u prestižnoj zagrebačkoj poslovnoj zoni, na križanju Slavonske avenije, Heinzelove ulice i Radničke ceste. Vašim djelatnicima, partnerima i klijentima lako je dostupan automobilom, javnim prijevozom i biciklom iz svih smjerova i kvartova grada. Udaljen je petnaestak minuta od zračne luke i centra Zagreba i svega par minuta od autobusnog kolodvora i poslovne zone.</p>
                </div>
            </Fade>
            </div>
        </div>
    );
}

export default Location;
