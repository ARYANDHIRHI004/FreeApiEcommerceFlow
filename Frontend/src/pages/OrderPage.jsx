import CouponApply from "@/components/CouponApply";
import PriceCalculation from "@/components/PriceCalculation";
import { useProducts } from "@/stores/useProducts";
import React from "react";

const OrderPage = () => {
  const { product } = useProducts();

  return (
    <div className="pt-20 px-8">
      <div className=" border rounded-lg hover:shadow-lg transition-shadow duration-300 mt-10 mx-10 px-10 py-6">
        <h1 className="text-3xl font-[600] mb-10 text-center underline underline-offset-4">Order Details</h1>
        <div className="flex items-center justify-between gap-10 ">
          <img src={product?.mainImage?.url} alt="img" />
          <div>
            <h1 className="text-3xl font-[600]">{product?.name}</h1>
            <h1 className="text-lg ">{product?.description}</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-10 mx-10 p-10 border rounded-lg"> 
        <PriceCalculation />
        <CouponApply />
      </div>
    </div>
  );
};

export default OrderPage;
