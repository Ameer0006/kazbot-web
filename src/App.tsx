// App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

const levels = ["easy", "medium", "hard"];

const wordsByLevel = {
  easy: [
    { kz: "Сәлем", ru: "Привет" },
    { kz: "Қалайсың", ru: "Как дела" },
    { kz: "Иә", ru: "Да" },
    { kz: "Жоқ", ru: "Нет" },
  ],
  medium: [
    { kz: "Оқимын", ru: "Я учусь" },
    { kz: "Келемін", ru: "Я иду" },
    { kz: "Ішемін", ru: "Я пью" },
  ],
  hard: [
    { kz: "Түсінбедім", ru: "Я не понял" },
    { kz: "Кездесейік", ru: "Давайте встретимся" },
    { kz: "Ұсынамын", ru: "Я предлагаю" },
  ],
};

export default function App() {
  const [screen, setScreen] = useState("home");
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [selectedPair, setSelectedPair] = useState<{ kz: string | null; ru: string | null }>({ kz: null, ru: null });
  const [matchedPairs, setMatchedPairs] = useState<string[][]>([]);

  const wordPairs = wordsByLevel[level];

  const handleLevelSelect = (lvl: string) => {
    setLevel(lvl);
    setScreen("learn1");
  };

  const handlePairClick = (side: "kz" | "ru", word: string) => {
    const updated = { ...selectedPair, [side]: word };
    setSelectedPair(updated);

    if (updated.kz && updated.ru) {
      const isMatch = wordPairs.some((pair) => pair.kz === updated.kz && pair.ru === updated.ru);
      if (isMatch) {
        setMatchedPairs([...matchedPairs, [updated.kz, updated.ru]]);
        setScore(score + 10);
      } else {
        setErrors(errors + 1);
        setMatchedPairs([]); // reset all if wrong
      }
      setSelectedPair({ kz: null, ru: null });
    }
  };

  const renderHome = () => (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка kz</p>
      <div className="buttons">
        <h3>Выбери уровень:</h3>
        {levels.map((lvl) => (
          <button key={lvl} onClick={() => handleLevelSelect(lvl)}>
            {lvl === "easy" ? "Начальный" : lvl === "medium" ? "Средний" : "Продвинутый"}
          </button>
        ))}
      </div>
    </div>
  );

  const renderLearn1 = () => (
    <div className="container">
      <h2>🔷 Этап 1: Соединение пар слов</h2>
      <p>Соедини казахские слова с русскими</p>
      <div className="grid">
        <div>
          {wordPairs.map((pair) => (
            <button key={pair.kz} onClick={() => handlePairClick("kz", pair.kz)}>{pair.kz}</button>
          ))}
        </div>
        <div>
          {wordPairs.map((pair) => (
            <button key={pair.ru} onClick={() => handlePairClick("ru", pair.ru)}>{pair.ru}</button>
          ))}
        </div>
      </div>
      <div>
        <p>Очки: {score}</p>
        <p>Ошибки: {errors}</p>
      </div>
      <button onClick={() => setScreen("learn2")}>➡️ Далее</button>
      <button onClick={() => setScreen("home")}>⬅️ Назад</button>
    </div>
  );

  const renderLearn2 = () => (
    <div className="container">
      <h2>🧠 Этап 2: Выбор перевода</h2>
      <p>Скоро добавим</p>
      <button onClick={() => setScreen("learn3")}>➡️ Далее</button>
      <button onClick={() => setScreen("learn1")}>⬅️ Назад</button>
    </div>
  );

  const renderLearn3 = () => (
    <div className="container">
      <h2>✍️ Этап 3: Составление предложения</h2>
      <p>Скоро добавим</p>
      <button onClick={() => setScreen("learn2")}>⬅️ Назад</button>
    </div>
  );

  return screen === "home"
    ? renderHome()
    : screen === "learn1"
    ? renderLearn1()
    : screen === "learn2"
    ? renderLearn2()
    : renderLearn3();
}






