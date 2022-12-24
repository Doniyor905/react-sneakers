
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center ">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
      <div className="sneakers d-flex">
        <div className="card">
          <img src="/img/sneakers/1.jpg" width={133} height={112} alt="" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img src="/img/plus.svg" width={11} height={11} alt="" />
            </button>
          </div>
        </div>

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
        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
