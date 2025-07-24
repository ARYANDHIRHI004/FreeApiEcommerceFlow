import React, { useState } from "react";
import AllCoupons from "./AllCoupons";
import { useAction } from "@/stores/useAction";
import { useCoupon } from "@/stores/useCoupon";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

const CouponApply = () => {
  const { showHidden } = useAction();
  const { applyCoupon, isApplyingCouponeCode } = useCoupon();

  const [input, setInput] = useState(null);


  return (
    <div>
      <h1 className="text-2xl font-[600]">Coupon</h1>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="border rounded-lg p-2 my-2 w-full"
          onChange={(e) => (setInput(e.nativeEvent.data))}
        />
        <Button onClick={() => applyCoupon({"couponCode": input})}>
          {" "}
          {!isApplyingCouponeCode ? "Apply" : <Loader2Icon />}
        </Button>
      </div>

      <button
        onClick={showHidden}
        className="underline underline-offset-2 text-green-700 hover:cursor-pointer"
      >
        Get all available Coupons
      </button>
      <AllCoupons />
    </div>
  );
};

export default CouponApply;
