import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import ApartmentCard from './ApartmentCard';
import { data } from "../test-data/test";
import { KAT_MAP } from '../constants/constant'
import Fade from 'react-reveal/Fade';
import axios from '../axios';
import { useQuery } from 'react-query'

const getStanovi = (page = 0) => axios.get(`/stanovi?page=${page}&size=10`);

const Buildings = () => {

    const [page, setPage] = useState(0);
    const {
        isLoading,
        isPreviousData,
        data
    } = useQuery(['stanovi', page], () => getStanovi(page), { keepPreviousData: true });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
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
                                name="zgrada"
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
                                name="kat"
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
                                name="sobnost"
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

            {data.data?.content?.map((item) => {
                return (
                    <Collapsible
                        key={item.id}
                        triggerTagName="div"
                        trigger={
                            <div className="rounded-sm px-5 py-2 flex justify-between cursor-pointer bo-bg-lightred text-black hover:text-gray-800">
                                <p className="w-full ml-auto uppercase">apartman {item.sifra}</p>
                                <div className="plus-minus"></div>
                            </div>
                        }
                        className="mx-3 my-px rounded-md"
                        openedClassName="rounded-sm mx-3 my-px"
                        triggerClassName="font-semibold"
                        triggerOpenedClassName="font-semibold"
                        contentInnerClassName="bg-gray-100"
                        contentOuterClassName=""
                    >
                        <ApartmentCard
                            kvadrata={item.kvadratura}
                            sobnost={item.brojSoba}
                            kat={KAT_MAP.get(item.kat)}
                            sifra={item.sifra}
                            
                        />
                    </Collapsible>
                );
            })}
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                <div className="flex items-center">
                    <button type="button" onClick={() => setPage(old => Math.max(old - 1, 0))}
                        disabled={page === 0}
                        className="w-full  border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                        <svg width="9" fill="currentColor" height="24" className="" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>

                    <button type="button" onClick={() => {
                        if (!isPreviousData && !data.data.last) {
                            setPage(old => old + 1)
                        }
                    }}
                        disabled={isPreviousData || data.data.last}
                        className="w-full border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2">
                        <svg width="9" fill="currentColor" height="24" className="" viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buildings