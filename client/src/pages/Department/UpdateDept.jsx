import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

const UpdateDept = ({ deptID }) => {
    const username = secureLocalStorage.getItem('loginU')
    const role = secureLocalStorage.getItem('loginR')
    const email = secureLocalStorage.getItem('loginE')
    const token = localStorage.getItem('login')

  return (
    <div className='bg-white p-8 rounded-xl shadow-xl'>
        {deptID}
    </div>
  )
}

export default UpdateDept