import React, { useState } from "react";

const products = [
  { name: "Pens", price: 10, category: "Stationery" },
  { name: "laptop", price: 50000, category: "Electronics" },
  { name: "hp bag", price: 600, category: "Bags" },
  { name: "scale", price: 15, category: "Stationery" },
  { name: "mobile", price: 10000, category: "Electronics" },
  { name: "skybag", price: 350, category: "Bags" },
];

const categories = ["All", "Stationery", "Bags", "Electronics"];

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <h2>Product List with Category Filter</h2>

      {/* Category dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Product listing */}
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;