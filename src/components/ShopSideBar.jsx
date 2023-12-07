function ShopSideBar({ categories, searchCategory, setSearchCategory }) {
  return (
    <>
      {/* <button className="mobile-button h-[100px] w-[100px] rounded-lg flex justify-center items-center bg-viking text-white font-bold text-3xl">
        &#x2192;
      </button> */}
      <div className="w-[150px] p-3 sm:px-12 py-8 text-white font-bold side-bar bg-viking rounded-lg sm:w-[300px]">
        <div className="text-xl sm:text-3xl">Categories</div>
        <ul className="text-sm sm:text-lg pl-3">
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
    </>
  );
}

export default ShopSideBar;
