// App.tsx
import { useState } from 'react';
import './App.css';
import avatar from './assets/Молодой человек в традиционном головном уборе.png';

function App() {
  const [screen, setScreen] = useState<'home' | 'match' | 'quiz' | 'sentence'>('home');
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [sentenceAnswer, setSentenceAnswer] = useState<string[]>([]);

  const wordPairs = [
    { kaz: 'Сәлем', rus: 'Привет' },
    { kaz: 'Қалың қалай', rus: 'Как дела' },
    { kaz: 'Иә', rus: 'Да' },
    { kaz: 'Жоқ', rus: 'Нет' },
  ];

  const quizWord = 'Сәлем';
  const quizOptions = ['Пока', 'Привет', 'Здравствуйте'];

  const sentence = 'Мен мектепке барамын';
  const sentenceWords = ['Я', 'в', 'школу', 'иду'];
  const correctSentence = ['Я', 'иду', 'в', 'школу'];

  const handleLearnClick = () => setScreen('match');
  const handleReviewClick = () => setScreen('quiz');
  const handleGameClick = () => setScreen('sentence');

  const handleAnswer = (option: string) => {
    const correct = option === 'Привет';
    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setScreen('sentence');
    }, 1000);
  };

  const handleSentenceSelect = (word: string) => {
    setSentenceAnswer(prev => [...prev, word]);
  };

  const reset = () => {
    setSentenceAnswer([]);
    setScreen('home');
  };

  return (
    <div className="container">
      {screen === 'home' && (
        <>
          <img src={avatar} alt="KazBot Logo" className="logo" />
          <h1>KazBot</h1>
          <p className="description">Твой помощник в изучении казахского языка kz</p>
          <div className="buttons">
            <button onClick={handleLearnClick}>📚 Начать обучение</button>
            <button onClick={handleReviewClick}>🧠 Повторение</button>
            <button onClick={handleGameClick}>🎮 Игровой режим</button>
          </div>
          <footer>@kzKazakhbot</footer>
        </>
      )}

      {screen === 'match' && (
        <div>
          <h2>Соедини слова</h2>
          <div className="columns">
            <div>
              <h3>Казахский</h3>
              {wordPairs.map((pair, i) => (
                <div key={i}>{pair.kaz}</div>
              ))}
            </div>
            <div>
              <h3>Русский</h3>
              {wordPairs.map((pair, i) => (
                <div key={i}>{pair.rus}</div>
              ))}
            </div>
          </div>
          <button onClick={() => setScreen('quiz')}>➡️ Далее</button>
        </div>
      )}

      {screen === 'quiz' && (
        <div>
          <h2>Выбери перевод слова</h2>
          <p><strong>{quizWord}</strong></p>
          {quizOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              style={{
                backgroundColor: showResult
                  ? opt === 'Привет'
                    ? 'lightgreen'
                    : opt === selected
                    ? 'salmon'
                    : ''
                  : ''
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {screen === 'sentence' && (
        <div>
          <h2>Собери перевод предложения</h2>
          <p><strong>{sentence}</strong></p>
          <div className="words">
            {sentenceWords.map((word, i) => (
              <button key={i} onClick={() => handleSentenceSelect(word)}>
                {word}
              </button>
            ))}
          </div>
          <p>Твой ответ: {sentenceAnswer.join(' ')}</p>
          <button onClick={reset}>🔄 Завершить</button>
        </div>
      )}
    </div>
  );
}

export default App;







