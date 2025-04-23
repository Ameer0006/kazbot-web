// App.tsx — KazBot WebApp
import React, { useState, useEffect } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    console.log("Level:", level);
    console.log("Score:", score);
    console.log("Stats:", stats);
  }, [level, score, stats]);

  const handleStart = () => setScreen("lesson");
  const handleLevelSelect = (selectedLevel: string) => {
    setLevel(selectedLevel);
    setScreen("lesson");
  };

  const handleNextStage = () => {
    if (currentStage < 3) setCurrentStage(currentStage + 1);
  };

  const handlePrevStage = () => {
    if (currentStage > 1) setCurrentStage(currentStage - 1);
  };

  const renderHome = () => (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка kz</p>
      <div className="buttons">
        <button onClick={() => setScreen("level")}>📘 Начать обучение</button>
        <button onClick={() => alert("🧠 Повторение — в разработке")}>💬 Повторение</button>
        <button onClick={() => alert("🎮 Игровой режим — скоро")}>🎮 Игровой режим</button>
      </div>
      <footer>@kzKazakhbot</footer>
    </div>
  );

  const renderLevelSelect = () => (
    <div className="container">
      <h2>Выбор уровня</h2>
      <div className="buttons">
        <button onClick={() => handleLevelSelect("easy")}>🔰 Начальный</button>
        <button onClick={() => handleLevelSelect("medium")}>⚖️ Средний</button>
        <button onClick={() => handleLevelSelect("hard")}>🔥 Продвинутый</button>
      </div>
    </div>
  );

  const renderStage = () => (
    <div className="container">
      {currentStage === 1 && (
        <>
          <h2>📘 Этап 1: Соединение пар слов</h2>
          <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
        </>
      )}
      {currentStage === 2 && (
        <>
          <h2>🧠 Этап 2: Выбор перевода</h2>
          <p>Будет слово, и пользователь выберет перевод.</p>
        </>
      )}
      {currentStage === 3 && (
        <>
          <h2>✍️ Этап 3: Составление предложения</h2>
          <p>Пользователь должен собрать предложение из слов.</p>
        </>
      )}
      <div className="buttons">
        {currentStage > 1 && <button onClick={handlePrevStage}>← Назад</button>}
        {currentStage < 3 && <button onClick={handleNextStage}>→ Далее</button>}
      </div>
      <footer>@kzKazakhbot</footer>
    </div>
  );

  return screen === "home"
    ? renderHome()
    : screen === "level"
    ? renderLevelSelect()
    : renderStage();
}

export default App;


