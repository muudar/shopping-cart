function ShopMain({ categories, searchCategory, setSearchCategory }) {
  return (
    <div className="text-white font-bold side-bar pl-8 pr-24 py-12 fixed left-0 height bg-viking rounded-lg">
      <div className="text-3xl">Categories</div>
      <ul className="pl-4">
        {Object.keys(categories).map(function (category) {
          return (
            <li
              className="cursor-pointer"
              key={category}
              style={{
                textDecoration:
                  category == searchCategory ? "underline" : "none",
              }}
              onClick={(e) => {
                setSearchCategory(category);
              }}
            >
              {category} ({categories[category]})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ShopMain.defaultProps = {
  searchCategory: "all",
};

export default ShopMain;
