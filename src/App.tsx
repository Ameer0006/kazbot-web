// App.tsx
import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

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
  const correctSentence = ["Я", "в", "школу", "иду"];

  const handleAnswer = (option: string) => {
    const correct = option === "Привет";
    setCorrect(correct);
    setShowResult(true);
  };

  const handleSentenceSelect = (word: string) => {
    setSentenceAnswer([...sentenceAnswer, word]);
  };

  const reset = () => {
    setShowResult(false);
    setCorrect(false);
    setSentenceAnswer([]);
  };

  return (
    <div className="container">
      {screen === "home" && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={() => setScreen("match")}>📖 Начать обучение</button>
            <button>🧠 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "match" && (
        <>
          <h2>🧩 Соедини пары</h2>
          <div className="match-columns">
            <div>
              {wordPairs.map((pair, index) => (
                <div key={index} className="word-box">{pair.kaz}</div>
              ))}
            </div>
            <div>
              {wordPairs.map((pair, index) => (
                <div key={index} className="word-box">{pair.rus}</div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("quiz")} className="next-button">➡️ Далее</button>
        </>
      )}

      {screen === "quiz" && (
        <>
          <h2>🧠 Выбери перевод слова: {quizWord}</h2>
          <div className="quiz-options">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={showResult ? (option === "Привет" ? "correct" : "incorrect") : ""}
              >
                {option}
              </button>
            ))}
          </div>
          {showResult && (
            <p>{isCorrect ? "✅ Правильно!" : "❌ Неправильно!"}</p>
          )}
          <button onClick={() => setScreen("sentence")} className="next-button">➡️ Далее</button>
        </>
      )}

      {screen === "sentence" && (
        <>
          <h2>✍️ Составь перевод:</h2>
          <p><strong>{sentence}</strong></p>
          <div className="sentence-constructor">
            {sentenceWords.map((word, index) => (
              <button key={index} onClick={() => handleSentenceSelect(word)}>{word}</button>
            ))}
          </div>
          <p>Ваш ответ: {sentenceAnswer.join(" ")}</p>
          <button onClick={reset} className="next-button">🔁 Заново</button>
        </>
      )}
    </div>
  );
}

export default App;




