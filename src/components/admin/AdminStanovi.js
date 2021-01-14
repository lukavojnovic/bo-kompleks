import { useState } from 'react';
import { useQuery } from "react-query";
import { KAT_MAP } from "../../constants/constant";
import axios from "../../axios";
import { queryClient } from "../../App";
import { useHistory } from "react-router";

const getStanovi = (page = 0) => axios.get(`/stanovi?page=${page}&size=5`);

const AdminStanovi = () => {
    const history = useHistory();

    const [page, setPage] = useState(0);

    const {
        isLoading,
        isPreviousData,
        data
    } = useQuery(['stanovi', page], () => getStanovi(page), { keepPreviousData: true });

    const onDelete = async (id) => {
        await axios.delete(`/stanovi/${id}`)
        queryClient.invalidateQueries('stanovi');
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <h1 className="text-gray-500 text-3xl mt-10 text-center font-light">Stanovi</h1>
            <button type="button" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                onClick={() => history.push("/admin/stanovi/new")}>
                Dodaj stan
            </button>
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Šifra
                                </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Sobnost
                                </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Kvadratura
                                </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Kat
                                </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Zgrada
                                </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.data?.content?.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.sifra}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.brojSoba}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {`${item.kvadratura} m2`}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {KAT_MAP.get(item.kat)}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.zgrada.naziv}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <a href="" className="text-indigo-600 hover:text-indigo-900">
                                                    Izmjeni
                                            </a>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <button onClick={() => onDelete(item.id)}
                                                    className="text-red-600 hover:text-red-900">
                                                    Obriši
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
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
                </div>
            </div>
        </div>

    );
};

export default AdminStanovi;
