import React from 'react';
import ModalImage from 'react-modal-image';

const ApartmentCard = (props) =>{
    const imgUrl = `http://bo.com.hr/img/${props.sifra}.jpg`;
    return(
        <div className="no-flex sm:flex justify-around p-4" key={props.key}>
            <div className="w-full sm:w-auto">
                <ul className="text-md">
                    <li>Kvadrata: <span className="bo-red-color font-semibold">{props.kvadrata} m2</span></li>
                    <li>Sobnost: <span className="bo-red-color font-semibold">{props.sobnost} {props.sobnost == 2 || props.sobnost == 3 || props.sobnost == 4 ? "sobe" : "soba"}</span></li>
                    <li>Kat: <span className="bo-red-color font-semibold"> {props.kat}</span></li>
                    <li>Sifra: <span className="bo-red-color font-semibold"> {props.sifra}</span></li>
                </ul>
            </div>
            <div className="max-w-md">
            <ModalImage
            className="hover:shadow-md"
            alt={"APARTMAN " + props.sifra}
            small={imgUrl}
            medium={imgUrl}
            hideZoom={true}
            />
            </div>
        </div>
    );
}


export default ApartmentCard;