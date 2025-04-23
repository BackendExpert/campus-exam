import React, { useState } from 'react'

const SignUp = () => {
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
            const res = await
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>SignUp</div>
  )
}

export default SignUp