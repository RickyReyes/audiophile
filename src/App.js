import "./App.css";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";

import data from "./starter-code/data.json";

function App() {
  const [productData, setProductData] = useState(data);
  const categories = ["headphones", "speakers", "earphones"];
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {categories.map((category) => (
          <Route
            path={`/${category}`}
            element={
              <CategoryPage category={category} productData={productData} />
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
