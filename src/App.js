import { Card } from "./components/Card";
import { Header } from "./components/header";
import { useState } from "react";
import style from "./App.css";
function App() {
  document.title = "Memory Game";
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header current={currentScore} best={bestScore} />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
