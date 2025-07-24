import {create} from "zustand"
import axiosInstance from "../services/axios.js"
import toast from "react-hot-toast";

export const useCoupon = create((set) => ({
    coupon: null,
    isLoadingCoupon: false,
    isApplyingCouponeCode: false,

    getAllCoupons: async() => {
        try {
            set({isLoadingCoupon: true});
            const res = await axiosInstance.get('/ecommerce/coupons');
            set({coupon: res.data.data, isLoadingCoupon: false});
        } catch (error) {
            set({isLoadingCoupon: false});
            toast.error(error.response.data.message || "Failed to fetch coupons");
            
        }
    },
    
    applyCoupon: async (couponCode) => {
        try {
            set({isApplyingCouponeCode: true})
            const res = await axiosInstance.post('/ecommerce/coupons/c/apply', couponCode)
            set({isApplyingCouponeCode: false})
        } catch (error) {
            set({isApplyingCouponeCode: false})
            
      }
    }
     
    
}))