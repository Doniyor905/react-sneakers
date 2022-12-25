import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

  const arr = [
    { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imgUrl: "./img/sneakers/1.jpg" },
    { title: "Мужские Кроссовки Nike Air Max 270", price: 8900, imgUrl: "./img/sneakers/2.jpg" },
    { title: "Кроссовки Puma X Aka Boku Future Rider", price: 15999, imgUrl: "./img/sneakers/3.jpg" },
    { title: "Мужские Кроссовки Under Armour Curry 8", price: 10000, imgUrl: "./img/sneakers/4.jpg" },

  ]
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              img={obj.imgUrl} 
              />
          ))}


          {/*

          <div className="card">
            <img src="/img/sneakers/2.jpg" width={133} height={112} alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="f-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={11} height={11} alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/3.jpg" width={133} height={112} alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="f-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={11} height={11} alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/4.jpg" width={133} height={112} alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="f-flex flex-column">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={11} height={11} alt="" />
              </button>
            </div>
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default App;
