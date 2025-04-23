// App.tsx
import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [level, setLevel] = useState<"easy" | "medium" | "hard">("easy");
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const startLearning = () => setScreen("level");

  const startStage1 = () => setScreen("stage1");
  const startStage2 = () => setScreen("stage2");
  const startStage3 = () => setScreen("stage3");
  const goHome = () => setScreen("home");

  return (
    <div className="container">
      {screen === "home" && (
        <>
          <img src="/avatar.png" alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={startLearning}>📚 Начать обучение</button>
            <button>💬 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "level" && (
        <>
          <h2>Выбери уровень сложности:</h2>
          <div className="buttons">
            <button onClick={() => { setLevel("easy"); startStage1(); }}>🟢 Лёгкий</button>
            <button onClick={() => { setLevel("medium"); startStage1(); }}>🟡 Средний</button>
            <button onClick={() => { setLevel("hard"); startStage1(); }}>🔴 Продвинутый</button>
          </div>
        </>
      )}

      {screen === "stage1" && (
        <>
          <h2>📘 Этап 1 — Соединение пар слов</h2>
          <p>Заглушка для упражнений соединения слов ({level})</p>
          <button onClick={startStage2}>➡️ Далее</button>
          <button onClick={goHome}>🏠 Назад</button>
        </>
      )}

      {screen === "stage2" && (
        <>
          <h2>🧠 Этап 2 — Выбор перевода</h2>
          <p>Заглушка для карточек выбора правильного перевода ({level})</p>
          <button onClick={startStage3}>➡️ Далее</button>
          <button onClick={goHome}>🏠 Назад</button>
        </>
      )}

      {screen === "stage3" && (
        <>
          <h2>✍️ Этап 3 — Составление предложения</h2>
          <p>Заглушка для упражнений составления предложений ({level})</p>
          <button onClick={goHome}>🏠 Завершить</button>
        </>
      )}
    </div>
  );
}

export default App;





