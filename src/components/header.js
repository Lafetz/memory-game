import logo from "../imgs/logo.svg";
import styles from "./Header.module.css";
export const Header = (props) => {
  const { current, best } = props;
  return (
    <div className={styles.divBackground}>
      <div className={styles.title}>
        <img className={styles.logo} src={logo} alt="logo"></img>
        <h1 className={styles.titleText}>Memory Game</h1>
      </div>
      <div className={styles.scores}>
        <h2>Max Score:10</h2>
        <h2>Current Score:{current}</h2>
        <h2>Best Score:{best}</h2>
      </div>
    </div>
  );
};
