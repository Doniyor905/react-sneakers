import React from "react";
import styles from "./Card.module.scss";

function Card({onFavorite, onPlus, title, price, imgUrl}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, price, imgUrl});
    setIsAdded(!isAdded);
  }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
              <img src="/img/heart-unliked.svg" alt="Heart" />
            </div>
            <img src={imgUrl} width={133} height={112} alt="" />
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price}</b>
              </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="" />
            </div>
          </div>
    )
}

export default Card;