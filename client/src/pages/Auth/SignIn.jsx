import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DefultInput from '../../components/Forms/DefultInput'
import DefultButton from '../../components/Buttons/DefultButton'
import secureLocalStorage from 'react-secure-storage'

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
                        localStorage.setItem("login", res.data.Token)
                        secureLocalStorage.setItem("loginE", res.data.Result.email)
                        secureLocalStorage.setItem("loginU", res.data.Result.username)
                        secureLocalStorage.setItem("loginR", res.data.Result.role)
                        localStorage.setItem("dashmenuID", 1)
                        window.location.reload()
                        navigate('/Dashboard/Home')
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
        <div className='bg-gray-100 min-h-screen pt-[10%] '>
            <div className="xl:grid grid-cols-3 gap-4 ">
                <div className="w-full"></div>
                <div className="w-full">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-gray-500 text-xl font-semibold text-center">Sign In</h1>
                        <hr className='mt-2' />

                        <div className="">
                            <form onSubmit={headleSubmit} method="post">
                                <div className="my-4">
                                    <DefultInput
                                        type={'email'}
                                        label={"Enter Email Address: "}
                                        name={'email'}
                                        value={signindata.email}
                                        placeholder={"Enter Email Address"}
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="my-4">
                                    <DefultInput
                                        type={'password'}
                                        label={"Enter Password: "}
                                        name={'password'}
                                        value={signindata.password}
                                        placeholder={"Enter Password"}
                                        required
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="">
                                    <DefultButton
                                        btntype={'submit'}
                                        text='SignIn'
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full"></div>
            </div>
        </div>
    )
}

export default SignIn