import React, { useState, useEffect } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products: {error}</div>;

  return (
    <div>
      <div className="card">
        <h2>Products</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong>: {p.description} (${p.price})
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
}

export default ProductsList;
