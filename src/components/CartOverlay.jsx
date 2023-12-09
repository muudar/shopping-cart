import CartItemCard from "./CartItemCard";
import { useOutletContext } from "react-router-dom";
function CartOverlay() {
  const context = useOutletContext();
  const calculateTotalPrice = (items) =>
    items.reduce(
      (total, item) =>
        total +
        (item &&
        typeof item === "object" &&
        "price" in item &&
        typeof item.price === "number"
          ? item.price
          : 0),
      0
    );
  return (
    <>
      <div className="bg-gainsboro flex flex-col cart-overlay shadow-2xl p-8 w-[200px] sm:w-[300px] fixed right-0 sm:right-3 top-[105px] sm:top-[115px] rounded-lg text-dark-purple">
        <div className="text-3xl text-black">Your Cart</div>
        <div className="overflow-y-scroll h-[2000px] py-2 [&>*]:mt-2">
          {context.cartState.items.map((item) => {
            return <CartItemCard key={item.id} item={item}></CartItemCard>;
          })}
        </div>
        <div className="mt-5 p-1 sm:p-5 h-full flex flex-col items-center">
          <div className="text-black sm:text-xlg text-md font-bold">
            Total: ${calculateTotalPrice(context.cartState.items)}
          </div>
          <div className="w-full flex justify-center items-center p-1 text-white bg-dark-purple rounded-lg font-bold text-lg">
            Checkout
          </div>
        </div>
      </div>
    </>
  );
}

export default CartOverlay;
