import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DefultButton from '../../components/Buttons/DefultButton';
import UpdateDept from './UpdateDept';

const ViewDept = () => {
    const { id } = useParams();
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')
    const token = localStorage.getItem('login')

    const [viewdept, setviewdept] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/department/getonedepartment/' + id, {
            headers: { 'Authorization': `Bearer ${token}` },
        })
            .then(res => setviewdept(res.data.Result))
            .catch(err => console.log(err))
    }, [])


    if (role === 'superadmin') {
        return (
            <div>
                <h1 className="text-gray-500 font-semibold text-xl mb-4">Department ID: {id}</h1>

                <a href="/Dashboard/Departments" className='my-4'>
                    <DefultButton
                        btntype={'button'}
                        text={"Back"}
                    />
                </a>

                <div className="bg-white p-8 rounded-lg shadow-xl mt-4">
                    <table className='w-full text-gray-500'>
                        <tr className='h-12 border-b border-gray-200'>
                            <td className='font-semibold'>Department ID</td>
                            <td>{viewdept._id}</td>
                        </tr>
                        <tr className='h-12 border-b border-gray-200'>
                            <td className='font-semibold'>Department Code</td>
                            <td>{viewdept.code}</td>
                        </tr>
                        <tr className='h-12 border-b border-gray-200'>
                            <td className='font-semibold'>Department Name</td>
                            <td>{viewdept.name}</td>
                        </tr>
                        <tr className='h-12 border-b border-gray-200'>
                            <td className='font-semibold'>Department Head</td>
                            <td>{viewdept.headOfDepartment?.username} - {viewdept.headOfDepartment?.email}</td>
                        </tr>
                    </table>
                </div>

                <div className="mt-4">
                    <UpdateDept deptID={id} />
                </div>
            </div>
        )
    }
    else {
        useEffect(() => {
            localStorage.clear()
            window.location.reload()
        }, [])
    }

};

export default ViewDept;
