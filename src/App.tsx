import { useState } from 'react';
import './App.css';

const wordPairs = [
  { kz: 'Сәлем', ru: 'Привет' },
  { kz: 'Қалайсың', ru: 'Как дела' },
  { kz: 'Иә', ru: 'Да' },
  { kz: 'Жоқ', ru: 'Нет' },
];

function App() {
  const [selectedKaz, setSelectedKaz] = useState<string | null>(null);
  const [matched, setMatched] = useState<{ [kz: string]: string }>({});
  const [error, setError] = useState(false);

  const handleKazClick = (word: string) => {
    setSelectedKaz(word);
  };

  const handleRuClick = (word: string) => {
    if (!selectedKaz) return;
    const pair = wordPairs.find((p) => p.kz === selectedKaz);
    if (pair?.ru === word) {
      setMatched((prev) => ({ ...prev, [selectedKaz]: word }));
      setError(false);
    } else {
      setMatched({});
      setError(true);
    }
    setSelectedKaz(null);
  };

  const allCorrect = Object.keys(matched).length === wordPairs.length;

  return (
    <div className="container">
      <h2>🔵 Этап 1: Соединение пар слов</h2>
      <p>Соедини слова на казахском и русском</p>

      <div className="columns">
        <div className="column">
          {wordPairs.map((pair) => (
            <button
              key={pair.kz}
              className={`word-button ${selectedKaz === pair.kz ? 'selected' : ''}`}
              onClick={() => handleKazClick(pair.kz)}>
              {pair.kz}
            </button>
          ))}
        </div>

        <div className="column">
          {wordPairs.map((pair) => (
            <button
              key={pair.ru}
              className={`word-button ${matched[pair.kz] === pair.ru ? 'matched' : ''}`}
              onClick={() => handleRuClick(pair.ru)}>
              {pair.ru}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="error">❌ Ошибка! Начни заново.</p>}
      {allCorrect && <button className="next-button">➡ Далее</button>}
    </div>
  );
}

export default App;



