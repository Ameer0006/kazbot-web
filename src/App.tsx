import './App.css';
import avatar from './assets/Молодой человек в головном уборе.png';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('home');

  const handleLearnClick = () => {
    setScreen('learn');
  };

  return (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка kz</p>

      <div className="buttons">
        <button onClick={handleLearnClick}>📚 Начать обучение</button>
        <button>💭 Повторение</button>
        <button>🎮 Игровой режим</button>
      </div>

      <footer>@kzKazakhbot</footer>
    </div>
  );
}

export default App;






