import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import CartModal from "./components/Cart/CartModal";

import { useSelector } from "react-redux";
import Cart from "./pages/Cart";

const App = () => {
  const isOpen = useSelector((state) => state.products.cartModal);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:element" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* MODALS */}
      {isOpen ? <CartModal /> : null}
    </>
  );
};

export default App;
