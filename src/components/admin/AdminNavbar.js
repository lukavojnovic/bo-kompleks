import React from 'react';
import logo from "../../images/bo-kompleks-logo.svg"

const AdminNavbar = () => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-8 w-8" src={logo} alt="Workflow" />
                            </a>
                            <div className="block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a className="text-gray-800  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        href="/admin">
                                        Stanovi
                                    </a>
                                    <a className="text-gray-800  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        href="/admin/zgrade">
                                        Zgrade
                                    </a>
                                    <a className="text-gray-800  hover:text-gray-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        href="/admin/poruke">
                                        Poruke
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default AdminNavbar;
