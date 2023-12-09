import { Footer } from "./components/Footer";
import "./App.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import { useState } from "react";

function Layout() {
  const [cartState, setCartState] = useState({
    overlay: false,
    items: [],
  });
  return (
    <>
      <NavigationBar cartState={cartState} setCartState={setCartState} />
      <Outlet
        context={{
          cartState,
          setCartState,
        }}
      />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
