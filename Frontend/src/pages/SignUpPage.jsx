import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../stores/useAuth'

const SignUpPage = () => {

    const {register, handleSubmit} = useForm()
    const {authUser, isSigningUp, signUpUser} = useAuth()
    
        const onsubmitSignUp = (data) => {
            signUpUser(data)
        }

  return (
    <div className='flex items-center justify-center h-screen flex-col'>
        <h2 className='text-3xl mb-10'>Signpu Page</h2>
        <div>
            <form className='flex flex-col border border-gray-300 w-80 p-5 rounded-2xl' action={handleSubmit(onsubmitSignUp)}>
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
                    <label htmlFor="role">Role:</label>
                    <input
                    className='border border-gray-300 p-2 rounded' 
                    type="text" 
                    id="role" 
                    {...register("role", { required: true })} 
                    />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email">Email:</label>
                    <input
                    className='border border-gray-300 p-2 rounded' 
                    type="email" 
                    id="email" 
                    {...register("email", { required: true })} 
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
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage