function ItemCard({ item }) {
  return (
    <div className="h-[350px] flex flex-col items-center p-5 border-dark-purple border-4 rounded-lg sm:w-[300px] sm:h-[500px]">
      <img className="h-[100px] sm:h-[200px]" src={item.images[0]} alt="" />
      <div className=".multiline-ellipsis-title h-[150px] font-bold text-lg sm:text-xl text-center">
        {item.title}
      </div>
      <div className="multiline-ellipsis overflow-hidden h-[250px] text-grey font-bold text-sm sm:text-md">
        {item.description}
      </div>
      <div className="text-4xl font-bold">${item.price}</div>
      <div className="mt-2 text-2xl w-full flex justify-center text-white bg-dark-purple rounded-lg font-bold p-2">
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemCard;
