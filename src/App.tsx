import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedWord, setSelectedWord] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedSentence, setSentenceAnswer] = useState([]);

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

  const handleAnswer = (option) => {
    const correct = option === "Привет";
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSentenceSelect = (word) => {
    if (selectedSentence.includes(word)) return;
    setSentenceAnswer([...selectedSentence, word]);
  };

  const reset = () => {
    setShowResult(false);
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
            <button onClick={() => setScreen("step1")}>📚 Начать обучение</button>
            <button>🧠 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "step1" && (
        <>
          <h2>🔗 Соедините пары слов</h2>
          <div className="match-columns">
            <div>
              {wordPairs.map((pair, i) => (
                <div
                  key={i}
                  className={`word ${selectedWord === pair.kaz ? "selected" : ""}`}
                  onClick={() => setSelectedWord(pair.kaz)}
                >
                  {pair.kaz}
                </div>
              ))}
            </div>
            <div>
              {wordPairs.map((pair, i) => (
                <div
                  key={i}
                  className="word"
                  onClick={() => {
                    if (selectedWord && selectedWord === pair.kaz) {
                      alert("✅ Правильно!");
                    } else {
                      alert("❌ Неправильно");
                    }
                    setSelectedWord(null);
                  }}
                >
                  {pair.rus}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("step2")}>➡️ Далее</button>
        </>
      )}

      {screen === "step2" && (
        <>
          <h2>🃏 Выберите правильный перевод</h2>
          <p>Что значит: <b>{quizWord}</b>?</p>
          <div className="options">
            {options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className={showResult ? (option === "Привет" ? "correct" : "wrong") : ""}
              >
                {option}
              </button>
            ))}
          </div>
          {showResult && (
            <p>{isCorrect ? "✅ Верно!" : "❌ Неверно!"}</p>
          )}
          <button onClick={() => setScreen("step3")}>➡️ Далее</button>
        </>
      )}

      {screen === "step3" && (
        <>
          <h2>📚 Соберите перевод предложения</h2>
          <p>Предложение: <b>{sentence}</b></p>
          <div className="sentence">
            {sentenceWords.map((word, i) => (
              <button key={i} onClick={() => handleSentenceSelect(word)}>
                {word}
              </button>
            ))}
          </div>
          <p>Ваш ответ: <b>{selectedSentence.join(" ")}</b></p>
          {selectedSentence.length === correctSentence.length && (
            <p>
              {JSON.stringify(selectedSentence) === JSON.stringify(correctSentence)
                ? "✅ Верно!"
                : "❌ Попробуйте снова"}
            </p>
          )}
          <button onClick={reset}>🔄 Сброс</button>
        </>
      )}
    </div>
  );
}

export default App;







