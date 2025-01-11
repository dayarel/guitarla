import {useCart} from "./hooks/useCart";


import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";


function App() {

  const {data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    deleteCart,
    isEmpty,
    cardTotal} = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        deleteCart={deleteCart}
        isEmpty={isEmpty}
        cardTotal={cardTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              guitar={guitar}
              key={guitar.id}
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
