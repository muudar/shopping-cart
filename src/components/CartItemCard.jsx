function CartItemCard({ item }) {
  return (
    <div className="bg-white m-2 rounded-lg">
      <div className="flex border-b p-4 justify-between">
        <div className="flex flex-col">
          <div className="overflow-ellipsis">{item.title}</div>
          <div>${item.price}</div>
        </div>
        <div>
          <img className="h-full" src={item.images[0]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
