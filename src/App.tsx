import { useState } from "react";
import "./App.css";
import avatar from "./assets/Молодой человек в традиционном головном уборе.png";

function App() {
  const [screen, setScreen] = useState<"home" | "learn1" | "learn2" | "learn3">("home");

  const handleLearnClick = () => {
    setScreen("learn1");
  };

  const handleBack = () => {
    setScreen("home");
  };

  return (
    <div className="container">
      {screen === "home" && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={handleLearnClick}>📚 Начать обучение</button>
            <button onClick={() => alert("🔁 Повторение скоро!")}>💬 Повторение</button>
            <button onClick={() => alert("🎮 Игровой режим в разработке")}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === "learn1" && (
        <>
          <h2>📘 Этап 1: Соединение пар слов</h2>
          <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
          <button onClick={() => setScreen("learn2")}>➡ Далее</button>
          <button onClick={handleBack}>⬅ Назад</button>
        </>
      )}

      {screen === "learn2" && (
        <>
          <h2>🧠 Этап 2: Выбор перевода</h2>
          <p>Будет слово, и пользователь выберет перевод.</p>
          <button onClick={() => setScreen("learn3")}>➡ Далее</button>
          <button onClick={handleBack}>⬅ Назад</button>
        </>
      )}

      {screen === "learn3" && (
        <>
          <h2>✍️ Этап 3: Составление предложения</h2>
          <p>Пользователь должен собрать предложение из слов.</p>
          <button onClick={handleBack}>⬅ Назад</button>
        </>
      )}
    </div>
  );
}

export default App;






