import './App.css'
import avatar from './assets/Молодой человек в традиционном головном уборе.png'

function App() {
  const handleLearnClick = () => {
    alert("📚 Старт обучения — скоро будет контент!");
  }

  const handleReviewClick = () => {
    alert("🧠 Повторение слов — в разработке!");
  }

  const handleGameClick = () => {
    alert("🎮 Игра загружается...");
  }

  return (
    <div className="container">
      <img src={avatar} alt="KazBot Logo" className="logo" />
      <h1>KazBot</h1>
      <p className="description">Твой помощник в изучении казахского языка 🇰🇿</p>

      <div className="buttons">
        <button onClick={handleLearnClick}>📚 Начать обучение</button>
        <button onClick={handleReviewClick}>🧠 Повторение</button>
        <button onClick={handleGameClick}>🎮 Игровой режим</button>
      </div>

      <footer>@kzKazakhbot</footer>
    </div>
  )
}

export default App






