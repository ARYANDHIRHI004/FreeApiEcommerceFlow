import { useProducts } from "@/stores/useProducts";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePageProducts = () => {
  const { products, isLoadingProducts, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-[600]">Products</h1>
      <div>
        {!isLoadingProducts ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
              {products?.products?.map((product) => (
                <Link
                  to={`/products/${product._id}`}
                  key={product._id}
                  className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 mt-10 mx-10"
                >
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
                </Link>
              ))}
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default HomePageProducts;
