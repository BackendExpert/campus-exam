import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaCog, FaCreditCard, FaQuestionCircle, FaTags, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

const DashNav = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    };

    // Close menu if clicked outside
    useEffect(() => {
        const handler = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div className="bg-white py-4 px-6 shadow-md rounded-b-xl relative">
            <div className="flex justify-between items-center">
                {/* Left Side */}
                <div className="">Dashboard</div>

                {/* Right Side - Avatar and Menu */}
                <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer" onClick={toggleMenu}>
                        <img
                            src="https://avatars.githubusercontent.com/u/138636749?v=4"
                            alt="profile"
                            className="h-10 w-10 rounded-full border-2 border-white shadow-md"
                        />
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                    </div>

                    {/* Dropdown */}
                    {menu && (
                        <div
                            ref={menuRef}
                            className="absolute right-6 top-16 w-72 bg-white rounded-xl shadow-lg z-50 text-sm"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 p-4 border-b">
                                <img
                                    src="https://avatars.githubusercontent.com/u/138636749?v=4"
                                    alt="User"
                                    className="h-10 w-10 rounded-full border border-gray-300"
                                />
                                <div>
                                    <h1 className="font-semibold text-gray-800">{username}</h1>
                                    <p className="text-xs text-gray-500">{role}</p>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <div className="p-2 space-y-1">
                                <DropdownItem icon={<FaUser />} label="My Profile" />
                                <DropdownItem icon={<FaCog />} label="Settings" />
                                <DropdownItem icon={<FaQuestionCircle />} label="FAQ" />
                                <div onClick={handleLogout}>
                                    <DropdownItem icon={<FaSignOutAlt />} label="Log Out" isLogout />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

const DropdownItem = ({ icon, label, badge, isLogout }) => {
    return (
        <div className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer 
        ${isLogout ? 'text-red-500 hover:bg-red-50' : 'text-gray-700 hover:bg-gray-100'} transition`}>
            <div className="flex items-center gap-3">
                <span className="text-base">{icon}</span>
                <span>{label}</span>
            </div>
            {badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
            )}
        </div>
    );
};

export default DashNav;
