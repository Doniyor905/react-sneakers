function Drawer({ onClose, items =[] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-30 d-flex justify-between">Корзина
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="Items">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imgUrl})` }}></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            ))
          }


        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить Заказ <img src="/img/arrow.svg" alt="Arrow " /></button>
        </div>

      </div>
    </div>
  )
}

export default Drawer;