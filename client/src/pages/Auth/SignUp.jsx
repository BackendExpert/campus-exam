import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [signupdata, setsignupdata] = useState({
        staffno: '',
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signup', signupdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert(res.data.Message)
                    navigate('/')
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
        
    </div>
  )
}

export default SignUp