// App.tsx (расширенная версия с уровнями, статистикой и аудио)
import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";

const wordPairs = [
  { kaz: "Сәлем", rus: "Привет" },
  { kaz: "Қалайсың", rus: "Как дела" },
  { kaz: "Иә", rus: "Да" },
  { kaz: "Жоқ", rus: "Нет" },
  { kaz: "Бардым", rus: "Пошёл" },
  { kaz: "Келеді", rus: "Придёт" },
  { kaz: "Жазып жатыр", rus: "Пишет" }
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [level, setLevel] = useState("beginner");
  const [score, setScore] = useState(0);

  const handleLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "kk-KZ";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      {screen === "home" && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">
            Твой помощник в изучении казахского языка kz
          </p>

          <select onChange={handleLevelChange} value={level} className="level-select">
            <option value="beginner">Начальный</option>
            <option value="intermediate">Средний</option>
            <option value="advanced">Продвинутый</option>
          </select>

          <div className="buttons">
            <button onClick={() => setScreen("learn")}>📚 Начать обучение</button>
            <button onClick={() => setScreen("stats")}>📊 Статистика</button>
            <button onClick={() => setScreen("game")}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "learn" && (
        <div>
          <h2>Соедини пары слов ({level})</h2>
          <div className="word-columns">
            <div className="column">
              {wordPairs.map((pair, index) => (
                <button key={index} onClick={() => playAudio(pair.kaz)}>
                  {pair.kaz} 🔊
                </button>
              ))}
            </div>
            <div className="column">
              {wordPairs.map((pair, index) => (
                <button key={index + 10}>{pair.rus}</button>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("home")} className="back">⬅ Назад</button>
        </div>
      )}

      {screen === "stats" && (
        <div>
          <h2>📊 Ваша статистика</h2>
          <p>Текущий уровень: {level}</p>
          <p>Набрано очков: {score}</p>
          <button onClick={() => setScreen("home")} className="back">⬅ Назад</button>
        </div>
      )}
    </div>
  );
}






