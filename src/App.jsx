import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct"
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<UpdateProduct />} />
    </Routes>
  );
}

export default App;
