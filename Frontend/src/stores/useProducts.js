import {create} from "zustand"
import axiosInstance from "../services/axios.js"

export const useProducts = create((set) => ({
    products: null,
    isLoadingProducts: false,
    product: null,
    isLoadingProductById: false,

    getAllProducts: async() => {
      try {
        set({isLoadingProducts: true});
        const res = await axiosInstance.get('/ecommerce/products');
        set({products: res.data.data, isLoadingProducts: false});
      } catch (error) {
        toast.error(error.response.data.message || "Failed to fetch products");
        set({isLoadingProducts: false});
      }
    },
    getProductsById: async(productId) => {
      try {
        set({isLoadingProductById: true});
        const res = await axiosInstance.get(`/ecommerce/products/${productId}`);
        set({product: res.data.data, isLoadingProductById: false});
      } catch (error) {
        toast.error(error.response.data.message || "Failed to fetch products");
        set({isLoadingProductById: false});
      }
    },
}))