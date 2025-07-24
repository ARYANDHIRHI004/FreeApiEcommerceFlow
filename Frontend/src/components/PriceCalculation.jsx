import { useProducts } from "@/stores/useProducts";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const PriceCalculation = () => {
  const { product } = useProducts();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg ">Price: ₹ {product?.price} /-</h1>
      <h1 className="text-lg ">GST: ₹ {(product?.price * 18) / 100} /-</h1>
      <div className="h-0.5 w-full bg-black"></div>
      <h1 className="text-2xl ">
        Total: ₹ {(product?.price * 18) / 100 + product?.price}/-
      </h1>
      <Link to={`/products/${product._id}/order/customerDetails`}>
        <Button  className="w-50 text-lg">Continue</Button>
      </Link>
    </div>
  );
};

export default PriceCalculation;
