import React, { useState } from 'react'

function Login({ handlelogin }) {
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handlelogin(userEmail, userPassword)
        setuserEmail('')
        setuserPassword('')
    }
    return (
        <div className='w-[300px] h-[300px] border-2 border-[#408f68] rounded-md mt-28'>
            <form onSubmit={handleSubmit} className='w-[100%] h-[100%] flex flex-col items-center justify-center gap-5'>
                <input type="email" value={userEmail} onChange={(e) => setuserEmail(e.target.value)} required placeholder='Enter your email' className='h-[45px] w-[220px] bg-transparent border-2 border-[#408f68] outline-none px-5 rounded-full' />
                <input type="password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} required placeholder='Enter password' className='h-[45px] w-[220px] bg-transparent border-2 border-[#408f68] outline-none px-5 rounded-full' />
                <button type='submit' className='h-[45px] w-[220px] bg-[#408f68] outline-none px-5 rounded-full font-semibold text-xl hover:bg-transparent hover:border-2 border-[#408f68]'>Log in</button>
                <div className='w-[100%] flex flex-col items-center'>
                    <p>Username: admin@example.com</p>
                    <p>Password: admin123</p>
                </div>
            </form>
        </div>
    )
}

export default Login