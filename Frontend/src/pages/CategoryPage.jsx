import { useCategories } from "@/stores/useCategories";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const {
    getCategoriesById,
    isLoadingCategoryById,
    category,
    getProbuctByCategories,
    isLoadingProductByCategory,
    productByCategory,
  } = useCategories();

  useEffect(() => {
    getCategoriesById(categoryId);
    getProbuctByCategories(categoryId);
  }, [categoryId]);

  return (
    <div className="pt-20">
      <div>
        {isLoadingCategoryById ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-2xl">Loading...</div>
          </div>
        ) : (
          <div className="p-5">
            <h2 className="text-2xl font-bold">
              {category?.name.toUpperCase()}
            </h2>
          </div>
        )}
      </div>
      <div>
        {!isLoadingProductByCategory ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
              {productByCategory?.products.map((product) => (
                <div key={product._id} className="border p-4 rounded-lg">
                  <img src={product.mainImage.url} alt="image" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="text-xl font-bold">₹ {product.price}</p>
                  <p
                    className={`text-xl text-right font-[600] ${
                      product.stock <= 3 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {product.stock} Left
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "Loading products..."
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
