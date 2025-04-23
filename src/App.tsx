import React, { useState, useEffect } from 'react';
import './App.css';
import avatar from './assets/Молодой человек в головном уборе.png';

function App() {
  const [screen, setScreen] = useState('home');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState('easy');
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const nextScreen = () => {
    if (screen === 'home') setScreen('stage1');
    else if (screen === 'stage1') setScreen('stage2');
    else if (screen === 'stage2') setScreen('stage3');
  };

  const prevScreen = () => {
    if (screen === 'stage3') setScreen('stage2');
    else if (screen === 'stage2') setScreen('stage1');
    else if (screen === 'stage1') setScreen('home');
  };

  useEffect(() => {
    // Просто чтобы использовать переменные — показываем очки в консоли
    console.log(`Текущий уровень: ${level}, Очки: ${score}`);
  }, [score, level]);

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <button onClick={nextScreen}>📘 Начать обучение</button>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === 'stage1' && (
        <div className="stage">
          <h2>📘 Этап 1: Соединение пар слов</h2>
          <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
          <div className="controls">
            <button onClick={nextScreen}>→ Далее</button>
            <button onClick={prevScreen}>← Назад</button>
          </div>
        </div>
      )}

      {screen === 'stage2' && (
        <div className="stage">
          <h2>🧠 Этап 2: Выбор перевода</h2>
          <p>Будет слово, и пользователь выберет перевод.</p>
          <div className="controls">
            <button onClick={nextScreen}>→ Далее</button>
            <button onClick={prevScreen}>← Назад</button>
          </div>
        </div>
      )}

      {screen === 'stage3' && (
        <div className="stage">
          <h2>✍️ Этап 3: Составление предложения</h2>
          <p>Пользователь должен собрать предложение из слов.</p>
          <div className="controls">
            <button onClick={prevScreen}>← Назад</button>
          </div>
        </div>
      )}

      <div className="stats">
        <p>Уровень: {level}</p>
        <p>Очки: {score}</p>
        <p>Правильно: {stats.correct} / Ошибки: {stats.incorrect}</p>
      </div>
    </div>
  );
}
<p>Уровень: {level}</p>
<p>Очки: {score}</p>
<p>Статистика: {stats.correct} правильных, {stats.incorrect} ошибок</p>

export default App;





