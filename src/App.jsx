import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
