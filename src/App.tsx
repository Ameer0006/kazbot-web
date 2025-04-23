// App.tsx
import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedWord, setSelectedWord] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қалың қалай", rus: "Как дела" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Жоқ", rus: "Нет" },
  ];

  const quizWord = "Сәлем";
  const options = ["Пока", "Привет", "Здравствуйте"];

  const sentence = "Мен мектепке барамын";
  const words = ["барамын", "Мен", "мектепке", "үйге"];

  const handleAnswer = (option: string) => {
    const correct = option === "Привет";
    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
    }, 1500);
  };

  if (screen === "lesson") {
    return (
      <div className="container">
        <h1>🔗 Упражнение 1: Соединение слов</h1>
        <div className="grid">
          <div className="column">
            {wordPairs.map((pair, idx) => (
              <div
                key={idx}
                className="word-box"
                onClick={() => setSelectedWord(pair.kaz)}
              >
                {pair.kaz}
              </div>
            ))}
          </div>
          <div className="column">
            {wordPairs.map((pair, idx) => (
              <div
                key={idx}
                className={`word-box ${selectedWord === pair.kaz ? "highlight" : ""}`}
              >
                {pair.rus}
              </div>
            ))}
          </div>
        </div>

        <h2>🃏 Карточка</h2>
        <div className="card-quiz">
          <p><strong>{quizWord}</strong> = ?</p>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className={`option-btn ${showResult ? (opt === "Привет" ? "correct" : "wrong") : ""}`}
              disabled={showResult}
            >
              {opt}
            </button>
          ))}
        </div>

        <h2>🧩 Собери предложение</h2>
        <div className="sentence-construct">
          <p>Собери предложение: "Я иду в школу"</p>
          <div className="words">
            {words.map((word, idx) => (
              <button key={idx} className="word-chunk">{word}</button>
            ))}
          </div>
        </div>

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


