import React from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from '../stores/useAuth'

const LoginPage = () => {

    const {register, handleSubmit} = useForm()
    const {authUser, isLoggingIn, loginUser} = useAuth()

    const onsubmitLogin = (data) => {
        loginUser(data)
    }
    
    
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
        <h2 className='text-3xl mb-10'>Login Page</h2>
        <div>
            <form className='flex flex-col border border-gray-300 w-80 p-5 rounded-2xl' action={handleSubmit(onsubmitLogin)}>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="username">Username:</label>
                    <input
                    className='border border-gray-300 p-2 rounded' 
                    type="text" 
                    id="username" 
                    {...register("username", { required: true })} 
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="password">Password:</label>
                    <input
                    className='border border-gray-300 p-2 rounded' 
                    type="password" 
                    id="password" 
                    {...register("password", { required: true })} 
                    />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage