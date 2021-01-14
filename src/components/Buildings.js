import React, {useState} from 'react'
import Collapsible from 'react-collapsible';
import ApartmentCard from './ApartmentCard';
import {data} from "../test-data/test";
import arrow from "../icons/arrow.svg";
import Fade from 'react-reveal/Fade';

// /api/stanovi?pageNumber=1
// /api/stanovi?pageSize=10
// /api/stanovi?pageSize=10&pageNumber=2


const Buildings = () =>{
    // const usePrevious = (value) => {
    //     const ref = useRef();
    //     useEffect(() => {
    //       ref.current = value;
    //     });
    //     return ref.current;
    //   }
    const [zgrada, setZgrada] = useState("-");
    const [kat, setKat] = useState("-");
    const [sobnost, setSobnost] = useState("-");

    const rotateArrow = (e) => {

    }

    const handleChnageZ = (e) =>{
        const {value} = e.target;
        setZgrada(value)    
    }
    const handleChnageK = (e) =>{
        const {value} = e.target;
        setKat(value)    
    }
    const handleChnageS = (e) =>{
        const {value} = e.target;
        setSobnost(value)   
    }

    const filterData = (data)=>{
        const newData = [];
            data.forEach(item => {
                if(item.zgrada === zgrada && item.kat === kat && item.sobnost === sobnost){
                    newData.push(item)
                }   
            });
        return newData;
    }


    return(
        <div id="buildings" className="bo-pt-nav sm:max-w-full md:max-w-6xl mx-auto h-auto my-5">
            <Fade bottom>
                <p className="text-center text-3xl font-semibold mb-8 ">Ponuda stanova</p>
            </Fade>
            <Fade bottom>
            <div className="w-full text-sm sm:text-md py-6 px-6 flex-no sm:flex mx-auto justify-center" >
                <div className="flex flex-wrap mb-6">
                    <div className="w-48 mx-auto px-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Zgrada
                        </label>
                        <select 
                        value={zgrada}
                        name="zgrada"
                        onChange={handleChnageZ} 
                        className="w-full bg-gray-200 focus:shadow-outline focus:outline-none text-gray-700 font-semibold py-2 px-4 rounded">
                            <option value="-">-</option>
                            <option value="A">Zgrada A</option>
                            <option value="B">Zgrada B</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-48 mx-auto px-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Kat
                        </label>
                        <select 
                        value={kat}
                        name="kat"
                        onChange={handleChnageK} 
                        className="w-full bg-gray-200 focus:shadow-outline focus:outline-none text-gray-700 font-semibold py-2 px-4 rounded">
                            <option value="-">-</option>
                            <option value="1">1. kat</option>
                            <option value="2">2. kat</option>
                            <option value="3">3. kat</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-48 mx-auto px-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Broj soba
                        </label>
                        <select 
                        value={sobnost}
                        name="sobnost"
                        onChange={handleChnageS} 
                        className="w-full bg-gray-200 focus:shadow-outline focus:outline-none text-gray-700 font-semibold py-2 px-4 rounded">
                            <option value="-">-</option>
                            <option value="1">jednosoban</option>
                            <option value="2">dvosoban</option>
                            <option value="3">trosoban</option>
                        </select>
                    </div>
                </div>
            </div>
            </Fade>

            <Fade bottom>
                    {data.map((data, key) => {
                            return(
                                <Collapsible 
                                    key={key}
                                    triggerTagName="div"
                                    trigger={
                                    <div onClick={rotateArrow} className="rounded-sm px-5 py-2 flex justify-between cursor-pointer bo-bg-red text-black hover:text-gray-800">
                                        <p className="w-full ml-auto uppercase">apartman {data.sifra}</p>
                                        <img className="w-6 h-auto" src={arrow} alt="arrow"/>
                                    </div>    
                                    
                                    }
                                    className="mx-3 my-px rounded-md" 
                                    openedClassName=" rounded-sm mx-3 my-px" 
                                    triggerClassName ="font-semibold"
                                    triggerOpenedClassName="font-semibold"
                                    contentInnerClassName=" bg-gray-100"
                                    contentOuterClassName=" "
                                    >
                                <ApartmentCard 
                                    kvadrata={data.kvadrata} 
                                    sobnost={data.sobnost} 
                                    kat={data.kat} 
                                    sifra={data.sifra}
                                />
                                </Collapsible>
                            );
                    })}
            </Fade>
        </div>
    )
}

export default Buildings