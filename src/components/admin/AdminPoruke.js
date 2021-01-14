import { useState } from 'react';
import { useQuery } from "react-query";
import axios from "../../axios";
import { useHistory } from "react-router";
import AdminNavbar from './AdminNavbar';

const getPoruke = (page = 0) => axios.get(`/poruke?page=${page}&size=3`);

const AdminPoruke = () => {
    const history = useHistory();

    const [page, setPage] = useState(0);

    const {
        isLoading,
        isPreviousData,
        data
    } = useQuery(['poruke', page], () => getPoruke(page), { keepPreviousData: true });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto px-4 sm:px-8 w-full">
                <h1 className="text-gray-500 text-3xl mt-10 text-center font-light">Poruke</h1>
                <div className="py-8">
                    <div className=" w-full">

                        {data.data?.content?.map((item, key) => {
                            return (
                                <div key={key} className="overflow-hidden shadow-lg rounded-lg max-w-lg m-auto relative mb-3">
                                    <div className="bg-white  w-full p-4 relative">
                                        <p className="text-gray-800  text-sm font-medium mb-2">
                                            Od: <span className="text-indigo-500">{item.ime} {item.prezime}</span>
                                        </p>
                                        <p className="text-gray-800  text-sm font-medium mb-2">
                                            Email: <span className="text-indigo-500">{item.email}</span>
                                        </p>
                                        <p className="text-gray-800  text-sm font-medium mb-0 mt-5">
                                            Poruka:
                                </p>
                                        <p className="text-gray-600 text-lg">
                                            {item.poruka}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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
        </>

    );
};

export default AdminPoruke;
