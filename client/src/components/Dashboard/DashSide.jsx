import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import { dashsidedata } from './DashSideMenu';


const DashSide = () => {
    const [activeMenu, setActiveMenu] = useState(1);
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')

    useEffect(() => {
        const savedMenu = localStorage.getItem('dashmenuID');
        if (savedMenu) {
            setActiveMenu(savedMenu);
        }
    }, []);

    const handleMenuClick = (id) => {
        localStorage.setItem('dashmenuID', id);
        setActiveMenu(id);
    };

    return (
        <div className="bg-white text-gray-800 min-h-screen p-6 shadow-md">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    UniExam Pro
                </h1>
            </div>

            <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-inner">
                <img
                    src="https://avatars.githubusercontent.com/u/138636749?v=4"
                    alt="User"
                    className="h-12 w-12 rounded-full border-2 border-white shadow"
                />
                <div className="ml-4">
                    <h1 className="text-base font-semibold uppercase">{username}</h1>
                    <p className="text-xs text-gray-500 uppercase">{role}</p>
                </div>
            </div>

            <div className="space-y-2">
                {dashsidedata.map((data, index) => (
                    <Link to={data.link} key={index} className="block">
                        <div
                            className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 cursor-pointer shadow-sm 
                    ${activeMenu == data.id ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
                            onClick={() => handleMenuClick(data.id)}
                        >
                            <data.icon className="h-5 w-5" />
                            <span className="text-sm">{data.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default DashSide;