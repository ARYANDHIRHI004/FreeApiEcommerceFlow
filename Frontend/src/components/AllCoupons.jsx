import { useAction } from "@/stores/useAction";
import { useCoupon } from "@/stores/useCoupon";
import { CircleX } from "lucide-react";
import React, { useEffect } from "react";

const AllCoupons = () => {
  const { getAllCoupons, coupon, isLoadingCoupon } = useCoupon();
  const { hidden, hideHidden } = useAction();

  useEffect(() => {
    getAllCoupons();
  }, []);

  return (
    <div
      className={`absolute top-0 left-0  bg-gray-600  w-full h-full flex items-center justify-center ${hidden}`}
    >
      <div className="opacity-100 bg-gray-900 bg-opacity-50 max-h-[95vh] p-10 rounded-lg flex flex-col items-center justify-center gap-4">
        <CircleX onClick={hideHidden} size={40} color="white" />
        <h1 className="text-white text-2xl">All Coupons</h1>
        <div className=" text-white overflow-auto ">
          {!isLoadingCoupon ? (
            <div className="flex flex-col gap-5 ">
              {coupon?.coupons.map((coupon) => (
                <div
                  key={coupon._id}
                  className={`flex items-center justify-center border rounded-lg p-5 cursor-pointer hover:bg-gray-600 w-80 flex-col ${!coupon.isActive ? "bg-gray-700 text-gray-400 ": ""}`}
                >
                  <div className="flex justify-between w-full mb-2">
                    <h1 className="font-[700] text-lg" >{coupon.couponCode}</h1>
                    <h1 className="font-[700] " >₹ {coupon.discountValue}/-</h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className={coupon.isActive ? "text-green-600" : "text-red-600"}>{coupon.isActive ? "Active" : "Inactive"}</h1>
                  <h1>Type: {coupon.type}</h1>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCoupons;
