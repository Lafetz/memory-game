import { useState, useEffect } from "react";
import { cardObjs, randomOrder, winLoss } from "./helper";
import styles from "./Card.module.css";
export const Card = (props) => {
  const [cards] = useState(cardObjs);
  const [clickedCards, setClikedCards] = useState([]);
  const [order, setOrder] = useState(randomOrder());
  const { currentScore, setCurrentScore, bestScore, setBestScore } = props;
  useEffect(() => {
    const random = randomOrder();
    setOrder(random);
  }, [clickedCards]);
  useEffect(() => {
    if (currentScore === 10) {
      setBestScore(currentScore);
      setCurrentScore(0);
      setClikedCards([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore]);
  const imageSelect = (id) => {
    const newSet = [...clickedCards];
    newSet.push(id);
    setClikedCards(newSet);
    const gameEnd = winLoss(clickedCards, id);
    if (gameEnd) {
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      setClikedCards([]);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.container}>
        {order.map((x) => {
          console.log(cards);
          return (
            <li key={cards[x].id} className={styles.chars}>
              <img
                className={styles.charsImg}
                onClick={() => {
                  imageSelect(cards[x].id);
                }}
                alt="character"
                src={cards[x].src}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
