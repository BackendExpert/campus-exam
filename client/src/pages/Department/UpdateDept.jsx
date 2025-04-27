import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

const UpdateDept = ({ deptID }) => {
    const navigate = useNavigate()
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')
    const token = localStorage.getItem('login')

    const [updatedatadept, setupdatedatadept] = useState({
        code: '',
        name: '',
        description: '',
        headOfDepartment: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setupdatedatadept((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleDeptUpdate = async (e) => {
        e.preventDefault()
        try{
            axios.post(import.meta.env.VITE_APP_API + '/department/updatedept/' + deptID, {
                headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(res => {
                if(res.data.Status === "Success"){
                    alert(res.data.Message)
                    navigate('/Dashboard/Departments')                    
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className='bg-white p-8 rounded-xl shadow-xl'>
            <h1 className="font-semibold text-gray-500 mb-4">Update Department</h1>
            
            <div className="">
                <form onSubmit={headleDeptUpdate}  method="post">
                    
                </form>
            </div>
        </div>
    )
}

export default UpdateDept