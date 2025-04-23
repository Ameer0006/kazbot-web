import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в головном уборе.png";

function App() {
  const [screen, setScreen] = useState<"home" | "pairs" | "cards" | "sentence">("home");

  const [selectedKaz, setSelectedKaz] = useState<string | null>(null);
  const [selectedRus, setSelectedRus] = useState<string | null>(null);
  const [pairResult, setPairResult] = useState<string | null>(null);

  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қал қалай", rus: "Как дела" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Жоқ", rus: "Нет" },
  ];

  const quizWord = "Сәлем";
  const options = ["Пока", "Привет", "Здравствуйте"];

  const sentenceKaz = "Мен мектепке барамын";
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

  const resetSentence = () => {
    setSentenceAnswer([]);
  };

  const handlePairClick = () => {
    if (selectedKaz && selectedRus) {
      const match = wordPairs.find(p => p.kaz === selectedKaz && p.rus === selectedRus);
      if (match) {
        setPairResult(`✅ ${selectedKaz} = ${selectedRus}`);
      } else {
        setPairResult(`❌ Неправильно. Попробуй снова`);
      }
      setSelectedKaz(null);
      setSelectedRus(null);
    }
  };

  return (
    <div className="container">
      {screen === "home" && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={() => setScreen("pairs")}>📚 Начать обучение</button>
            <button onClick={() => alert("🧠 Повторение скоро будет!")}>🧠 Повторение</button>
            <button onClick={() => alert("🎮 Игровой режим в разработке")}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "pairs" && (
        <div>
          <h2>🔗 Соедини пары слов</h2>
          <div className="buttons">
            <div>
              {wordPairs.map(({ kaz }) => (
                <button key={kaz} onClick={() => setSelectedKaz(kaz)}>{kaz}</button>
              ))}
            </div>
            <div>
              {wordPairs.map(({ rus }) => (
                <button key={rus} onClick={() => setSelectedRus(rus)}>{rus}</button>
              ))}
            </div>
          </div>
          {selectedKaz && selectedRus && (
            <div style={{ marginTop: "10px" }}>
              <p>Вы выбрали: <strong>{selectedKaz} = {selectedRus}</strong></p>
              <button onClick={handlePairClick}>✅ Проверить</button>
            </div>
          )}
          {pairResult && (
            <div style={{ marginTop: "10px" }}>
              <p>{pairResult}</p>
              {pairResult.startsWith("✅") && <button onClick={() => setScreen("cards")}>➡️ Далее</button>}
            </div>
          )}
        </div>
      )}

      {screen === "cards" && (
        <div>
          <h2>📘 Выбери перевод слова</h2>
          <p><strong>{quizWord}</strong></p>
          <div className="buttons">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{
                  backgroundColor: showResult
                    ? option === "Привет"
                      ? "lightgreen"
                      : isCorrect
                      ? ""
                      : "salmon"
                    : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {showResult && (
            <div style={{ marginTop: "10px" }}>
              {isCorrect ? (
                <>
                  <p style={{ color: "green" }}>✅ Верно!</p>
                  <button onClick={() => { setScreen("sentence"); setShowResult(false); }}>➡️ Далее</button>
                </>
              ) : (
                <p style={{ color: "red" }}>❌ Неверно</p>
              )}
            </div>
          )}
        </div>
      )}

      {screen === "sentence" && (
        <div>
          <h2>📌 Составь предложение</h2>
          <p><strong>{sentenceKaz}</strong></p>
          <div className="buttons">
            {sentenceWords.map((word) => (
              <button
                key={word}
                onClick={() => handleSentenceSelect(word)}
                disabled={sentenceAnswer.includes(word)}
              >
                {word}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "10px" }}>
            <p><strong>Ваш ответ:</strong> {sentenceAnswer.join(" ")}</p>
          </div>
          {sentenceAnswer.length === correctSentence.length && (
            <div>
              {sentenceAnswer.join(" ") === correctSentence.join(" ") ? (
                <>
                  <p style={{ color: "green" }}>✅ Молодец! Всё правильно.</p>
                  <button onClick={() => setScreen("home")}>🏠 В меню</button>
                </>
              ) : (
                <>
                  <p style={{ color: "red" }}>❌ Ошибка! Попробуй снова.</p>
                  <button onClick={resetSentence}>🔁 Повторить</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;



