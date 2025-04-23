// KazBot WebApp (React + Vercel)
// Начальный экран и логика переходов по этапам обучения

import React, { useState } from 'react';

const KazBot = () => {
  const [stage, setStage] = useState('main');

  const renderMainScreen = () => (
    <div className="flex flex-col items-center justify-center h-screen p-6 text-center">
      <img src="/bot-avatar.png" alt="KazBot Logo" className="w-20 h-20 rounded-full mb-4" />
      <h1 className="text-4xl font-bold mb-2">KazBot</h1>
      <p className="text-gray-600 mb-6">Твой помощник в изучении казахского языка</p>
      <div className="space-y-3">
        <button
          onClick={() => setStage('learn')}
          className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-600">
          📚 Начать обучение
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-2xl shadow">
          💬 Повторение
        </button>
        <button
          className="bg-purple-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-purple-600">
          🎮 Игровой режим
        </button>
      </div>
    </div>
  );

  const renderLearningStage = () => (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Этапы обучения</h2>
      <div className="space-y-4">
        <button
          onClick={() => setStage('match')}
          className="w-full bg-blue-100 text-blue-800 p-4 rounded-xl shadow">
          1. 🔗 Соединение слов
        </button>
        <button
          onClick={() => setStage('translate')}
          className="w-full bg-yellow-100 text-yellow-800 p-4 rounded-xl shadow">
          2. 📝 Перевод слов
        </button>
        <button
          onClick={() => setStage('sentence')}
          className="w-full bg-pink-100 text-pink-800 p-4 rounded-xl shadow">
          3. 🧩 Составление предложений
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (stage) {
      case 'main':
        return renderMainScreen();
      case 'learn':
        return renderLearningStage();
      case 'match':
        return <div className="p-6">Здесь будет интерфейс "Соединение слов"</div>;
      case 'translate':
        return <div className="p-6">Здесь будет интерфейс "Перевод слов"</div>;
      case 'sentence':
        return <div className="p-6">Здесь будет интерфейс "Составление предложений"</div>;
      default:
        return renderMainScreen();
    }
  };

  return <div className="font-sans min-h-screen bg-gray-50">{renderContent()}</div>;
};

export default KazBot;


