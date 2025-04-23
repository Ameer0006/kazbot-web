// App.tsx
import { useState } from 'react';
import avatar from './assets/Молодой человек в традиционном головном уборе.png';
import './App.css';

function App() {
  const [screen, setScreen] = useState<'home' | 'step1' | 'step2' | 'step3'>('home');
  const [selectedKaz, setSelectedKaz] = useState<string | null>(null);
  const [matched, setMatched] = useState<{ [key: string]: string }>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedSentenceWords, setSelectedSentenceWords] = useState<string[]>([]);

  const wordPairs = [
    { kz: 'Сәлем', ru: 'Привет' },
    { kz: 'Қалайсың', ru: 'Как дела' },
    { kz: 'Иә', ru: 'Да' },
    { kz: 'Жоқ', ru: 'Нет' },
  ];

  const quizWord = 'Сәлем';
  const options = ['Пока', 'Привет', 'Здравствуйте'];

  const sentenceKaz = 'Мен мектепке барамын';
  const sentenceWords = ['Я', 'в', 'школу', 'иду'];
  const correctSentence = ['Я', 'иду', 'в', 'школу'];

  const handleKazClick = (word: string) => setSelectedKaz(word);

  const handleRuClick = (word: string) => {
    if (!selectedKaz) return;
    const pair = wordPairs.find((p) => p.kz === selectedKaz);
    if (pair && pair.ru === word) {
      setMatched((prev) => ({ ...prev, [selectedKaz]: word }));
    } else {
      setMatched({});
    }
    setSelectedKaz(null);
  };

  const handleAnswerClick = (option: string) => setSelectedAnswer(option);

  const handleSentenceClick = (word: string) => {
    if (!selectedSentenceWords.includes(word)) {
      setSelectedSentenceWords([...selectedSentenceWords, word]);
    }
  };

  const resetAll = () => {
    setMatched({});
    setSelectedKaz(null);
    setSelectedAnswer(null);
    setSelectedSentenceWords([]);
  };

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={() => setScreen('step1')}>📘 Начать обучение</button>
            <button>💬 Повторение</button>
            <button>🎮 Игровой режим</button>
          </div>
        </>
      )}

      {screen === 'step1' && (
        <>
          <h2>📘 Этап 1: Соединение слов</h2>
          <div className="columns">
            <div className="column">
              {wordPairs.map((pair) => (
                <button key={pair.kz} onClick={() => handleKazClick(pair.kz)}>
                  {pair.kz}
                </button>
              ))}
            </div>
            <div className="column">
              {wordPairs.map((pair) => (
                <button
                  key={pair.ru}
                  onClick={() => handleRuClick(pair.ru)}
                  className={matched[pair.kz] === pair.ru ? 'matched' : ''}>
                  {pair.ru}
                </button>
              ))}
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => { resetAll(); setScreen('home'); }}>⬅ Назад</button>
            <button onClick={() => setScreen('step2')}>➡ Далее</button>
          </div>
        </>
      )}

      {screen === 'step2' && (
        <>
          <h2>🧠 Этап 2: Выбор перевода</h2>
          <p><strong>{quizWord}</strong></p>
          <div className="options">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswerClick(opt)}
                style={{ backgroundColor: selectedAnswer === opt ? (opt === 'Привет' ? 'lightgreen' : 'salmon') : '' }}>
                {opt}
              </button>
            ))}
          </div>
          <div className="buttons">
            <button onClick={() => { resetAll(); setScreen('step1'); }}>⬅ Назад</button>
            <button onClick={() => setScreen('step3')}>➡ Далее</button>
          </div>
        </>
      )}

      {screen === 'step3' && (
        <>
          <h2>✍️ Этап 3: Составление предложения</h2>
          <p>{sentenceKaz}</p>
          <div className="options">
            {sentenceWords.map((word) => (
              <button key={word} onClick={() => handleSentenceClick(word)}>
                {word}
              </button>
            ))}
          </div>
          <p><strong>{selectedSentenceWords.join(' ')}</strong></p>
          <div className="buttons">
            <button onClick={() => { resetAll(); setScreen('step2'); }}>⬅ Назад</button>
            <button onClick={() => { resetAll(); setScreen('home'); }}>🏠 Домой</button>
          </div>
        </>
      )}
      <footer>@kzKazakhbot</footer>
    </div>
  );
}

export default App;


