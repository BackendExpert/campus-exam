import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()

    const [signindata, setsignindata] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignindata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', signindata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        navigate('/')
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
        <div>SignIn</div>
    )
}

export default SignIn