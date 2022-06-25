import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishliast/Wishlist';
import { useCallback, useEffect } from 'react';
import { useCart } from "./context/cartContext"

function App() {
  const {
    inputRef
  } = useCart();

  const handleSearchKey = useCallback((event) => {
    if (event.key === "/") {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    document.addEventListener("keyup", handleSearchKey, false);

    return () => {
      document.removeEventListener("keyup", handleSearchKey, false);
    };
  }, [handleSearchKey]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
