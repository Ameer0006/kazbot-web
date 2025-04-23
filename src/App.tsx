import './App.css';
import avatar from './assets/Молодой человек в традиционном головном уборе.png';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState<'home' | 'level' | 'step1' | 'step2' | 'step3'>('home');
  const [level, setLevel] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [score, setScore] = useState(0);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });

  const goNext = () => {
    if (screen === 'home') setScreen('level');
    else if (screen === 'level') setScreen('step1');
    else if (screen === 'step1') setScreen('step2');
    else if (screen === 'step2') setScreen('step3');
  };

  const goBack = () => {
    if (screen === 'step3') setScreen('step2');
    else if (screen === 'step2') setScreen('step1');
    else if (screen === 'step1') setScreen('level');
    else if (screen === 'level') setScreen('home');
  };

  const screens = {
    home: (
      <div className="container">
        <img src={avatar} alt="KazBot Logo" className="logo" />
        <h1>KazBot</h1>
        <p className="description">Твой помощник в изучении казахского языка kz</p>
        <div className="buttons">
          <button onClick={() => setScreen('level')}>📚 Начать обучение</button>
          <button onClick={() => alert('🧠 Повторение скоро!')}>💬 Повторение</button>
          <button onClick={() => alert('🎮 Игровой режим в разработке')}>🎮 Игровой режим</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    ),

    level: (
      <div className="container">
        <h2>Выбери уровень сложности</h2>
        <div className="buttons">
          <button onClick={() => { setLevel('easy'); goNext(); }}>Лёгкий</button>
          <button onClick={() => { setLevel('medium'); goNext(); }}>Средний</button>
          <button onClick={() => { setLevel('hard'); goNext(); }}>Сложный</button>
        </div>
        <button onClick={goBack}>← Назад</button>
      </div>
    ),

    step1: (
      <div className="container">
        <h2>📘 Этап 1: Соединение пар слов</h2>
        <p>Здесь будет интерфейс для соединения казахских и русских слов.</p>
        <div className="buttons">
          <button onClick={goNext}>→ Далее</button>
          <button onClick={goBack}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    ),

    step2: (
      <div className="container">
        <h2>🧠 Этап 2: Выбор перевода</h2>
        <p>Будет слово, и пользователь выберет перевод.</p>
        <div className="buttons">
          <button onClick={goNext}>→ Далее</button>
          <button onClick={goBack}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    ),

    step3: (
      <div className="container">
        <h2>✍️ Этап 3: Составление предложения</h2>
        <p>Пользователь должен собрать предложение из слов.</p>
        <div className="buttons">
          <button onClick={goBack}>← Назад</button>
        </div>
        <footer>@kzKazakhbot</footer>
      </div>
    ),
  };

  return screens[screen];
}

export default App;

  





