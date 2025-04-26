import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllDepts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const token = localStorage.getItem('login');
    const [deptdata, setDeptData] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_APP_API + '/department/getdeparments', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                setDeptData(res.data.Result);
            } catch (err) {
                console.error('Failed to fetch departments:', err);
            }
        };
        fetchDepartments();
    }, [token]);

    const filtered = deptdata.filter(dept =>
        dept.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dept.code?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginated = filtered.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    return (
        <div className="p-4 w-full">
            <h1 className="text-2xl font-bold mb-4">All Departments</h1>

            <input
                type="text"
                placeholder="Search by name or code..."
                className="w-full p-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={e => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
            />

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">Code</th>
                            <th className="px-4 py-2">Department Name</th>
                            <th className="px-4 py-2">Head of Department</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.length > 0 ? (
                            paginated.map((dept, index) => (
                                <tr key={dept._id || index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td className="px-4 py-2">{dept.code}</td>
                                    <td className="px-4 py-2">{dept.name}</td>
                                    <td className="px-4 py-2">
                                        {dept.headOfDepartment.username + ' - ' + dept.headOfDepartment.email  || <span className="text-gray-400">Not Assigned</span>}
                                    </td>
                                    <td className={`px-4 py-2 font-semibold ${dept.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                        {dept.isActive ? 'Active' : 'Inactive'}
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="text-blue-600 hover:underline"
                                            onClick={() => alert(`View department: ${dept.name}`)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4 text-gray-500">No departments found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-100'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllDepts;
