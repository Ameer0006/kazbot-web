// App.tsx
import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<string | null>(null);
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
  const sentenceWords = ["Я", "в", "школу", "иду"];
  const correctSentence = ["Я", "иду", "в", "школу"];
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

  const handleAnswer = (option: string) => {
    const correct = option === "Привет";
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSentenceSelect = (word: string) => {
    if (!sentenceAnswer.includes(word)) {
      setSentenceAnswer([...sentenceAnswer, word]);
    }
  };

  const reset = () => {
    setShowResult(false);
    setIsCorrect(false);
    setSelected(null);
    setSentenceAnswer([]);
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
          <div className="buttons">
            <button onClick={() => setScreen("lesson")}>📚 Начать обучение</button>
            <button>🧠 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "lesson" && (
        <div className="lesson">
          <h2>Выбери перевод слова: <b>{quizWord}</b></h2>
          <div className="choices">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={
                  showResult ? (opt === "Привет" ? "correct" : "wrong") : ""
                }
                disabled={showResult}
              >
                {opt}
              </button>
            ))}
          </div>

          {showResult && (
            <div className="feedback">
              {isCorrect ? "✅ Верно!" : "❌ Неверно"}
              <button onClick={reset}>Дальше</button>
            </div>
          )}

          <hr />

          <h2>Собери предложение:</h2>
          <p><b>{sentence}</b></p>
          <div className="choices">
            {sentenceWords.map((w) => (
              <button key={w} onClick={() => handleSentenceSelect(w)}>
                {w}
              </button>
            ))}
          </div>
          <p>Ответ: {sentenceAnswer.join(" ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;


