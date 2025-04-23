import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState<"home" | "match" | "cards" | "sentence">("home");
  const [selectedPair, setSelectedPair] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қалайсың", rus: "Как дела" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Жоқ", rus: "Нет" },
  ];

  const quizWord = "Сәлем";
  const options = ["Пока", "Привет", "Здравствуйте"];

  const sentenceRu = "Я иду в школу";
  const correctKaz = ["Мен", "мектепке", "барамын"];
  const shuffledKaz = ["барамын", "Мен", "мектепке"];

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    setIsCorrect(option === "Привет");
  };

  const handleSentenceClick = (word: string) => {
    setSentenceAnswer((prev) => [...prev, word]);
  };

  const resetAll = () => {
    setSelectedPair([]);
    setSelectedAnswer(null);
    setIsCorrect(null);
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
            <button onClick={() => setScreen("match")}>📚 Начать обучение</button>
            <button onClick={() => alert("💬 Повторение слов — скоро!")}>💬 Повторение</button>
            <button onClick={() => alert("🎮 Игровой режим — в разработке")}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "match" && (
        <>
          <h2>🔗 Соедини пары слов</h2>
          <div className="columns">
            <div>
              {wordPairs.map((pair) => (
                <button key={pair.kaz} onClick={() => setSelectedPair([pair.kaz, selectedPair[1]])}>
                  {pair.kaz}
                </button>
              ))}
            </div>
            <div>
              {wordPairs.map((pair) => (
                <button key={pair.rus} onClick={() => setSelectedPair([selectedPair[0], pair.rus])}>
                  {pair.rus}
                </button>
              ))}
            </div>
          </div>
          {selectedPair[0] && selectedPair[1] && (
            <p>
              Вы выбрали: <strong>{selectedPair[0]}</strong> = <strong>{selectedPair[1]}</strong>
            </p>
          )}
          <button onClick={() => { resetAll(); setScreen("cards"); }}>➡️ Далее</button>
        </>
      )}

      {screen === "cards" && (
        <>
          <h2>🧠 Выбери правильный перевод</h2>
          <p><strong>{quizWord}</strong> = ?</p>
          <div className="buttons">
            {options.map((option) => (
              <button
                key={option}
                style={{
                  backgroundColor:
                    selectedAnswer === option ? (isCorrect ? "#b3f1b3" : "#f9b3b3") : "white",
                }}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={() => { resetAll(); setScreen("sentence"); }}>➡️ Далее</button>
        </>
      )}

      {screen === "sentence" && (
        <>
          <h2>🧩 Собери перевод предложения</h2>
          <p>Предложение на русском: <strong>{sentenceRu}</strong></p>
          <div className="buttons">
            {shuffledKaz.map((word) => (
              <button
                key={word}
                disabled={sentenceAnswer.includes(word)}
                onClick={() => handleSentenceClick(word)}
              >
                {word}
              </button>
            ))}
          </div>
          <p>Ты выбрал: {sentenceAnswer.join(" ")}</p>
          {sentenceAnswer.join(" ") === correctKaz.join(" ") && (
            <p style={{ color: "green" }}>✅ Верно!</p>
          )}
          <button onClick={() => { setScreen("home"); resetAll(); }}>🏠 На главную</button>
        </>
      )}
    </div>
  );
}

export default App;

       







