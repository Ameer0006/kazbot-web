import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedPair, setSelectedPair] = useState<{ kaz: string; rus: string } | null>(null);
  const [quizResult, setQuizResult] = useState<null | boolean>(null);
  const [sentenceResult, setSentenceResult] = useState<null | boolean>(null);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қалайсың", rus: "Как дела" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Жоқ", rus: "Нет" },
  ];

  const options = ["Пока", "Привет", "Здравствуйте"];
  const correct = "Привет";

  const sentenceKaz = ["Мен", "мектепке", "барамын"];
  const sentenceRus = ["Я", "иду", "в", "школу"];
  const correctRus = ["Я", "иду", "в", "школу"];

  const handleLearnClick = () => {
    setScreen("match");
  };

  const handleReviewClick = () => {
    alert("🧠 Повторение слов — в разработке!");
  };

  const handleGameClick = () => {
    alert("🎮 Игра загружается...");
  };

  const handlePairSelect = (kaz: string, rus: string) => {
    const pair = wordPairs.find((p) => p.kaz === kaz);
    if (pair && pair.rus === rus) {
      setSelectedPair(pair);
    }
  };

  const handleQuizAnswer = (answer: string) => {
    setQuizResult(answer === correct);
  };

  const handleSentenceCheck = (userSentence: string[]) => {
    setSentenceResult(JSON.stringify(userSentence) === JSON.stringify(correctRus));
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
            <button onClick={handleLearnClick}>📘 Начать обучение</button>
            <button onClick={handleReviewClick}>🧠 Повторение</button>
            <button onClick={handleGameClick}>🎮 Игровой режим</button>
          </div>

          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "match" && (
        <div className="exercise">
          <h2>Соедини слова</h2>
          <div className="columns">
            <ul>
              {wordPairs.map((pair) => (
                <li key={pair.kaz}>{pair.kaz}</li>
              ))}
            </ul>
            <ul>
              {wordPairs.map((pair) => (
                <li key={pair.rus} onClick={() => handlePairSelect(pair.kaz, pair.rus)}>{pair.rus}</li>
              ))}
            </ul>
          </div>
          {selectedPair && <p>✅ Верно: {selectedPair.kaz} — {selectedPair.rus}</p>}

          <h2>Выбери перевод слова: "Сәлем"</h2>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleQuizAnswer(opt)}
              style={{ backgroundColor: quizResult === null ? '' : opt === correct ? 'lightgreen' : 'lightcoral' }}
            >
              {opt}
            </button>
          ))}

          <h2>Собери предложение: "Мен мектепке барамын"</h2>
          {sentenceRus.map((word, idx) => (
            <span key={idx}>{word} </span>
          ))}
          <button onClick={() => handleSentenceCheck(sentenceRus)}>Проверить</button>
          {sentenceResult !== null && (
            <p style={{ color: sentenceResult ? "green" : "red" }}>
              {sentenceResult ? "✅ Верно!" : "❌ Неверно"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

       







