import { Button } from "@/components/ui/button";
import { useProducts } from "@/stores/useProducts";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const { getProductsById, product, isLoadingProductById } = useProducts();

  useEffect(() => {
    getProductsById(productId);
  }, [productId]);

  return (
    <div className="pt-20">
      <div className="flex items-center justify-between px-20">
        <div className=" border p-5 rounded-lg w-1/2">
          {isLoadingProductById ? (
            <div className="flex items-center justify-center h-screen">
              <div className="text-2xl">Loading...</div>
            </div>
          ) : (
            <div className="p-5">
              <img
                src={product?.mainImage?.url}
                alt={product?.name}
                className="w-full h-auto"
              />
              <h2 className="text-2xl font-bold">{product?.name}</h2>
              <p className="mt-4">{product?.description}</p>
              <p className="text-xl font-bold mt-2">₹ {product?.price}</p>
              <p
                className={`text-xl text-right font-[600] ${
                  product?.stock <= 3 ? "text-red-600" : "text-green-600"
                }`}
              >
                {product?.stock} Left
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 w-1/4  ">
          <Link to={"/"} className="w-50">
            <Button variant={"outline"} className="text-lg h-12 w-80">
              Buy Now
            </Button>
          </Link>
          <Link to={"/"} className="w-50">
            <Button className="text-lg h-12 hover:bg-gray-700 w-80">
              Add To Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
