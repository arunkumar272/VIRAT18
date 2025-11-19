import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Kurta", price: 499 },
    { id: 2, name: "saree", price: 499 },
    { id: 3, name: "Mobile Phones", price: 8999 },
    { id: 4, name: "Laptop", price: 45999 },
    { id: 5, name: "Cricket Bat", price: 799 },
    { id: 6, name: "Kitchen Sets", price: 999 }
  ];

  const [cart, setCart] = useState([]);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => setCart([...cart, p])}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((c, i) => (
        <div key={i}>
          {c.name} - ₹{c.price}
          <button onClick={() => setCart(cart.filter((_, x) => x !== i))}>
            Remove product
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
