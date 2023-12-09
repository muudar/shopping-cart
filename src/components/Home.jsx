import { useOutletContext } from "react-router-dom";
import CartOverlay from "./CartOverlay";

function Home() {
  const cartState = useOutletContext();
  return (
    <>
      <div>HELLO</div>
      {cartState.overlay && <CartOverlay></CartOverlay>}
    </>
  );
}

export default Home;
