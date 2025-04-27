import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

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
                <h1 className="">Department ID: {id}</h1>
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
