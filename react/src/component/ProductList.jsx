import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get("http://localhost:2468/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // Add / POST
  const addProduct = async () => {
    const res = await axios.post("http://localhost:2468/products", {
      name,
      price
    });
    setProducts([...products, res.data]); 
    setName(""); 
    setPrice("");
  };

  // Delete
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:2468/products/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <>
      <h2>Product List</h2>

      {/* Add Product */}
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add</button>

      {/* Show Products */}
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.name}</strong> — ₦{p.price}
            <button onClick={() => deleteProduct(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;