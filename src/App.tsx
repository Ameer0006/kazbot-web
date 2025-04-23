import './App.css';
import avatar from './assets/avatar.png';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState<'home' | 'level' | 'learn' | 'repeat' | 'game'>('home');
  const [level, setLevel] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);

  const handleStartClick = () => setScreen('level');
  const handleLevelSelect = (chosenLevel: 'easy' | 'medium' | 'hard') => {
    setLevel(chosenLevel);
    setScreen('learn');
  };

  const handleBackToHome = () => setScreen('home');

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={handleStartClick}>📚 Начать обучение</button>
            <button onClick={() => setScreen('repeat')}>💬 Повторение</button>
            <button onClick={() => setScreen('game')}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === 'level' && (
        <div className="level-select">
          <h2>Выбери уровень сложности</h2>
          <button onClick={() => handleLevelSelect('easy')}>Начальный</button>
          <button onClick={() => handleLevelSelect('medium')}>Средний</button>
          <button onClick={() => handleLevelSelect('hard')}>Продвинутый</button>
          <button onClick={handleBackToHome}>⬅ Назад</button>
        </div>
      )}

      {/* Заготовки для следующих экранов */}
      {screen === 'learn' && (
        <div>
          <h2>Режим обучения ({level})</h2>
          <p>Очки: {score} | Ошибки: {errors}</p>
          <button onClick={handleBackToHome}>⬅ Назад</button>
        </div>
      )}

      {screen === 'repeat' && (
        <div>
          <h2>Повторение ошибок</h2>
          <button onClick={handleBackToHome}>⬅ Назад</button>
        </div>
      )}

      {screen === 'game' && (
        <div>
          <h2>Игровой режим</h2>
          <button onClick={handleBackToHome}>⬅ Назад</button>
        </div>
      )}
    </div>
  );
}

export default App;





