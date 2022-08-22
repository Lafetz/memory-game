import zero from "../imgs/0.png";
import two from "../imgs/2.png";
import three from "../imgs/3.png";
import four from "../imgs/4.png";
import five from "../imgs/5.png";
import six from "../imgs/6.png";
import seven from "../imgs/7.png";
import eight from "../imgs/8.png";
import nine from "../imgs/9.png";
import one from "../imgs/1.png";
const images = [zero, one, two, three, four, five, six, seven, eight, nine];
export const randomOrder = () => {
  const random = [];
  while (random.length < 10) {
    const number = Math.floor(Math.random() * 10);
    if (random.indexOf(number) === -1) {
      random.push(number);
    }
  }
  return random;
};
export const cardObjs = new Array(10)
  .fill({
    id: 0,
    src: "",
  })
  .map((x, i) => {
    const image = {
      id: i,
      src: images[i],
    };
    x = image;
    return x;
  });
export const winLoss = (clickedCards, currentClick) => {
  //true means not lost
  if (clickedCards.indexOf(currentClick) === -1) return true;
  else return false;
};
