// App.tsx
import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қалың қалай", rus: "Как дела" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Жоқ", rus: "Нет" },
  ];

  const quizWord = "Сәлем";
  const quizOptions = ["Пока", "Привет", "Здравствуйте"];

  const sentence = "Мен мектепке барамын";
  const sentenceWords = ["Я", "в", "школу", "иду"];
  const correctSentence = ["Я", "иду", "в", "школу"];

  const handleAnswer = (option: string) => {
    const correct = option === "Привет";
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSentenceSelect = (word: string) => {
    setSentenceAnswer((prev) => [...prev, word]);
  };

  const reset = () => {
    setSentenceAnswer([]);
  };

  const handleLearnClick = () => setScreen("lesson");
  const handleReviewClick = () => alert("🧠 Повторение слов — в разработке!");
  const handleGameClick = () => alert("🎮 Игра загружается...");

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
            <button onClick={handleLearnClick}>📖 Начать обучение</button>
            <button onClick={handleReviewClick}>🧠 Повторение</button>
            <button onClick={handleGameClick}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "lesson" && (
        <div>
          <h2>Соедини слова</h2>
          <div className="columns">
            <ul>
              {wordPairs.map((pair, i) => (
                <li key={i}>{pair.kaz}</li>
              ))}
            </ul>
            <ul>
              {wordPairs.map((pair, i) => (
                <li key={i}>{pair.rus}</li>
              ))}
            </ul>
          </div>

          <h2>Выбери перевод</h2>
          <p>{quizWord}</p>
          <div className="buttons">
            {quizOptions.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                style={{
                  backgroundColor: showResult
                    ? option === "Привет"
                      ? "lightgreen"
                      : option === selected
                      ? "salmon"
                      : "white"
                    : "white",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <h2>Собери предложение</h2>
          <p>{sentence}</p>
          <div className="sentence-buttons">
            {sentenceWords.map((word, i) => (
              <button key={i} onClick={() => handleSentenceSelect(word)}>
                {word}
              </button>
            ))}
          </div>
          <p>Ответ: {sentenceAnswer.join(" ")}</p>
          <button onClick={reset}>🔁 Сбросить</button>
        </div>
      )}
    </div>
  );
}

export default App;







