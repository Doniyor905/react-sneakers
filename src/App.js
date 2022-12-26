import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://63aa0f25594f75dc1dc7cdf5.mockapi.io/items").then((res) => {
      return res.json();
    })
      .then((json) => {
        setItems(json)
      })
  }, []);

 const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onFavorite={() => console.log("Нажали в плюс")}
              onPlus={(obj) => onAddToCart(obj)}
              
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
