import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", {
      name,
      description,
      price: Number(price),
    });
    navigate("/products");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        placeholder="Price"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}
