import React, { useEffect, useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в головном уборе.png";

const wordPairs = {
  easy: [
    { kz: "Сәлем", ru: "Привет" },
    { kz: "Қалайсың", ru: "Как дела" },
    { kz: "Иә", ru: "Да" },
    { kz: "Жоқ", ru: "Нет" },
  ],
  medium: [
    { kz: "Кел", ru: "Иди" },
    { kz: "Жазу", ru: "Писать" },
    { kz: "Оқу", ru: "Читать" },
    { kz: "Беру", ru: "Брать" },
  ],
  hard: [
    { kz: "Ұйымдастыру", ru: "Организовать" },
    { kz: "Дәлелдеу", ru: "Доказывать" },
    { kz: "Қатыстыру", ru: "Привлекать" },
  ]
};

function App() {
  const [screen, setScreen] = useState("home");
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  useEffect(() => {
    console.log("Level:", level);
    console.log("Score:", score);
    console.log("Stats:", stats);
  }, [level, score, stats]);

  const goToNext = () => {
    if (screen === "step1") setScreen("step2");
    else if (screen === "step2") setScreen("step3");
  };

  const goToPrev = () => {
    if (screen === "step2") setScreen("step1");
    else if (screen === "step3") setScreen("step2");
  };

  const startTraining = () => setScreen("step1");

  if (screen === "step1") {
    return (
      <div className="container">
        <h2>📄 Этап 1: Соединение пар слов</h2>
        <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
        <div className="nav-buttons">
          <button onClick={goToNext}>→ Далее</button>
          <button onClick={goToPrev}>← Назад</button>
        </div>
      </div>
    );
  }

  if (screen === "step2") {
    return (
      <div className="container">
        <h2>🧠 Этап 2: Выбор перевода</h2>
        <p>Будет слово, и пользователь выберет перевод.</p>
        <div className="nav-buttons">
          <button onClick={goToNext}>→ Далее</button>
          <button onClick={goToPrev}>← Назад</button>
        </div>
      </div>
    );
  }

  if (screen === "step3") {
    return (
      <div className="container">
        <h2>✍️ Этап 3: Составление предложения</h2>
        <p>Пользователь должен собрать предложение из слов.</p>
        <div className="nav-buttons">
          <button onClick={goToPrev}>← Назад</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">
        Твой помощник в изучении казахского языка kz
      </p>
      <div className="buttons">
        <button onClick={startTraining}>📘 Начать обучение</button>
        <button>💬 Повторение</button>
        <button>🎮 Игровой режим</button>
      </div>
      <footer>@kzKazakhbot</footer>
    </div>
  );
}

export default App;


  





