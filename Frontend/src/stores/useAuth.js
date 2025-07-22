import { create } from 'zustand'
import axiosInstance from '../services/axios.js'
import toast from "react-hot-toast";

export const useAuth = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isCheckingAuth: false,


    checkAuth: async () => {
      set({isCheckingAuth: true});
        try {
            const res = await axiosInstance.get('/ecommerce/profile');
            set({authUser: res.data.data, isCheckingAuth: false});
        } catch (error) {
            set({isCheckingAuth: false});
            toast.error(error.response.data.message || "Failed to check authentication");
        }
    },

    signUpUser: async (data) => {
      set({isSigningUp: true});
      try {
        const res = await axiosInstance.post('/users/register', data);
        set({authUser: res.data.user, isSigningUp: false});
        toast.success("Signup successful");
      } catch (error) {
        set({isSigningUp: false});
        toast.error(error.response.data.message || "Signup failed");
        
      }
    },
    loginUser: async (data) => {
      set({isLoggingIn: true});
      try {
        const res = await axiosInstance.post('/users/login', data);
        set({authUser: res.data.data.user, isLoggingIn: false});
        toast.success("Login successful");
      } catch (error) {
        set({isLoggingIn: false});
        toast.error(error.response.data.message || "Login failed");
        
      }
    }
    



    
}))