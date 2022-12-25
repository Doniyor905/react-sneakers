import styles from "./Card.module.scss";

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
              <img src="/img/heart-unliked.svg" alt="Heart" />
            </div>
            <img src={props.img} width={133} height={112} alt="" />
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price}</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" width={11} height={11} alt="" />
              </button>
            </div>
          </div>
    )
}

export default Card;