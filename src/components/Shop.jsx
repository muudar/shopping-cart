import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";

function Shop() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error while fetching");
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="flex justify-center items-center">
      {loading ? <Spinner /> : error ? <div>ERROR</div> : null}
      {items.length > 0 && <div>ITEMS</div>}
    </main>
  );
}

export default Shop;
