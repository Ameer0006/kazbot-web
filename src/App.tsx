  return (
  <>
    {screen === "home" && (
      <div className="container">
        <img src={avatar} alt="KazBot Logo" className="logo" />
        <h1>KazBot</h1>
        <p className="description">Твой помощник в изучении казахского языка kz</p>
        <div className="buttons">
          <button onClick={() => setScreen("level")}>📚 Начать обучение</button>
          <button onClick={() => alert("🧠 Повторение в разработке!")}>💬 Повторение</button>
          <button onClick={() => alert("🎮 Игровой режим скоро!")}>🎮 Игровой режим</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    )}

    {screen === "level" && (
      <div className="container">
        <h2>Выбери уровень сложности</h2>
        <div className="buttons">
          <button onClick={() => { setLevel("easy"); setScreen("step1"); }}>Начальный</button>
          <button onClick={() => { setLevel("medium"); setScreen("step1"); }}>Средний</button>
          <button onClick={() => { setLevel("hard"); setScreen("step1"); }}>Продвинутый</button>
        </div>
        <button onClick={() => setScreen("home")}>← Назад</button>
      </div>
    )}

    {screen === "step1" && (
      <div className="container">
        <h2>🟦 Этап 1: Соединение пар слов</h2>
        <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
        <div className="buttons">
          <button onClick={() => setScreen("step2")}>→ Далее</button>
          <button onClick={() => setScreen("level")}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    )}

    {screen === "step2" && (
      <div className="container">
        <h2>🧠 Этап 2: Выбор перевода</h2>
        <p>Будет слово, и пользователь выберет перевод.</p>
        <div className="buttons">
          <button onClick={() => setScreen("step3")}>→ Далее</button>
          <button onClick={() => setScreen("step1")}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    )}

    {screen === "step3" && (
      <div className="container">
        <h2>✍️ Этап 3: Составление предложения</h2>
        <p>Пользователь должен собрать предложение из слов.</p>
        <div className="buttons">
          <button onClick={() => setScreen("step2")}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    )}
  </>
);
                       
