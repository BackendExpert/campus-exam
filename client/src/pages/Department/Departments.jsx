import React from 'react'
import { FaBuildingColumns, FaPlus } from 'react-icons/fa6'

const Departments = () => {
    const deptdata = [
        {
            id: 1,
            name: "All Departments",
            value: 6,
            icon: <FaBuildingColumns className="text-white text-3xl" />,
            bg: 'bg-gradient-to-r from-green-400 to-emerald-600',
            btnvalue: 'alldepts'
        },
        {
            id: 2,
            name: "Create New Department",
            value: "+",
            icon: <FaPlus className="text-white text-3xl" />,
            bg: 'bg-gradient-to-r from-cyan-500 to-blue-500',
            btnvalue: 'createnewdept'
        }
    ]
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {
                    deptdata.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all duration-300 transform hover:scale-105"
                            >
                                {/* Stylish floating icon bubble */}
                                <div className="absolute top-0 right-0 z-20 mt-6 mr-6">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${data.bg || 'bg-gradient-to-r from-teal-400 to-blue-500'} shadow-lg`}>
                                        <div className="text-white text-2xl">{data.icon}</div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="relative z-10 mt-20">
                                    <p className="uppercase tracking-wider text-xs font-semibold text-gray-500">{data.name}</p>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">{data.value}</h2>
                                </div>

                                {/* Bottom Border Gradient for Visual Pop */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl ${data.bg || 'bg-gradient-to-r from-teal-500 to-blue-500'}`}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Departments