import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import TextAreaInput from '../../components/Forms/TextAreaInput';
import DefultButton from '../../components/Buttons/DefultButton';
import Dropdown from '../../components/Forms/Dropdown';
import secureLocalStorage from 'react-secure-storage'

const CreateDept = () => {
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')

    const [deptdata, setdeptdata] = useState({
        name: '',
        code: '',
        description: '',
        headOfDepartment: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setdeptdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleCreateDept = async (e) => {
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/department/createDepartment', deptdata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        window.location.reload()
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

    if (role === 'superadmin') {
        return (
            <div>
                <div className="">
                    <form onSubmit={headleCreateDept} method="post">
                        <div className="my-4">
                            <DefultInput
                                label={'Enter Department Name'}
                                name={'name'}
                                value={deptdata.name}
                                placeholder={"Department Name"}
                                required
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="my-4">
                            <DefultInput
                                label={'Enter Department Code'}
                                name={'code'}
                                value={deptdata.code}
                                placeholder={"Department Code"}
                                required
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="my-4">
                            <TextAreaInput
                                label={'Enter Department Description'}
                                name={'description'}
                                value={deptdata.description}
                                placeholder={"Department Description"}
                                required
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="my-4">
                            <Dropdown
                                label="Select Head of Department"
                                name="headOfDepartment"
                                options={[
                                    { value: "", label: "Select Faculty" },
                                    { value: "arts", label: "Faculty of Arts" },
                                    { value: "science", label: "Faculty of Science" },
                                    { value: "eng", label: "Faculty of Engineering" },
                                ]}
                            />
                        </div>

                        <div className="">
                            <DefultButton
                                text={'Create Department'}
                                btntype={'submit'}
                            />
                        </div>


                    </form>
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

}

export default CreateDept