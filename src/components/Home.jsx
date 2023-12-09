import { useOutletContext } from "react-router-dom";
import CartOverlay from "./CartOverlay";

function Home() {
  const context = useOutletContext();
  return (
    <>
      <div className="flex-col px-5 home-screen flex justify-center items-center text-dark-purple font-bold">
        <div className=" text-6xl sm:text-8xl">SwiftCartz</div>
        <p className="text-md text-wisteria sm:text-2xl">
          where your dreams come true
        </p>
      </div>
      {context.cartState.overlay && <CartOverlay></CartOverlay>}
    </>
  );
}

export default Home;
