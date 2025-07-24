import React, { useEffect } from "react";
import clothImg from "../assets/clothImg.jpg";
import { useCategories } from "../stores/useCategories.js";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomePageProducts from "@/components/HomePageProducts";

const HomePage = () => {
  const { getAllCategories, isLoadingCategories, categories } = useCategories();

  useEffect(() => {
    getAllCategories();
  }, []);



  return (
    <div className=" pt-22 px-8">
      {/* Categories */}
      <div>
        <h1 className="text-3xl font-[600]">Categories</h1>
        {!isLoadingCategories ? (
          <div className="flex gap-20 justify-center">
            {categories?.map((category) => (
              <div className="flex flex-col items-center justify-center">
                <Link to={`/categories/${category._id}`}>
                  <Button className="text-lg rounded-full hover:cursor-pointer hover:bg-gray-600 mt-5">{category.name.toUpperCase()}</Button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>

      {/* Products */}
      <HomePageProducts />
    </div>
  );
};

export default HomePage;
