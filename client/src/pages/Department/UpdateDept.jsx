import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DefultInput from '../../components/Forms/DefultInput';
import TextAreaInput from '../../components/Forms/TextAreaInput';
import DefultButton from '../../components/Buttons/DefultButton';
import Dropdown from '../../components/Forms/Dropdown';


const UpdateDept = ({ deptID }) => {
    const navigate = useNavigate()
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')
    const token = localStorage.getItem('login')

    const [updatedatadept, setupdatedatadept] = useState({
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

    const [gethods, setgethods] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/department/gethods', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => setgethods(res.data.Result))
            .catch(err => console.log(err))
    }, [])


    const headleDeptUpdate = async (e) => {
        e.preventDefault()
        try {
            axios.post(import.meta.env.VITE_APP_API + '/department/updatedept/' + deptID, {
                headers: { 'Authorization': `Bearer ${token}` },
            })
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        navigate('/Dashboard/Departments')
                    }
                    else {
                        alert(res.data.Error)
                    }
                })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='bg-white p-8 rounded-xl shadow-xl'>
            <h1 className="font-semibold text-gray-500 mb-4">Update Department</h1>

            <div className="">
                <form onSubmit={headleDeptUpdate} method="post">
                    <div className="my-4">
                        <DefultInput
                            label={'Enter Department Name'}
                            name={'name'}
                            value={updatedatadept.name}
                            placeholder={"Department Name"}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="my-4">
                        <TextAreaInput
                            label={'Enter Department Description'}
                            name={'description'}
                            value={updatedatadept.description}
                            placeholder={"Department Description"}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="my-4">
                        <Dropdown
                            label="Select Head of Department"
                            name="headOfDepartment"
                            onChange={handleInputChange}
                            options={[
                                ...gethods.map(hod => ({
                                    value: hod._id,
                                    label: hod.username + ' - ' + hod.email
                                }))
                            ]}
                        />
                    </div>

                    <div className="">
                        <DefultButton
                            text={'Update Department'}
                            btntype={'submit'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateDept