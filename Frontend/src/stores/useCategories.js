import {create} from 'zustand';
import axiosInstance from '../services/axios.js';
import toast from "react-hot-toast";

export const useCategories = create((set) => ({
    categories: [],
    isLoadingCategories: false,

    category: null,
    isLoadingCategoryById: false,

    productByCategory: null,
    isLoadingProductByCategory: false,

    getAllCategories: async() => {
      try {
        set({isLoadingCategories: true});
        const res = await axiosInstance.get('/ecommerce/categories');
        set({categories: res.data.data.categories, isLoadingCategories: false});
    } catch (error) {
        toast.error(error.response.data.message || "Failed to fetch categories");
        set({isLoadingCategories: false});
      }
    },
    getCategoriesById: async(categoryId) => {
      try {
        set({isLoadingCategoryById: true});
        const res = await axiosInstance.get(`/ecommerce/categories/${categoryId}`);
        set({category: res.data.data, isLoadingCategoryById: false});
    } catch (error) {
        toast.error(error.response.data.message || "Failed to fetch categories");
        set({isLoadingCategoryById: false});
      }
    },
    getProbuctByCategories: async(categoryId) => {
      try {
        set({isLoadingProductByCategory: true});
        const res = await axiosInstance.get(`/ecommerce/products/category/${categoryId}`);
        set({productByCategory: res.data.data, isLoadingProductByCategory: false});
    } catch (error) {
        toast.error(error.response.data.message || "Failed to fetch categories");
        set({isLoadingProductByCategory: false});
      }
    },
}))
