import { useState } from "react";
import { useMenuContext } from "..";
import { ProductCard } from "../Components/ProductCard";
export default function Cart() {
  const { cartList } = useMenuContext();
  const [totalPrice, setTotalPrice] = useState(
    cartList?.reduce((acc, { price }) => acc + price, 0)
  );
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  if (cartList.length < 1) return <p>Add some product to cart</p>;
  const totalDeliveryTime = cartList?.reduce(
    (acc, { delivery_time }) => acc + delivery_time,
    0
  );
  const applyCoupon = () => {
    setTotalPrice((price) => price - 5);
    setIsCouponApplied(true);
  };

  return (
    <div>
      <h3>Total Delivery Time: {totalDeliveryTime} minutes</h3>
      <h4>Total Price: Rs {totalPrice}</h4>

      <button disabled={isCouponApplied} onClick={() => applyCoupon()}>
        Apply coupon
      </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {cartList?.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}
