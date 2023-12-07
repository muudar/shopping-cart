import ItemCard from "./ItemCard";

function ShopItems({ items, searchCategory }) {
  return (
    <div className="items-section">
      {items.map(function (item) {
        return (
          (item.category == searchCategory || searchCategory == "all") && (
            <ItemCard key={item.id} item={item}></ItemCard>
          )
        );
      })}
    </div>
  );
}

ShopItems.defaultProps = {
  searchCategory: "all",
};

export default ShopItems;
