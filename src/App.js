import { useEffect } from "react";

import { Routes, Route } from "react-router";

import { useSelector } from "react-redux";

//components
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer/Footer";

import "./scss/App.scss";

function App() {
  const { cartList, totalPrice } = useSelector((state) => state.cartList);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cartList, totalPrice]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
