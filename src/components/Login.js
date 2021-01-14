import React from "react";
import { useFormik } from 'formik';
import axios from "../axios";
import { useHistory } from "react-router";

const Login = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {},
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/auth/login', { ...values });

                if (!response) {
                    alert("Došlo je do pogreške.");
                    return;
                }

                localStorage.setItem("user", JSON.stringify(response.data));
                history.push("/admin");
            } catch {
                alert("Korisnički podaci nisu ispravni.")
            }
        },
    });

    return (
        <div className="h-screen bg-gray-200 pt-24">
            <h1 className="text-gray-500 mb-10 text-5xl text-center font-light">BO Kompleks</h1>
            <div
                className="mx-auto flex flex-col bg-white dark:bg-gray-800 shadow px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md">
                <div className="font-light self-center text-xl sm:text-2xl text-gray-600 dark:text-white mb-6">
                    Prijavite se
                </div>
                <div className="mt-8">
                    <form onSubmit={formik.handleSubmit} action="#" autoComplete="on">
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <span
                                    className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>
                                <input
                                    type="username"
                                    name="username"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Korisničko ime" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative ">
                                <span
                                    className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Lozinka" />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button type="submit"
                                className="py-2 px-4 bg-purple-400 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Login;
