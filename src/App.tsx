import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "lesson") {
    return (
      <div className="container">
        <img src={avatar} alt="KazBot Logo" className="logo" />
        <h1>📚 Урок 1</h1>
        <p className="description">Сәлем! – Привет!<br />Қалың қалай? – Как дела?</p>
        <button onClick={() => setScreen("home")}>⬅ Назад</button>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка kz</p>
      <div className="buttons">
        <button onClick={() => setScreen("lesson")}>📚 Начать обучение</button>
        <button>🧠 Повторение</button>
        <button>🎮 Игровой режим</button>
      </div>
      <footer>@kzKazakhbot</footer>
    </div>
  );
}

export default App;


