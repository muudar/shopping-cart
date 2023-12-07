import ShopSideBar from "./ShopSideBar";
import ShopItems from "./ShopItems";

function ShopMain({ items, categories, searchCategory, setSearchCategory }) {
  return (
    <div className="flex">
      <ShopSideBar
        categories={categories}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <ShopItems items={items} searchCategory={searchCategory}></ShopItems>
    </div>
  );
}

ShopMain.defaultProps = {
  searchCategory: "all",
};

export default ShopMain;
