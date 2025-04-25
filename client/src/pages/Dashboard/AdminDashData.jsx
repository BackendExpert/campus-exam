import React from 'react'
import { FaUser, FaUserGraduate, FaBookOpen, FaChalkboard, FaCalendarCheck } from 'react-icons/fa6'
import secureLocalStorage from 'react-secure-storage'

const AdminDashData = () => {
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')

    const admindata = [
        {
            id: 1,
            name: 'Registered Students',
            value: 1200,
            icon: <FaUserGraduate className="text-white text-3xl" />,
            subtext: 'This semester',
            bg: 'bg-gradient-to-r from-indigo-500 to-purple-500',
        },
        {
            id: 2,
            name: 'Available Courses',
            value: 85,
            icon: <FaBookOpen className="text-white text-3xl" />,
            subtext: 'Across all departments',
            bg: 'bg-gradient-to-r from-pink-500 to-yellow-500',
        },
        {
            id: 3,
            name: 'Active Lecturers',
            value: 42,
            icon: <FaChalkboard className="text-white text-3xl" />,
            subtext: 'Currently teaching',
            bg: 'bg-gradient-to-r from-green-400 to-emerald-600',
        },
        {
            id: 4,
            name: 'Upcoming Exams',
            value: 14,
            icon: <FaCalendarCheck className="text-white text-3xl" />,
            subtext: 'This week',
            bg: 'bg-gradient-to-r from-cyan-500 to-blue-500',
        },
    ]

    return (
        <div>
            {/* Dashboard Wrapper */}
            <div className="xl:flex xl:space-x-6 space-y-6 xl:space-y-0">
                {/* Welcome Card */}
                <div className="xl:w-1/4 w-full">
                    <div className="text-white bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg shadow-md h-full">
                        <div className="flex justify-between pb-4 h-full">
                            <div>
                                <h1 className="font-semibold text-xl">Welcome {username}</h1>
                                <p className="">Exam Registation System</p>
                                <div className="mt-4">
                                    <h1 className="uppercase text-2xl">{role} | SFF/01</h1>
                                    <p className="">Department</p>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <FaUser className='h-12 w-auto' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {admindata.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all duration-300 transform hover:scale-105"
                        >
                            {/* Stylish floating icon bubble */}
                            <div className="absolute top-0 right-0 z-20 mt-6 mr-6">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bg || 'bg-gradient-to-r from-teal-400 to-blue-500'} shadow-lg`}>
                                    <div className="text-white text-2xl">{item.icon}</div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10 mt-20">
                                <p className="uppercase tracking-wider text-xs font-semibold text-gray-500">{item.name}</p>
                                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">{item.value}</h2>
                                <p className="text-sm mt-2 text-gray-600 italic">{item.subtext}</p>
                            </div>

                            {/* Bottom Border Gradient for Visual Pop */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${item.bg || 'bg-gradient-to-r from-teal-500 to-blue-500'}`}></div>
                        </div>
                    ))}
                </div>






            </div>
        </div>
    )
}

export default AdminDashData
