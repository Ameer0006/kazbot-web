// App.tsx
import './App.css';
import avatar from './assets/Молодой человек в традиционном головном уборе.png';
import React, { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'step1' | 'step2' | 'step3'>('home');
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const wordPairs = [
    { kz: 'Сәлем', ru: 'Привет' },
    { kz: 'Қалайсың', ru: 'Как дела' },
    { kz: 'Иә', ru: 'Да' },
    { kz: 'Жоқ', ru: 'Нет' },
  ];

  const handleWordClick = (word: string) => {
    if (!selectedWord) {
      setSelectedWord(word);
    } else {
      console.log(`Выбрана пара: ${selectedWord} = ${word}`);
      setSelectedWord(null);
    }
  };

  const goBack = () => {
    if (screen === 'step1') setScreen('home');
    else if (screen === 'step2') setScreen('step1');
    else if (screen === 'step3') setScreen('step2');
  };

  const goNext = () => {
    if (screen === 'home') setScreen('step1');
    else if (screen === 'step1') setScreen('step2');
    else if (screen === 'step2') setScreen('step3');
  };

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={() => setScreen('step1')}>📚 Начать обучение</button>
            <button>💬 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === 'step1' && (
        <>
          <h2>🔵 Этап 1: Соединение пар слов</h2>
          <p>Соедини слова на казахском и русском</p>
          <div className="pairing">
            <div>
              {wordPairs.map(({ kz }, idx) => (
                <button key={`kz-${idx}`} onClick={() => handleWordClick(kz)}>{kz}</button>
              ))}
            </div>
            <div>
              {wordPairs.map(({ ru }, idx) => (
                <button key={`ru-${idx}`} onClick={() => handleWordClick(ru)}>{ru}</button>
              ))}
            </div>
          </div>
          <div className="nav">
            <button onClick={goNext}>→ Далее</button>
            <button onClick={goBack}>← Назад</button>
          </div>
        </>
      )}

      {screen === 'step2' && (
        <>
          <h2>🧠 Этап 2: Выбор перевода</h2>
          <p>Будет слово, и пользователь выберет перевод.</p>
          <div className="nav">
            <button onClick={goNext}>→ Далее</button>
            <button onClick={goBack}>← Назад</button>
          </div>
        </>
      )}

      {screen === 'step3' && (
        <>
          <h2>✍️ Этап 3: Составление предложения</h2>
          <p>Пользователь должен собрать предложение из слов.</p>
          <div className="nav">
            <button onClick={goBack}>← Назад</button>
          </div>
        </>
      )}
    </div>
  );
}


