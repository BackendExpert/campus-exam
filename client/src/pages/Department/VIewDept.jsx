import React from 'react';
import { useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

const ViewDept = () => {
    const { id } = useParams();
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')
    const token = localStorage.getItem('login')
    
    return (
        <div>ViewDept</div>
    );
};

export default ViewDept;
