import { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";

function App() {
  const [screen, setScreen] = useState<"home" | "level" | "match">("home");
  const [selectedKaz, setSelectedKaz] = useState<string | null>(null);
  const [matched, setMatched] = useState<[string, string][]>([]);

  const wordPairs = [
    { kaz: "Сәлем", rus: "Привет" },
    { kaz: "Қалайсың", rus: "Как дела" },
    { kaz: "Жоқ", rus: "Нет" },
    { kaz: "Иә", rus: "Да" },
    { kaz: "Көмек", rus: "Помощь" },
    { kaz: "Оқу", rus: "Учёба" },
  ];

  const handleMatch = (rus: string) => {
    if (!selectedKaz) return;
    const correctPair = wordPairs.find(pair => pair.kaz === selectedKaz);
    if (correctPair && correctPair.rus === rus) {
      setMatched(prev => [...prev, [selectedKaz, rus]]);
    }
    setSelectedKaz(null);
  };

  const reset = () => {
    setMatched([]);
    setSelectedKaz(null);
  };

  if (screen === "home") {
    return (
      <div className="container">
        <img src={avatar} alt="KazBot Logo" className="logo" />
        <h1>KazBot</h1>
        <p className="description">Твой помощник в изучении казахского языка kz</p>
        <div className="buttons">
          <button onClick={() => setScreen("level")}>📚 Начать обучение</button>
          <button onClick={() => alert("🧠 Повторение — скоро!")}>💬 Повторение</button>
          <button onClick={() => alert("🎮 Игровой режим — скоро!")}>🎮 Игровой режим</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    );
  }

  if (screen === "level") {
    return (
      <div className="container">
        <h2>Выбери уровень</h2>
        <div className="buttons">
          <button onClick={() => setScreen("match")}>🔰 Начальный</button>
          <button disabled>🔷 Средний (скоро)</button>
          <button disabled>🔶 Продвинутый (скоро)</button>
        </div>
        <button className="back" onClick={() => setScreen("home")}>← Назад</button>
      </div>
    );
  }

  if (screen === "match") {
    const kazWords = wordPairs.map(pair => pair.kaz);
    const rusWords = wordPairs.map(pair => pair.rus);

    return (
      <div className="container">
        <h2>🔗 Соедини пары слов</h2>
        <div className="columns">
          <div>
            {kazWords.map(kaz => (
              <button
                key={kaz}
                className={selectedKaz === kaz ? "selected" : ""}
                onClick={() => setSelectedKaz(kaz)}
              >
                {kaz}
              </button>
            ))}
          </div>
          <div>
            {rusWords.map(rus => (
              <button key={rus} onClick={() => handleMatch(rus)}>
                {rus}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>Совпадения: {matched.length} / {wordPairs.length}</p>
          {matched.length === wordPairs.length && <p>🎉 Все слова соединены!</p>}
          <button onClick={reset}>🔄 Заново</button>
          <button className="back" onClick={() => setScreen("level")}>← Назад</button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;





