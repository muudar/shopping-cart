import ShopMain from "./ShopMain";
import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState("all");
  useEffect(() => {
    fetch("https://dummyjson.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error while fetching");
        }
        return response.json();
      })
      .then((response) => {
        setError(false);
        setItems(response["products"]);
        let categoriesObj = {};
        categoriesObj["all"] = 0;
        for (let item of response["products"]) {
          let cat = item["category"];
          categoriesObj["all"]++;
          if (!categoriesObj[cat]) {
            categoriesObj[cat] = 1;
          } else {
            categoriesObj[cat] += 1;
          }
        }
        setCategories(categoriesObj);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red text-2xl">
          An unexpected error has occured! Please try again.
        </div>
      ) : null}
      {items.length > 0 && (
        <ShopMain
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          categories={categories}
          items={items}
        ></ShopMain>
      )}
    </div>
  );
}

export default Shop;
