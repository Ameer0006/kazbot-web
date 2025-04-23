// App.tsx
import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedPair, setSelectedPair] = useState<{ kz: string; ru: string } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedSentence, setSelectedSentence] = useState<string[]>([]);

  const wordPairs = [
    { kz: "Сәлем", ru: "Привет" },
    { kz: "Қалың қалай", ru: "Как дела" },
    { kz: "Иә", ru: "Да" },
    { kz: "Жоқ", ru: "Нет" },
  ];

  const quizWord = "Сәлем";
  const options = ["Пока", "Привет", "Здравствуйте"];

  const sentence = "Мен мектепке барамын";
  const sentenceWords = ["Я", "в", "школу", "иду"];
  const correctSentence = ["Я", "иду", "в", "школу"];

  const handleAnswer = (option: string) => {
    const correct = option === "Привет";
    setSelectedOption(option);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSentenceSelect = (word: string) => {
    setSelectedSentence([...selectedSentence, word]);
  };

  const reset = () => {
    setScreen("home");
    setSelectedPair(null);
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
    setSelectedSentence([]);
  };

  return (
    <div className="App">
      {screen === "home" && (
        <div>
          <h1>KazBot</h1>
          <p>Твой помощник в изучении казахского языка</p>
          <button onClick={() => setScreen("match")}>Начать обучение</button>
        </div>
      )}

      {screen === "match" && (
        <div>
          <h2>Соедини пары слов</h2>
          <div className="columns">
            <div>
              {wordPairs.map((pair, i) => (
                <div key={i} onClick={() => setSelectedPair(pair)}>
                  {pair.kz}
                </div>
              ))}
            </div>
            <div>
              {wordPairs.map((pair, i) => (
                <div
                  key={i}
                  onClick={() => {
                    if (selectedPair && pair.ru === selectedPair.ru) {
                      alert("Правильно!");
                    } else {
                      alert("Неправильно");
                    }
                  }}
                >
                  {pair.ru}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen("quiz")}>Далее</button>
        </div>
      )}

      {screen === "quiz" && (
        <div>
          <h2>Выбери перевод слова: "{quizWord}"</h2>
          {options.map((option, i) => (
            <button
              key={i}
              style={{
                backgroundColor: showResult
                  ? option === selectedOption
                    ? isCorrect
                      ? "lightgreen"
                      : "salmon"
                    : ""
                  : "",
              }}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
          {showResult && <button onClick={() => setScreen("sentence")}>Далее</button>}
        </div>
      )}

      {screen === "sentence" && (
        <div>
          <h2>Собери перевод предложения: "{sentence}"</h2>
          <div>
            {sentenceWords.map((word, i) => (
              <button key={i} onClick={() => handleSentenceSelect(word)}>
                {word}
              </button>
            ))}
          </div>
          <p>{selectedSentence.join(" ")}</p>
          {selectedSentence.length === correctSentence.length && (
            <div>
              {JSON.stringify(selectedSentence) === JSON.stringify(correctSentence) ? (
                <p style={{ color: "green" }}>Правильно!</p>
              ) : (
                <p style={{ color: "red" }}>Неправильно</p>
              )}
              <button onClick={reset}>В начало</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;






