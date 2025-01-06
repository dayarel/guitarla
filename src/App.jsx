import { useState } from "react";

import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";

import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      const updatedCart = [...cart];
      cart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  return (
    <>
      <Header cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              guitar={guitar}
              key={guitar.id}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
