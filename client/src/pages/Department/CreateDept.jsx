import axios from 'axios';
import React, { useState } from 'react'

const CreateDept = () => {
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
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/department/createDepartment', deptdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert(res.data.Message)
                    window.location.reload()
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
        <div>
            <div className="">
                <form onSubmit={headleCreateDept} method="post">
                    
                </form>
            </div>
        </div>
    )
}

export default CreateDept