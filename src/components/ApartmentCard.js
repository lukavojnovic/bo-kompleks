import React from 'react';
import image from "../images/tlocrt.png"

function onClickHandler(){
    console.log("Working")
}

function ApartmentCard(props){
    return(
        <div className="no-flex sm:flex justify-around p-4" key={props.key}>
            <div className="w-full sm:w-auto">
                <ul className="text-md">
                    <li>Kvadrata: <span className="bo-red-color"> {props.kvadrata}</span></li>
                    <li>Sobnost: <span className="bo-red-color"> {props.sobnost}</span></li>
                    <li>Kat: <span className="bo-red-color"> {props.kat}</span></li>
                    <li>Sifra: <span className="bo-red-color"> {props.sifra}</span></li>
                </ul>
            </div>
            <div className="mx-auto mt-3 sm:mt-0 sm:mx-0 max-w-sm h-auto cursor-pointer hover:shadow-md">
                <a href={image} download><img src={image} onClick={onClickHandler} alt="tlocrt"/></a>
            </div>
        </div>
    );
}

export default ApartmentCard;