// App.tsx
import './App.css';
import avatar from './assets/avatar.png';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState<'home' | 'game' | 'cards' | 'sentence'>('home');

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={() => setScreen('game')}>🔠 Соединение слов</button>
            <button onClick={() => setScreen('cards')}>📘 Карточки</button>
            <button onClick={() => setScreen('sentence')}>✍️ Составление предложений</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === 'game' && (
        <div>
          <h2>🔗 Соедини пары слов</h2>
          {/* Тут будет логика соединения */}
          <button onClick={() => setScreen('home')}>Назад</button>
        </div>
      )}

      {screen === 'cards' && (
        <div>
          <h2>📘 Выбери правильный перевод</h2>
          {/* Тут будут карточки */}
          <button onClick={() => setScreen('home')}>Назад</button>
        </div>
      )}

      {screen === 'sentence' && (
        <div>
          <h2>✍️ Собери предложение</h2>
          {/* Тут будет логика сборки предложения */}
          <button onClick={() => setScreen('home')}>Назад</button>
        </div>
      )}
    </div>
  );
}

export default App;


       







