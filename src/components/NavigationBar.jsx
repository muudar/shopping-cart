import { NavLink } from "react-router-dom";
function NavigationBar({ cartState, setCartState }) {
  return (
    <nav className="text-white flex justify-between bg-dark-purple py-10 px-3 sm:px-10">
      <div className="text-xl font-bold sm:text-3xl">SwiftCartz</div>
      <ul className="flex justify-between text-lg [&>li]:px-2  sm:text-2xl sm:[&>li]:px-5">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <div
            className="cursor-pointer"
            style={{
              color: cartState.overlay ? "red" : "white",
            }}
            onClick={() =>
              setCartState({
                ...cartState,
                overlay: !cartState.overlay,
              })
            }
          >
            Cart
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
