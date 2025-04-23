// src/App.tsx
import { useState } from 'react';
import './App.css';
import avatar from './assets/avatar.png';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'level' | 'learn' | 'repeat' | 'game' | 'stats'>('home');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [score, setScore] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка</p>
          <div className="buttons">
            <button onClick={() => setScreen('level')}>📖 Начать обучение</button>
            <button onClick={() => setScreen('repeat')}>🔁 Повторение</button>
            <button onClick={() => setScreen('game')}>🎮 Игровой режим</button>
          </div>
          <footer className="footer">@kzKazakhbot</footer>
        </>
      )}

      {screen === 'level' && (
        <>
          <h2>Выберите уровень</h2>
          <div className="buttons">
            <button onClick={() => { setLevel('beginner'); setScreen('learn'); }}>🔰 Начальный</button>
            <button onClick={() => { setLevel('intermediate'); setScreen('learn'); }}>⚙️ Средний</button>
            <button onClick={() => { setLevel('advanced'); setScreen('learn'); }}>🔥 Продвинутый</button>
          </div>
          <button className="back" onClick={() => setScreen('home')}>⬅ Назад</button>
        </>
      )}

      {screen === 'stats' && (
        <div>
          <h2>📊 Ваша статистика</h2>
          <p>Уровень: {level}</p>
          <p>Очки: {score}</p>
          <p>Ошибки: {errors.length}</p>
          <button onClick={() => setScreen('home')} className="back">⬅ Назад</button>
        </div>
      )}

      {/* Здесь позже подключим Step1, Step2, Step3, Repeat, Game */}
    </div>
  );
}






